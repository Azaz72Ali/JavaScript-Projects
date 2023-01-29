const date = document.querySelector(".date");
const time = document.querySelector(".time");

let now = new Date();
const displayDate = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let year = now.getFullYear();
  let month = months[now.getMonth()];
  const exactDate = now.getDate();
  let day = days[now.getDay()];
  date.textContent = `${day}, ${month} ${exactDate}, ${year}`;
};
displayDate();

const timer = function () {
  const timing = function () {
    now = new Date();
    let hours = `${now.getHours()}`.padStart(2, 0);
    let min = `${now.getMinutes()}`.padStart(2, 0);
    let sec = `${now.getSeconds()}`.padStart(2, 0);

    if (now.getHours() > 12) time.textContent = `${hours}:${min}:${sec} PM`;
    else time.textContent = `${hours}:${min}:${sec} AM`;
  };
  timing();
  const setTimer = setInterval(timing, 1000);
  return setTimer;
};

timer();
