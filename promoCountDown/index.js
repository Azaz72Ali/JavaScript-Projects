const stop = document.querySelector(".btn-stop");
const resum = document.querySelector(".btn-resume");
const start = document.querySelector(".btn-start");
const para = document.querySelector(".initial");
let remainingTime;
const timer = function (time) {
  // let time = 10;
  const timing = function () {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);
    para.textContent = `${min}:${sec}`;
    if (time == 0) {
      clearInterval(setTimer);
      para.textContent = "Promo Ended";
    }
    time--;
    remainingTime = time;
  };

  timing();
  const setTimer = setInterval(timing, 1000);
  return setTimer;
};
let runTimer;
let resume = true;
start.addEventListener("click", function () {
  resume = true;
  if (runTimer) clearInterval(runTimer);

  runTimer = timer(120);
});

stop.addEventListener("click", function () {
  resume = false;
  clearInterval(runTimer);
});

resum.addEventListener("click", function () {
  if (!resume) {
    runTimer = timer(remainingTime);
  }
});
