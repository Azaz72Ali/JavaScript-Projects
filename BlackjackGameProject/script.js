let messageel = document.getElementById("decision");

let sum;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sumel = document.getElementById("sum-el");
let cardel = document.getElementById("card-el");
let cards = [];
let playerEl = document.getElementById("player-el");
const playerDetails = {
  name: "Ali_Dev",
  chips: "$150",
};
playerEl.textContent = `${playerDetails.name}: ${playerDetails.chips}`;

// console.log(firstCard, secondCard);

function getRandom() {
  let numberRandoom = Math.trunc(Math.random() * 13) + 1; //number between 1-13
  if (numberRandoom > 10) return10;
  else if (numberRandoom === 1) {
    return 11;
  } else return numberRandoom;
}
function start() {
  isAlive = true; //game started
  let firstCard = getRandom();
  let secondCard = getRandom();
  cards = [firstCard, secondCard];
  render();
}

function render() {
  sum = 0;
  cardel.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardel.textContent += `${cards[i]} `;
    sum += cards[i];
  }
  sumel.textContent = `Sum: ${sum}`;
  if (sum <= 20) message = "Do you want to draw a new card? 🙂";
  else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  messageel.textContent = message;
}

function newGame() {
  if (isAlive && !hasBlackJack) {
    let thirdCard = getRandom();
    console.log(thirdCard);
    cards.push(thirdCard);
    // sum += thirdCard;
    render();
  }
}
