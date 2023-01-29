const billAmt = document.getElementById("billAmt");
const rate = document.getElementById("rate-select");
const calculate = document.getElementById("calculate");
const finalAmt = document.getElementById("totalAmt");
const tipAmt = document.getElementById("tip");
let tip = 0;
let totalAmt = 0;
calculate.addEventListener("click", function (e) {
  e.preventDefault();
  value(rate.value, billAmt.value);

  tipAmt.textContent = `${tip}$`;
  finalAmt.textContent = `${totalAmt}$`;
  // billAmt.value = "";
});

function value(finalRate, billvalue) {
  tip = 0;
  totalAmt = 0;
  let r = 0;
  if (finalRate == "excellent") r = 0.15;
  else if (finalRate == "good") r = 0.1;
  else if (finalRate == "average") r = 0.05;
  else if (finalRate == "notgood") r = 0.01;
  tip = parseFloat(r * Number(billAmt.value)).toFixed(2);
  totalAmt = +tip + Number(billvalue);
}
