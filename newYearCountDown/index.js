const counting = document.getElementById("count");

function displayOut() {
  const showCount = setTimeout(function () {
    counting.style.opacity = "1";
    const timer = setInterval(calc, 1000);
    function calc() {
      const now = new Date();
      const birthdayDate = new Date("DECEMBER 31, 2023 24:00:00");
      let daysLeft = Math.floor(
        Math.abs(birthdayDate - now) / (1000 * 60 * 60 * 24)
      );
      let hoursLeft = Math.floor(
        (Math.abs(birthdayDate - now) / (1000 * 60 * 60)) % 24
      );
      let minLeft = Math.floor(
        (Math.abs(birthdayDate - now) / (1000 * 60)) % 60
      );
      let secLeft = Math.floor((Math.abs(birthdayDate - now) / 1000) % 60);
      // console.log(daysLeft, hoursLeft, minLeft, secLeft);

      let hoursRemainining = `${hoursLeft}`.padStart(2, 0);
      let minRemainining = `${minLeft}`.padStart(2, 0);
      let secRemainining = `${secLeft}`.padStart(2, 0);

      counting.textContent = `${daysLeft}Days : ${hoursRemainining}hrs : ${minRemainining}mins : ${secRemainining}sec`;
      if (daysLeft == 0 && minLeft == 0 && hoursLeft == 0 && secLeft == 0) {
        clearInterval(timer);
        counting.textContent = "HAPPY NEW YEAR";
      }
    }
    calc();

    return timer;
  }, 500);
  return showCount;
}
displayOut();
