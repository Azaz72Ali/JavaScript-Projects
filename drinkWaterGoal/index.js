const setGoal = document.querySelector(".setGoal");
const fill = document.querySelector(".fill-up");
const submit = document.querySelector(".set");
const waterLeft = document.getElementById("litre-left");
const glasses = document.querySelectorAll(".glass");
let gameOver = true;
let showWaterLeft;
submit.addEventListener("click", function (e) {
  e.preventDefault();
  showWaterLeft = setGoal.value;
  if (showWaterLeft <= 4) waterLeft.textContent = `${showWaterLeft}L`;
  console.log(showWaterLeft);
});

let addCups = 0;
let remainingWater;
glasses.forEach((glass) => {
  glass.addEventListener("click", function (e) {
    if (gameOver) {
      glass.style.backgroundColor = "#74ccf4";
      let fixed = Number(setGoal.value) * 1000;
      if (Number(showWaterLeft) > 0) {
        remainingWater = Number(showWaterLeft) - 0.25;
        console.log(remainingWater);
        waterLeft.textContent = `${remainingWater}L`;
        addCups += 250;
        let percentage = parseFloat((addCups / fixed) * 100).toFixed(1);
        console.log(percentage);
        document.getElementById(
          "percent"
        ).textContent = `${percentage}% completed`;
        fill.style.height = `${percentage}%`;
      }
      showWaterLeft = remainingWater;
      if (Number(showWaterLeft) == 0) {
        waterLeft.textContent = `goal completed`;
        document.getElementById("remain").textContent = "";
        gameOver = false;
      }
    }
  });
});
