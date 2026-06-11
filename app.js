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
