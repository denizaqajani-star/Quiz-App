const app = document.querySelector('#app');
const subject = document.querySelector('#subject');
const theme = document.querySelector('#theme');
const sound = document.querySelector('#sound');
let category, index = 0, score = 0, selected = -1;
let submitted = false, soundOn = true, audio;
function beep(type = 'pick') {
  if (!soundOn) return;
  try {
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    audio ||= new Audio();
    audio.resume().catch(() => {});
    const notes = {pick: [440], correct: [523, 659],
      wrong: [330, 247]}[type];
    notes.forEach((frequency, i) => {
      const osc = audio.createOscillator();
      const gain = audio.createGain();
      const now = audio.currentTime + i * 0.13;
      osc.frequency.value = frequency;
      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);
      osc.connect(gain).connect(audio.destination);
      osc.start(now);
      osc.stop(now + 0.17);
    });
  } catch (_) { /* Quiz remains usable without audio. */ }
}
try {
  const saved = localStorage.getItem('quiz-theme');
  if (saved === 'light' || saved === 'dark') {
    document.documentElement.dataset.theme = saved;
    theme.setAttribute('aria-checked', String(saved === 'dark'));
  }
} catch (_) { /* Storage may be unavailable. */ }
theme.onclick = () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  theme.setAttribute('aria-checked', String(dark));
  try { localStorage.setItem('quiz-theme', dark ? 'dark' : 'light'); }
  catch (_) { /* Theme still works without storage. */ }
  beep();
};
sound.onclick = () => {
  soundOn = !soundOn;
  sound.textContent = soundOn ? 'Sound on' : 'Sound off';
  sound.setAttribute('aria-pressed', String(soundOn));
  beep();
};
function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}
function icon(item) {
  const node = element('span', 'symbol');
  node.style.background = item.bg;
  node.style.color = item.color;
  node.setAttribute('aria-hidden', 'true');
  node.innerHTML = '<svg viewBox="0 0 32 32" fill="none" ' +
    'stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round">' +
    item.icon + '</svg>';
  return node;
}
function subjectLabel(item) {
  const node = element('div', 'subject');
  node.append(icon(item), element('span', '', item.title));
  return node;
}
function heading(first, second) {
  const h = element('h1', '', first);
  h.append(element('strong', '', second));
  return h;
}
function focusHeading() {
  const h = app.querySelector('h1, h2');
  h.tabIndex = -1;
  h.focus({preventScroll: true});
}
function menu(focus = false) {
  subject.replaceChildren();
  const left = element('section');
  left.append(heading('Welcome to the', 'Frontend Quiz!'),
    element('p', 'hint', 'Pick a subject to get started.'));
  const right = element('section', 'stack');
  quizzes.forEach(item => {
    const button = element('button', 'choice');
    button.append(icon(item), element('span', '', item.title));
    button.onclick = () => {
      beep();
      category = item;
      index = score = 0;
      selected = -1;
      submitted = false;
      subject.replaceChildren(subjectLabel(item));
      renderQuestion();
      focusHeading();
    };
    right.append(button);
  });
  app.replaceChildren(left, right);
  if (focus) focusHeading();
}
function renderQuestion() {
  const q = category.questions[index];
  const total = category.questions.length;
  const left = element('section', 'question-side');
  const progress = element('div', 'progress');
  progress.setAttribute('role', 'progressbar');
  progress.setAttribute('aria-label', 'Quiz progress');
  progress.setAttribute('aria-valuemin', '0');
  progress.setAttribute('aria-valuemax', String(total));
  progress.setAttribute('aria-valuenow', String(index));
  const bar = element('span');
bar.style.width = `${index / total * 100}%`;
  progress.append(bar);
  left.append(element('p', 'hint', `Question ${index + 1} of ${total}`),
    element('h2', 'question', q[0]), progress);
  const right = element('section', 'stack');
  const options = q.slice(1, 5);
  const answer = q[5];
  const buttons = options.map((option, i) => {
    const button = element('button', 'choice');
    button.setAttribute('aria-pressed', String(selected === i));
    button.append(element('span', 'letter', 'ABCD'[i]),
      element('span', '', option));
    button.onclick = () => {
      if (submitted) return;
      beep();
      selected = i;
      buttons.forEach((b, j) => {
        b.classList.toggle('selected', j === i);
        b.setAttribute('aria-pressed', String(j === i));
      });
      feedback.textContent = '';
    };
    right.append(button);
    return button;
  });
  const submit = element('button', 'primary', 'Submit Answer');
  const feedback = element('p', 'feedback');
  feedback.setAttribute('role', 'status');
  submit.onclick = () => {
    if (submitted) {
      index++;
      if (index === total) return showScore();
      selected = -1;
      submitted = false;
      renderQuestion();
      focusHeading();
      return;
    }
    if (selected === -1) {
      feedback.textContent = 'Please select an answer';
      return;
    }
    submitted = true;
    bar.style.width = `${(index + 1) / total * 100}%`;
    progress.setAttribute('aria-valuenow', String(index + 1));
    const correct = selected === answer;
    if (correct) score++;
    beep(correct ? 'correct' : 'wrong');
    buttons.forEach((b, i) => {
      b.disabled = true;
      b.classList.remove('selected');
      if (i === answer) {
        b.classList.add('correct');
        b.append(element('span', 'mark good', '\u2713'));
      } else if (i === selected) {
        b.classList.add('wrong');
        b.append(element('span', 'mark bad', '\u2717'));
      }
    });
    feedback.textContent = correct ? 'Correct!' :
      `Incorrect. Correct answer: ${options[answer]}`;
    submit.textContent = index === total - 1 ? 'See Results' : 'Next Question';
 };
  right.append(submit, feedback);
  app.replaceChildren(left, right);
      }
function showScore() {
  const left = element('section');
  left.append(heading('Quiz completed', 'You scored...'));
  const right = element('section', 'stack');
  const card = element('div', 'score-card');
  const scoreText = element('p', 'score', score);
  scoreText.setAttribute('aria-label', `Score: ${score}`);
  card.append(subjectLabel(category), scoreText,
    element('p', 'total', `out of ${category.questions.length}`));
  const again = element('button', 'primary', 'Play Again');
  again.onclick = () => { beep(); menu(true); };
  right.append(card, again);
  app.replaceChildren(left, right);
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches && score) {
    scoreText.textContent = '0';
    const start = performance.now();
    function countUp(now) {
      const fraction = Math.min((now - start) / 650, 1);
      scoreText.textContent = Math.floor(fraction * score);
      if (fraction < 1 && scoreText.isConnected) {
        requestAnimationFrame(countUp);
      }
    }
    requestAnimationFrame(countUp);
  }
  focusHeading();
}
menu();