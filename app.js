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
 * Selecciona 40 preguntas intentando cubrir todos los temas.
 * - Garantiza mínimo 1 pregunta por tema si hay suficientes.
 * - El resto se rellena aleatoriamente del banco.
 */
function selectQuestions() {
  // Agrupar por tema
  const byTheme = {};
  QUESTIONS.forEach(q => {
    if (!byTheme[q.tema]) byTheme[q.tema] = [];
    byTheme[q.tema].push(q);
  });

  const themes = Object.keys(byTheme).map(Number);
  const selected = [];
  const usedIds = new Set();

  // 1. Una pregunta aleatoria de cada tema
  themes.forEach(t => {
    const pool = shuffle(byTheme[t]);
    if (pool.length > 0) {
      selected.push(pool[0]);
      usedIds.add(pool[0].id);
    }
  });

  // 2. Rellenar hasta 40 con preguntas no usadas (aleatorio por tema)
  const remaining = shuffle(
    QUESTIONS.filter(q => !usedIds.has(q.id))
  );

  for (const q of remaining) {
    if (selected.length >= NUM_QUESTIONS) break;
    selected.push(q);
  }

  return shuffle(selected.slice(0, NUM_QUESTIONS));
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

  // Reset scoreboard
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

  // Botones de acción
  document.getElementById('btn-next').disabled = true;
  document.getElementById('btn-next').textContent =
    idx + 1 < total ? 'Siguiente →' : 'Ver resultado →';

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

  // Visual: marcar seleccionada
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

  // Mostrar feedback visual
  document.querySelectorAll('.option-btn').forEach((btn, i) => {
    if (i === q.correct) {
      btn.classList.add('correct-answer');
    } else if (!isBlank && i === state.selectedOption && result === 'wrong') {
      btn.classList.add('wrong-answer');
    }
    btn.disabled = true;
  });

  // Actualizar marcador en vivo
  const correct = state.answers.filter(a => a === 'correct').length;
  const wrong   = state.answers.filter(a => a === 'wrong').length;
  const blank   = state.answers.filter(a => a === 'blank').length;

  document.getElementById('live-correct').textContent = correct;
  document.getElementById('live-wrong').textContent = wrong;
  document.getElementById('live-blank').textContent = blank;

  // Habilitar siguiente
  document.getElementById('btn-next').disabled = false;
  document.getElementById('btn-blank').disabled = true;
}

// ────────────────────────────────────────────────────────────
//  AVANZAR A LA SIGUIENTE PREGUNTA
// ────────────────────────────────────────────────────────────
function nextQuestion() {
  // Si no ha respondido aún (solo eligió opción), procesar respuesta
  if (!state.answered && state.selectedOption !== null) {
    submitAnswer(false);
    return; // El setTimeout deja ver el feedback brevemente
  }

  if (!state.answered) return; // nada elegido, no avanzar

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

  // Fórmula: (aciertos - errores/2) * 10 / 40
  const rawScore = correct - (wrong / 2);
  const grade    = Math.max(0, (rawScore * 10) / NUM_QUESTIONS);
  const gradeStr = grade.toFixed(2);

  // Rellenar cifras
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-wrong').textContent = wrong;
  document.getElementById('res-blank').textContent = blank;
  document.getElementById('grade-value').textContent = gradeStr;

  // Veredicto
  let verdict, verdictClass;
  if (grade >= 9)      { verdict = '🎉 Sobresaliente'; verdictClass = 'outstanding'; }
  else if (grade >= 7) { verdict = '✅ Notable';        verdictClass = 'good'; }
  else if (grade >= 5) { verdict = '👍 Aprobado';       verdictClass = 'pass'; }
  else if (grade >= 4) { verdict = '⚠️ Cerca del aprobado'; verdictClass = 'near'; }
  else                 { verdict = '❌ Suspenso';        verdictClass = 'fail'; }

  const verdictEl = document.getElementById('result-verdict');
  verdictEl.textContent = verdict;
  verdictEl.className = 'result-verdict ' + verdictClass;

  // Anillo SVG
  animateRing(grade);

  // Análisis por temas
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

  // Color según nota
  let color = '#e74c3c';
  if (grade >= 7) color = '#27ae60';
  else if (grade >= 5) color = '#f39c12';
  arc.style.stroke = color;

  // Animar
  setTimeout(() => {
    arc.style.transition = 'stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)';
    arc.style.strokeDashoffset = `${circum * (1 - pct)}`;
  }, 150);
}

// ────────────────────────────────────────────────────────────
//  ANÁLISIS POR TEMAS
// ────────────────────────────────────────────────────────────
function buildThemeAnalysis() {
  // Mapear respuestas a sus preguntas y temas
  const themeData = {}; // { temaNum: { correct, total } }

  state.selectedQuestions.forEach((q, i) => {
    const t = q.tema;
    if (!themeData[t]) themeData[t] = { correct: 0, wrong: 0, total: 0 };
    themeData[t].total++;
    if (state.answers[i] === 'correct') themeData[t].correct++;
    if (state.answers[i] === 'wrong')   themeData[t].wrong++;
  });

  // Ordenar de peor a mejor (por tasa de error)
  const sorted = Object.entries(themeData)
    .map(([tema, data]) => ({
      tema: Number(tema),
      name: THEME_NAMES[Number(tema)],
      ...data,
      pct: data.total > 0 ? (data.correct / data.total) * 100 : 100
    }))
    .sort((a, b) => a.pct - b.pct);

  const container = document.getElementById('theme-analysis');
  container.innerHTML = '';

  sorted.forEach(item => {
    const row = document.createElement('div');
    row.className = 'theme-row';

    const pct = Math.round(item.pct);
    let barClass = 'bar-danger';
    if (pct >= 70) barClass = 'bar-good';
    else if (pct >= 50) barClass = 'bar-mid';

    // Emoji indicador
    let icon = '🔴';
    if (pct >= 70) icon = '🟢';
    else if (pct >= 50) icon = '🟡';

    row.innerHTML = `
      <div class="theme-row-header">
        <span class="theme-icon">${icon}</span>
        <span class="theme-name">T${item.tema} · ${item.name}</span>
        <span class="theme-score">${item.correct}/${item.total}</span>
      </div>
      <div class="theme-bar-bg">
        <div class="theme-bar-fill ${barClass}" style="width: 0%" data-width="${pct}%"></div>
      </div>
    `;
    container.appendChild(row);
  });

  // Animar barras
  setTimeout(() => {
    document.querySelectorAll('.theme-bar-fill').forEach(bar => {
      bar.style.transition = 'width 0.8s ease';
      bar.style.width = bar.dataset.width;
    });
  }, 200);
}

// ────────────────────────────────────────────────────────────
//  EVENT LISTENERS
// ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  // Iniciar simulacro
  document.getElementById('btn-start').addEventListener('click', startTest);

  // Botón siguiente / confirmar
  document.getElementById('btn-next').addEventListener('click', () => {
    if (!state.answered && state.selectedOption !== null) {
      // Mostrar feedback primero
      submitAnswer(false);
      setTimeout(() => {
        state.currentIndex++;
        if (state.currentIndex >= state.selectedQuestions.length) {
          showResults();
        } else {
          renderQuestion();
        }
      }, 800);
    } else if (state.answered) {
      state.currentIndex++;
      if (state.currentIndex >= state.selectedQuestions.length) {
        showResults();
      } else {
        renderQuestion();
      }
    }
  });

  // En blanco
  document.getElementById('btn-blank').addEventListener('click', () => {
    if (state.answered) return;
    submitAnswer(true);
    setTimeout(() => {
      state.currentIndex++;
      if (state.currentIndex >= state.selectedQuestions.length) {
        showResults();
      } else {
        renderQuestion();
      }
    }, 600);
  });

  // Nuevo simulacro
  document.getElementById('btn-retry').addEventListener('click', startTest);

  // Volver al inicio
  document.getElementById('btn-home').addEventListener('click', () => {
    showScreen('screen-home');
  });
});
