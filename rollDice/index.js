const rollbtn = document.querySelector(".btn");
const resetbtn = document.querySelector(".reset");

const currentFirst = document.querySelector(".current--0");
const currentSecond = document.querySelector(".current--1");
const score0 = document.querySelector(".score--0");
const score1 = document.querySelector(".score--1");
const player0 = document.querySelector(".block-1");
const player1 = document.querySelector(".block-2");

let currentscore = 0;
let scores = [0, 0];
let activePlayer = 0;
let gameOn = true;

rollbtn.addEventListener("click", function () {
  if (gameOn) {
    if (activePlayer == 0)
      document.querySelector(`.player-active`).textContent = `PLAYER ${
        activePlayer + 2
      } TURN`;
    else
      document.querySelector(
        `.player-active`
      ).textContent = `PLAYER ${activePlayer} TURN`;

    const randomNumber = Math.trunc(Math.random() * 9 + 1) + 1;
    currentscore += randomNumber;
    document.querySelector(`.current--${activePlayer}`).textContent =
      currentscore;
    scores[activePlayer] += currentscore;
    document.querySelector(`.score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 25) {
      gameOn = false;
      document.querySelector(`.player-active`).textContent = `PLAYER ${
        activePlayer + 1
      } WON 🎉🎉`;
      rollbtn.classList.add("hidden");
      resetbtn.classList.remove("hidden");
    }

    switchPlayer();
  }
});

const switchPlayer = function () {
  //   document.querySelector(`.current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

resetbtn.addEventListener("click", function () {
  document.querySelector(`.player-active`).textContent = `PLAYER 1 TURN`;

  currentscore = 0;
  player1.classList.remove("active");
  player0.classList.add("active");
  score0.textContent = 0;
  score1.textContent = 0;
  currentFirst.textContent = 0;
  currentSecond.textContent = 0;
  activePlayer = 0;
  scores[0] = 0;
  scores[1] = 0;
  gameOn = true;
  rollbtn.classList.remove("hidden");
  resetbtn.classList.add("hidden");
});
