const inputuser = document.getElementById("inputuser");

inputuser.addEventListener("keyup", function (e) {
  console.log(e.target); // input is target
  let search = e.target.value.toLowerCase(); // value inside the input
  console.log(search);

  let allnames = document.querySelectorAll(".name");
  allnames.forEach((name) => {
    let checkName = name.textContent.toLowerCase();
    console.log(checkName);
    if (!checkName.includes(search)) {
      name.style.display = "none";
    } else {
      name.style.display = "block";
    }
  });
});
