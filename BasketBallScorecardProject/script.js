const hscore = document.querySelector(".h-score");
const gscore = document.querySelector(".g-score");
const hbtn1 = document.querySelector(".hbtn1");
const hbtn2 = document.querySelector(".hbtn2");
const hbtn3 = document.querySelector(".hbtn3");
const gbtn1 = document.querySelector(".gbtn1");
const gbtn2 = document.querySelector(".gbtn2");
const gbtn3 = document.querySelector(".gbtn3");
const newBtn = document.querySelector(".new-btn");
const endBtn = document.querySelector(".end-btn");
const homeBG = document.querySelector(".home-bg");
const guestBG = document.querySelector(".guest-bg");
const message = document.querySelector(".mess");
const h_btn = document.querySelectorAll(".h-btn");
const g_btn = document.querySelectorAll(".g-btn");
let isalive = true;
let homeScore = 0;
let guestScore = 0;

hbtn1.addEventListener("click", function () {
  if (isalive) {
    homeScore += 1;
    hscore.textContent = homeScore;
  }
});
hbtn2.addEventListener("click", function () {
  if (isalive) {
    homeScore += 2;
    hscore.textContent = homeScore;
  }
});
hbtn3.addEventListener("click", function () {
  if (isalive) {
    homeScore += 3;
    hscore.textContent = homeScore;
  }
});

gbtn1.addEventListener("click", function () {
  if (isalive) {
    guestScore += 1;
    gscore.textContent = guestScore;
  }
});
gbtn2.addEventListener("click", function () {
  if (isalive) {
    guestScore += 2;
    gscore.textContent = guestScore;
  }
});
gbtn3.addEventListener("click", function () {
  if (isalive) {
    guestScore += 3;
    gscore.textContent = guestScore;
  }
});

endBtn.addEventListener("click", function () {
  if (homeScore > guestScore) {
    guestBG.classList.remove("winner");
    homeBG.classList.add("winner");
    g_btn.forEach((y) => {
      y.style.backgroundColor = "#1b244a";
    });
    h_btn.forEach((x) => {
      x.style.backgroundColor = "green";
    });

    message.textContent = "HOME TEAM WINS";
    isalive = false;
  } else if (homeScore === guestScore) {
    guestBG.classList.add("draw");
    g_btn.forEach((y) => {
      y.style.backgroundColor = "blueviolet";
    });
    homeBG.classList.add("draw");
    h_btn.forEach((y) => {
      y.style.backgroundColor = "blueviolet";
    });
    message.textContent = "MATCH DRAW";
    isalive = false;
  } else {
    homeBG.classList.remove("winner");
    guestBG.classList.add("winner");
    h_btn.forEach((y) => {
      y.style.backgroundColor = "#1b244a";
    });
    g_btn.forEach((x) => {
      x.style.backgroundColor = "green";
    });
    message.textContent = "GUEST TEAM WINS";
    isalive = false;
  }
});
newBtn.addEventListener("click", function () {
  if (!isalive) {
    message.textContent = "";
    homeScore = 0;
    guestScore = 0;
    homeBG.classList.remove("winner");
    guestBG.classList.remove("winner");
    h_btn.forEach((y) => {
      y.style.backgroundColor = "#1b244a";
    });
    g_btn.forEach((x) => {
      x.style.backgroundColor = "#1b244a";
    });
    guestBG.classList.remove("draw");
    homeBG.classList.remove("draw");
    hscore.textContent = homeScore;
    gscore.textContent = guestScore;
  }
  isalive = true;
});
