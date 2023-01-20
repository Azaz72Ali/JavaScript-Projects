const inputUnit = document.getElementById("input-unit");
const convertButt = document.getElementById("convert-btn");
const meter = document.getElementById("meter-feet");
const litre = document.getElementById("litre-gallon");
const kg = document.getElementById("kg-pound");

convertButt.addEventListener("click", function () {
  let arr = [];
  arr.push(inputUnit.value);
  meterFeet(arr[0]);
  litreGallon(arr[0]);
  KgPound(arr[0]);
});

function meterFeet(x) {
  let meterTofeet = x * 3.28084;
  let feetTometer = x / 3.28084;
  meter.textContent = `${x} meters = ${meterTofeet.toFixed(
    3
  )} feet | ${x} feet = ${feetTometer.toFixed(3)} meters`;
}
function litreGallon(x) {
  let litreTogallon = x * 0.264172;
  let gallonTolitre = x / 0.264172;
  litre.textContent = `${x} liters = ${litreTogallon.toFixed(
    3
  )} gallons | ${x} gallon = ${gallonTolitre.toFixed(3)} liters`;
}
function KgPound(x) {
  let kgTopound = x * 2.20462;
  let poundTokg = x / 2.20462;
  kg.textContent = `${x} kilos = ${kgTopound.toFixed(
    3
  )} pound | ${x} pound = ${poundTokg.toFixed(3)} kg`;
}
