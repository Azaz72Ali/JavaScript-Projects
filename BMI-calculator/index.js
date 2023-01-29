const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const btn = document.querySelector(".calculate");
const calc = document.querySelector(".calculated-result");

btn.addEventListener("click", function () {
  const heightValue = Number(height.value);
  const weightValue = Number(weight.value);
  let resultCalc = parseFloat(
    (weightValue * 10000) / (heightValue * heightValue)
  ).toFixed(3);
  calc.textContent = resultCalc;
  // console.log(heightValue, weightValue, typeof resultCalc);
  if (Number(resultCalc) <= 18.5)
    document.querySelector(".show-result").textContent = "You are Underweight";
  else if (Number(resultCalc) >= 18.5 && Number(resultCalc) <= 24.9)
    document.querySelector(".show-result").textContent =
      "Your weight is normal";
  else if (Number(resultCalc) >= 25 && Number(resultCalc) <= 29.9)
    document.querySelector(".show-result").textContent = "You are overweight";
  else document.querySelector(".show-result").textContent = "You are obese";
});
