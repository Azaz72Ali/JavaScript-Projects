import dogs from "./data.js";
import dogCharacter from "./Character.js";

const logo = document.querySelector(".logo-btn");
const cross = document.querySelector(".cross");
const heart = document.querySelector(".heart");
const main = document.querySelector(".main");
let click = true;
let wait = true;

function getNewDog() {
  const nextDog = dogs.shift();
  return nextDog ? new dogCharacter(nextDog) : final();
}
let dog = getNewDog();
function render() {
  main.innerHTML = dog.getDogcharacter();
}
render();

heart.addEventListener("click", function () {
  if (click && wait) {
    main.insertAdjacentHTML("afterbegin", displayLike());
    wait = false;
    setTimeout(() => {
      dog = getNewDog();
      render();
      wait = true;
    }, 1000);
  }
});

cross.addEventListener("click", function () {
  if (click && wait) {
    main.insertAdjacentHTML("afterbegin", displayNope());
    wait = false;
    setTimeout(() => {
      dog = getNewDog();
      render();
      wait = true;
    }, 1000);
  }
});

logo.addEventListener("click", function () {
  window.location.reload();
});

function displayLike() {
  return `<div class="choice like-hidden">
  <img class="like" src="images/badge-like.png" alt="like" />
</div>`;
}

function displayNope() {
  return `<div class="choice nope-hidden">
  <img class="Nope" src="images/badge-nope.png" alt="nope" />
</div>`;
}

function final() {
  main.innerHTML = `<div class="finalmess"><p>No more dogs left, press logo button to start again</p></div>`;
  click = false;
}
