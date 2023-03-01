const btn = document.querySelector(".btn");
const input = document.querySelector(".input-txt");

btn.addEventListener("click", copyText);

function copyText() {
  input.select();
  //input.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(input.value);
  alert("Copied to Clipboard");
}
