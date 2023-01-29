const pound = document.getElementById("pound");
const kg = document.getElementById("kg");
const gram = document.getElementById("gram");
const ounces = document.getElementById("ounces");

/**********non dry method */

// pound.addEventListener("input", function (e) {
//   kg.value = e.target.value * 0.453592000004704;
//   gram.value = e.target.value * 453.592;
//   ounces.value = e.target.value * 15.999986948800007269;
// });
// kg.addEventListener("input", function (e) {
//   pound.value = e.target.value * 2.20462;
//   gram.value = e.target.value * 1000;
//   ounces.value = e.target.value * 35.274;
// });
// gram.addEventListener("input", function (e) {
//   kg.value = e.target.value / 1000;
//   pound.value = e.target.value * 0.00220462;
//   ounces.value = e.target.value * 0.035274;
// });
// ounces.addEventListener("input", function (e) {
//   kg.value = e.target.value * 0.0283495;
//   gram.value = e.target.value * 28.3495;
//   pound.value = e.target.value * 0.0625;
// });

/*************dry method */
const form = document.querySelector("form");
form.addEventListener("input", calculate);

function calculate(e) {
  if (e.target.classList.contains("pound")) {
    kg.value = e.target.value * 0.453592000004704;
    gram.value = e.target.value * 453.592;
    ounces.value = e.target.value * 15.999986948800007269;
  } else if (e.target.classList.contains("kg")) {
    pound.value = e.target.value * 2.20462;
    gram.value = e.target.value * 1000;
    ounces.value = e.target.value * 35.274;
  } else if (e.target.classList.contains("gram")) {
    kg.value = e.target.value / 1000;
    pound.value = e.target.value * 0.00220462;
    ounces.value = e.target.value * 0.035274;
  } else {
    kg.value = e.target.value * 0.0283495;
    gram.value = e.target.value * 28.3495;
    pound.value = e.target.value * 0.0625;
  }
}
