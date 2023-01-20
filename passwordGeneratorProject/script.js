const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];
  
  let password = document.getElementById("generate-pass");
  
  let first = document.getElementById("first-pass");
  let second = document.getElementById("second-pass");
  let one = "";
  let two = "";
  const passwordGenerate = function () {
    if (one.length < 15 && two.length < 15) {
      let i = 0;
      while (i < 15) {
        let spon = Math.trunc(Math.random() * 91);
        let spon1 = Math.trunc(Math.random() * 91);
        one += characters[spon];
        two += characters[spon1];
        i++;
      }
      first.textContent = one;
      second.textContent = two;
    }
  };
  function generate() {
    passwordGenerate();
    one = "";
    two = "";
  }
  //
  