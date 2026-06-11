// ============================================================
//  app.js – lógica principal multimodolos del simulacro
// ============================================================

let state = {
  selectedQuestions: [],
  currentIndex: 0,
  answers: [],       // 'correct' | 'wrong' | 'blank'
  selectedOption: null,
  answered: false,
  currentMode: 'random'
};

// ────────────────────────────────────────────────────────────
//  UTILIDADES
// ────────────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Generador inteligente de preguntas según el modo elegido
function selectQuestions(mode) {
  state.currentMode = mode;
  
  // Historial de vistas
  let seenIds = [];
  try {
    const stored = localStorage.getItem('edafologia_seen_questions');
    if (stored) seenIds = JSON.parse(stored);
  } catch(e) { seenIds = []; }
  const seenSet = new Set(seenIds);

  // Historial de falladas
  let wrongIds = [];
  try {
    const storedWrong = localStorage.getItem('edafologia_wrong_questions');
    if (storedWrong) wrongIds = JSON.parse(storedWrong);
  } catch(e) { wrongIds = []; }
  const wrongSet = new Set(wrongIds);

  // --- MODO 1: PREGUNTAS MÁS FALLADAS ---
  if (mode === 'wrong') {
    let poolWrong = QUESTIONS.filter(q => wrongSet.has(q.id));
    if (poolWrong.length === 0) {
      alert("¡Estás limpio! No tienes preguntas falladas registradas aún. Te iniciaremos un test aleatorio.");
      return selectQuestions('random');
    }
    // Si tienes falladas, hacemos un test con un máximo de 30 de tus falladas mezcladas
    return shuffle(poolWrong).slice(0, 30);
  }

  // --- MODO 2: PREGUNTAS DE EXÁMENES REALES (Busca marcas de examen en el texto) ---
  if (mode === 'exams') {
    let poolExams = QUESTIONS.filter(q => q.text.toLowerCase().includes('examen'));
    return shuffle(poolExams).slice(0, 30); // Test enfocado de 30 preguntas de examen
  }

  // --- MODO 3: ALEATORIO INTELIGENTE (Equilibrado 70/30 con control de temas) ---
  const byTheme = {};
  QUESTIONS.forEach(q => {
    if (!byTheme[q.tema]) byTheme[q.tema] = [];
    byTheme[q.tema].push(q);
  });

  const selected = [];
  const usedIds = new Set();

  // Asegurar 1 por tema
  Object.keys(byTheme).forEach(t => {
    let pool = shuffle(byTheme[t]);
    let unseen = pool.filter(q => !seenSet.has(q.id));
    let seen = pool.filter(q => seenSet.has(q.id));

    let chosen;
    if (unseen.length > 0 && (seen.length === 0 || Math.random() < 0.70)) {
      chosen = unseen[0];
    } else {
      chosen = seen.length > 0 ? seen[0] : pool[0];
    }

    if (chosen) {
      selected.push(chosen);
      usedIds.add(chosen.id);
      seenSet.add(chosen.id);
    }
  });

  // Rellenar hasta 40
  let remainingPool = QUESTIONS.filter(q => !usedIds.has(q.id));
  let remainingUnseen = shuffle(remainingPool.filter(q => !seenSet.has(q.id)));
  let remainingSeen = shuffle(remainingPool.filter(q => seenSet.has(q.id)));

  while (selected.length < NUM_QUESTIONS && remainingPool.length > 0) {
    let chosenQ;
    if (remainingUnseen.length > 0 && (remainingSeen.length === 0 || Math.random() < 0.70)) {
      chosenQ = remainingUnseen.shift();
    } else if (remainingSeen.length > 0) {
      chosenQ = remainingSeen.shift();
    } else {
      break;
    }

    if (chosenQ && !usedIds.has(chosenQ.id)) {
      selected.push(chosenQ);
      usedIds.add(chosenQ.id);
      seenSet.add(chosenQ.id);
    }
    remainingPool = remainingPool.filter(q => q.id !== chosenQ.id);
  }

  // Guardar historial de vistas
  try {
    localStorage.setItem('edafologia_seen_questions', JSON.stringify(Array.from(seenSet).slice(-80)));
  } catch(e) {}

  return shuffle(selected);
}

// ────────────────────────────────────────────────────────────
//  GESTIÓN DEL SIMULACRO
// ────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startTest(mode) {
  state.selectedQuestions = selectQuestions(mode);
  state.currentIndex = 0;
  state.answers = [];
  state.selectedOption = null;
  state.answered = false;

  // Cambiar título superior según el modo activo
  let titleEl = document.getElementById('test-mode-title');
  if(mode === 'random') titleEl.textContent = "EDAFOLOGÍA · ALEATORIO";
  if(mode === 'exams') titleEl.textContent = "EDAFOLOGÍA · EXÁMENES OFICIALES";
  if(mode === 'wrong') titleEl.textContent = "EDAFOLOGÍA · REPASO DE ERRORES";

  document.getElementById('live-correct').textContent = '0';
  document.getElementById('live-wrong').textContent = '0';
  document.getElementById('live-blank').textContent = '0';

  showScreen('screen-test');
  renderQuestion();
}

function renderQuestion() {
  if (state.selectedQuestions.length === 0) {
    showScreen('screen-home');
    return;
  }

  const q = state.selectedQuestions[state.currentIndex];
  const idx = state.currentIndex;

  state.selectedOption = null;
  state.answered = false;

  const total = state.selectedQuestions.length;
  document.getElementById('progress-label').textContent = `Pregunta ${idx + 1} / ${total}`;
  document.getElementById('progress-bar').style.width = `${((idx + 1) / total) * 100}%`;

  document.getElementById('q-theme-tag').textContent = `TEMA ${q.tema} · ${THEME_NAMES[q.tema].toUpperCase()}`;
  document.getElementById('q-number').textContent = String(idx + 1).padStart(2, '0');
  document.getElementById('q-text').textContent = q.text;

  const container = document.getElementById('options-container');
  container.innerHTML = '';

  const letters = ['A', 'B', 'C', 'D', 'E'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.dataset.index = i;
    btn.innerHTML = `<span class="option-letter">${letters[i]}</span><span class="option-text">${opt}</span>`;
    btn.addEventListener('click', () => selectOption(i));
    container.appendChild(btn);
  });

  document.getElementById('btn-next').disabled = true;
  document.getElementById('btn-next').textContent = idx + 1 < total ? 'Siguiente →' : 'Ver resultado →';
  document.getElementById('btn-blank').disabled = false;

  const card = document.getElementById('question-card');
  card.classList.remove('slide-in');
  void card.offsetWidth; 
  card.classList.add('slide-in');
}

function selectOption(optionIndex) {
  if (state.answered) return;
  state.selectedOption = optionIndex;

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === optionIndex);
  });
  document.getElementById('btn-next').disabled = false;
}

// Responder con sistema de registro de fallos y guardado en memoria
function submitAnswer(isBlank) {
  if (state.answered) return;
  state.answered = true;

  const q = state.selectedQuestions[state.currentIndex];
  let result;

  // Cargar lista de fallos actual
  let wrongIds = [];
  try {
    const storedWrong = localStorage.getItem('edafologia_wrong_questions');
    if (storedWrong) wrongIds = JSON.parse(storedWrong);
  } catch(e) {}
  let wrongSet = new Set(wrongIds);

  if (isBlank) {
    result = 'blank';
  } else if (state.selectedOption === q.correct) {
    result = 'correct';
    // Si aciertas una que tenías en la lista de fallos, la eliminamos para "limpiarla"
    wrongSet.delete(q.id);
  } else {
    result = 'wrong';
    // Si fallas, guardamos el ID en la lista de errores del navegador
    wrongSet.add(q.id);
  }

  // Guardar lista de errores actualizada
  try {
    localStorage.setItem('edafologia_wrong_questions', JSON.stringify(Array.from(wrongSet)));
  } catch(e) {}

  state.answers.push(result);

  // Iluminar botones (Verde para la correcta, Rojo para el fallo)
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    if (i === q.correct) {
      btn.classList.add('correct-answer');
    } else if (!isBlank && i === state.selectedOption && result === 'wrong') {
      btn.classList.add('wrong-answer');
    }
    btn.disabled = true;
  });

  document.getElementById('live-correct').textContent = state.answers.filter(a => a === 'correct').length;
  document.getElementById('live-wrong').textContent = state.answers.filter(a => a === 'wrong').length;
  document.getElementById('live-blank').textContent = state.answers.filter(a => a === 'blank').length;

  document.getElementById('btn-blank').disabled = true;
  document.getElementById('btn-next').disabled = false;

  // CONTROL DE TIEMPOS CORREGIDO: ¡Ahora "En blanco" también frena 2 segundos!
  if (result === 'correct') {
    setTimeout(() => { advanceFlow(); }, 500); // 0,5 segundos si aciertas
  } else {
    // Si fallas O dejas en blanco, te deja 2 SEGUNDOS enteros para ver la respuesta correcta
    setTimeout(() => { advanceFlow(); }, 2000); 
  }
}

function advanceFlow() {
  state.currentIndex++;
  if (state.currentIndex >= state.selectedQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ────────────────────────────────────────────────────────────
//  RESULTADOS Y ANÁLISIS
// ────────────────────────────────────────────────────────────
function showResults() {
  const correct = state.answers.filter(a => a === 'correct').length;
  const wrong   = state.answers.filter(a => a === 'wrong').length;
  const blank   = state.answers.filter(a => a === 'blank').length;
  const totalQ  = state.selectedQuestions.length;

  const rawScore = correct - (wrong / 2);
  const grade    = Math.max(0, (rawScore * 10) / totalQ);
  const gradeStr = grade.toFixed(2);

  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-blank').textContent = blank;
  document.getElementById('grade-value').textContent = gradeStr;

  let verdict, verdictClass;
  if (grade >= 9)      { verdict = '🎉 Sobresaliente'; verdictClass = 'outstanding'; }
  else if (grade >= 7) { verdict = '✅ Notable';        verdictClass = 'good'; }
  else if (grade >= 5) { verdict = '👍 Aprobado';       verdictClass = 'pass'; }
  else if (grade >= 4) { verdict = '⚠️ Cerca del aprobado'; verdictClass = 'near'; }
  else                 { verdict = '❌ Suspenso';        verdictClass = 'fail'; }

  const verdictEl = document.getElementById('result-verdict');
  verdictEl.textContent = verdict;
  verdictEl.className = 'result-verdict ' + verdictClass;

  animateRing(grade);
  buildThemeAnalysis();
  showScreen('screen-result');
}

function animateRing(grade) {
  const r = 52;
  const circum = 2 * Math.PI * r;
  const arc = document.getElementById('ring-arc');
  const pct = Math.min(grade / 10, 1);

  arc.style.strokeDasharray = `${circum}`;
  arc.style.strokeDashoffset = `${circum}`;

  let color = '#e74c3c';
  if (grade >= 7) color = '#27ae60';
  else if (grade >= 5) color = '#f39c12';
  arc.style.stroke = color;

  setTimeout(() => {
    arc.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)';
    arc.style.strokeDashoffset = `${circum * (1 - pct)}`;
  }, 150);
}

function buildThemeAnalysis() {
  const themeStats = {};
  Object.keys(THEME_NAMES).forEach(t => {
    themeStats[t] = { correct: 0, total: 0 };
  });

  state.selectedQuestions.forEach((q, i) => {
    const t = q.tema;
    if (themeStats[t]) {
      themeStats[t].total++;
      if (state.answers[i] === 'correct') themeStats[t].correct++;
    }
  });

  const sorted = Object.keys(THEME_NAMES).map(t => {
    const temaNum = Number(t);
    const data = themeStats[temaNum];
    const pct = data.total > 0 ? (data.correct / data.total) * 100 : 100; 
    return { tema: temaNum, name: THEME_NAMES[temaNum], correct: data.correct, total: data.total, pct: pct };
  }).sort((a, b) => a.pct - b.pct);

  const container = document.getElementById('theme-analysis');
  container.innerHTML = '';

  sorted.forEach(item => {
    const row = document.createElement('div');
    row.className = 'theme-row';
    const pct = Math.round(item.pct);
    let barClass = 'bar-danger';
    let icon = '🔴';

    if (item.total === 0) { barClass = 'bar-mid'; icon = '⚪'; }
    else if (pct >= 70) { barClass = 'bar-good'; icon = '🟢'; }
    else if (pct >= 50) { barClass = 'bar-mid'; icon = '🟡'; }

    row.innerHTML = `
      <div class="theme-row-header">
        <span class="theme-icon">${icon}</span>
        <span class="theme-name">T${item.tema} · ${item.name}</span>
        <span class="theme-score">${item.total > 0 ? item.correct+'/'+item.total : '0/0'}</span>
      </div>
      <div class="theme-bar-bg">
        <div class="theme-bar-fill ${barClass}" style="width: 0%" data-width="${pct}%"></div>
      </div>
    `;
    container.appendChild(row);
  });

  setTimeout(() => {
    document.querySelectorAll('.theme-bar-fill').forEach(bar => {
      bar.style.transition = 'width 0.8s ease';
      bar.style.width = bar.dataset.width;
    });
  }, 200);
}

// ────────────────────────────────────────────────────────────
//  EVENT LISTENERS (Llamadas a los 3 modos)
// ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-start-random').addEventListener('click', () => startTest('random'));
  document.getElementById('btn-start-exams').addEventListener('click', () => startTest('exams'));
  document.getElementById('btn-start-wrong').addEventListener('click', () => startTest('wrong'));

  document.getElementById('btn-next').addEventListener('click', () => {
    if (!state.answered && state.selectedOption !== null) {
      submitAnswer(false);
    } else if (state.answered) {
      advanceFlow();
    }
  });

  document.getElementById('btn-blank').addEventListener('click', () => {
    if (state.answered) return;
    submitAnswer(true);
  });

  document.getElementById('btn-home').addEventListener('click', () => {
    showScreen('screen-home');
  });
});
