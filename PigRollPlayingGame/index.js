'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const rollBtn = document.querySelector('.btn--roll');
const currentFirst = document.getElementById('current--0');
const currentSecond = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let currentScore = 0;
let playGame = true;
const dice = document.querySelector('.dice');
const scores = [0, 0];
let activePlayer = 0;

rollBtn.addEventListener('click', function () {
  if (playGame) {
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;
    if (diceNum != 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playGame) {
    // let holdScore = Number(
    //   document.getElementById(`score--${activePlayer}`).textContent
    // );
    // holdScore += currentScore;
    // document.getElementById(`score--${activePlayer}`).textContent = holdScore;
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // currentScore = 0;

    // player0.classList.toggle('player--active');
    // player1.classList.toggle('player--active');

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      dice.classList.add('hidden');
      playGame = false;
    } else switchPlayer();
  }
});

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

newBtn.addEventListener('click', function () {
  if (!playGame) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
    score0.textContent = 0;
    score1.textContent = 0;
    currentFirst.textContent = 0;
    currentSecond.textContent = 0;

    activePlayer = 0;
    scores[0] = 0;
    scores[1] = 0;
  }
  playGame = true;
});
