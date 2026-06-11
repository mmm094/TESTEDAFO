// ============================================================
//  app.js – lógica principal del simulacro de Edafología
// ============================================================

const NUM_QUESTIONS = 40;

// Estado del simulacro
let state = {
  selectedQuestions: [],
  currentIndex: 0,
  answers: [],       // 'correct' | 'wrong' | 'blank'
  selectedOption: null,
  answered: false,
};

// ────────────────────────────────────────────────────────────
//  UTILIDADES
// ────────────────────────────────────────────────────────────

/** Fisher-Yates shuffle */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Selecciona 40 preguntas del banco de forma 100% aleatoria.
 * Rompe el bucle de repeticiones combinando todo el pool disponible.
 */
function selectQuestions() {
  // 1. Mezclamos TODO el banco de preguntas completo (las 151 que tienes)
  const allShuffled = shuffle(QUESTIONS);
  
  // 2. Cortamos directamente las primeras 40 de esa gran mezcla aleatoria
  return allShuffled.slice(0, NUM_QUESTIONS);
}

// ────────────────────────────────────────────────────────────
//  NAVEGACIÓN ENTRE PANTALLAS
// ────────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ────────────────────────────────────────────────────────────
//  INICIO DEL SIMULACRO
// ────────────────────────────────────────────────────────────
function startTest() {
  state.selectedQuestions = selectQuestions();
  state.currentIndex = 0;
  state.answers = [];
  state.selectedOption = null;
  state.answered = false;

  document.getElementById('live-correct').textContent = '0';
  document.getElementById('live-wrong').textContent = '0';
  document.getElementById('live-blank').textContent = '0';

  showScreen('screen-test');
  renderQuestion();
}

// ────────────────────────────────────────────────────────────
//  RENDERIZAR PREGUNTA
// ────────────────────────────────────────────────────────────
function renderQuestion() {
  const q = state.selectedQuestions[state.currentIndex];
  const idx = state.currentIndex;

  state.selectedOption = null;
  state.answered = false;

  // Cabecera
  const total = state.selectedQuestions.length;
  document.getElementById('progress-label').textContent = `Pregunta ${idx + 1} / ${total}`;
  document.getElementById('progress-bar').style.width = `${((idx + 1) / total) * 100}%`;

  // Tema
  document.getElementById('q-theme-tag').textContent = `TEMA ${q.tema} · ${THEME_NAMES[q.tema].toUpperCase()}`;

  // Número
  const num = String(idx + 1).padStart(2, '0');
  document.getElementById('q-number').textContent = num;

  // Texto
  document.getElementById('q-text').textContent = q.text;

  // Opciones
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

  // Reset de botones de acción
  document.getElementById('btn-next').disabled = true;
  document.getElementById('btn-next').textContent = idx + 1 < total ? 'Siguiente →' : 'Ver resultado →';
  document.getElementById('btn-blank').disabled = false; // Siempre disponible al entrar a una pregunta nueva

  // Animación entrada
  const card = document.getElementById('question-card');
  card.classList.remove('slide-in');
  void card.offsetWidth; // reflow
  card.classList.add('slide-in');
}

// ────────────────────────────────────────────────────────────
//  SELECCIONAR OPCIÓN
// ────────────────────────────────────────────────────────────
function selectOption(optionIndex) {
  if (state.answered) return;
  state.selectedOption = optionIndex;

  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    btn.classList.toggle('selected', i === optionIndex);
  });

  document.getElementById('btn-next').disabled = false;
}

// ────────────────────────────────────────────────────────────
//  RESPONDER (tras pulsar Siguiente o En blanco)
// ────────────────────────────────────────────────────────────
function submitAnswer(isBlank) {
  if (state.answered) return;
  state.answered = true;

  const q = state.selectedQuestions[state.currentIndex];
  let result;

  if (isBlank) {
    result = 'blank';
  } else if (state.selectedOption === q.correct) {
    result = 'correct';
  } else {
    result = 'wrong';
  }

  state.answers.push(result);

  // Mostrar feedback visual en pantalla (colores)
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    if (i === q.correct) {
      btn.classList.add('correct-answer'); // Ilumina la correcta en verde
    } else if (!isBlank && i === state.selectedOption && result === 'wrong') {
      btn.classList.add('wrong-answer');   // Ilumina tu fallo en rojo
    }
    btn.disabled = true; // Bloquea las opciones para que no se pueda volver a pulsar
  });

  // Actualizar marcador en vivo de la barra inferior
  const correct = state.answers.filter(a => a === 'correct').length;
  const wrong   = state.answers.filter(a => a === 'wrong').length;
  const blank   = state.answers.filter(a => a === 'blank').length;

  document.getElementById('live-correct').textContent = correct;
  document.getElementById('live-wrong').textContent = wrong;
  document.getElementById('live-blank').textContent = blank;

  document.getElementById('btn-blank').disabled = true;
  document.getElementById('btn-next').disabled = false;

  // CONTROL DE TIEMPOS INTELIGENTE SEGÚN TU RESPUESTA
  if (isBlank) {
    // Si la dejas en blanco, pasa rápido (0,4 segundos)
    setTimeout(() => { advanceFlow(); }, 400);
  } else if (result === 'correct') {
    // Si aciertas, pasa rápido porque ya te la sabes (0,5 segundos)
    setTimeout(() => { advanceFlow(); }, 500);
  } else if (result === 'wrong') {
    // Si fallas, TE DEJA 2 SEGUNDOS para que veas cuál era la correcta en verde
    setTimeout(() => { advanceFlow(); }, 2000);
  }
}

// Lógica unificada para avanzar de pregunta o ir a resultados
function advanceFlow() {
  state.currentIndex++;
  if (state.currentIndex >= state.selectedQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ────────────────────────────────────────────────────────────
//  CALCULAR Y MOSTRAR RESULTADOS
// ────────────────────────────────────────────────────────────
function showResults() {
  const correct = state.answers.filter(a => a === 'correct').length;
  const wrong   = state.answers.filter(a => a === 'wrong').length;
  const blank   = state.answers.filter(a => a === 'blank').length;

  const rawScore = correct - (wrong / 2);
  const grade    = Math.max(0, (rawScore * 10) / NUM_QUESTIONS);
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

// ────────────────────────────────────────────────────────────
//  ANILLO SVG NOTA
// ────────────────────────────────────────────────────────────
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

// ────────────────────────────────────────────────────────────
//  ANÁLISIS POR TEMAS
// ────────────────────────────────────────────────────────────
function buildThemeAnalysis() {
  const themeData = {};

  state.selectedQuestions.forEach((q, i) => {
    const t = q.tema;
    if (!themeData[t]) themeData[t] = { correct: 0, wrong: 0, total: 0 };
    theme
