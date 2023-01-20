let secretNumber = Math.trunc(Math.random() * 10) + 1;
const hiddenNumber = document.querySelector('.number');

const msg = document.querySelector('.message');
let score = 20;

const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const scoreDisplay = document.querySelector('.score');
const high = document.querySelector('.highscore');
let guessNumber = document.querySelector('.guess');

checkBtn.addEventListener('click', function () {
  const guessNum = Number(guessNumber.value);

  if (!guessNum) msg.textContent = 'No Number';
  else if (guessNum === secretNumber) {
    msg.textContent = 'CORRECT ANSWER ✅ ';
    document.querySelector('body').style.backgroundColor = ' rgb(181, 86, 86)';
    document.querySelector('.number').style.width = '40rem';
    hiddenNumber.textContent = secretNumber;
    if (score > Number(high.textContent)) high.textContent = score;
  } else if (guessNum != secretNumber) {
    if (score > 1) {
      score--;
      scoreDisplay.textContent = score;
      msg.textContent = guessNum > secretNumber ? 'TOO HIGH >' : 'TOO LOW <';
    } else {
      msg.textContent = 'you lost the game';
      scoreDisplay.textContent = 0;
      document.querySelector('body').style.backgroundColor = 'black';
    }
  }
  if (!(guessNum === secretNumber)) guessNumber.value = '';
});

againBtn.addEventListener('click', function () {
  score = 20;
  scoreDisplay.textContent = score;
  document.querySelector('body').style.backgroundColor = ' rgb(80, 89, 177)';
  document.querySelector('.number').style.width = '15rem';
  msg.textContent = 'Start guessing...';

  guessNumber.value = '';
  hiddenNumber.textContent = '?';
  secretNumber = Math.trunc(Math.random() * 10) + 1;
});
