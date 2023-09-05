const buttons = document.querySelectorAll(".btn");
const result = document.querySelector("#res");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let btnText = e.target.innerText;
    if (btnText === "x") {
      btnText = "*";
    }

    result.value += btnText;
  });
});

function equal() {
  result.value = eval(result.value);
}
function cos() {
  result.value = Math.cos(result.value);
}
function sin() {
  result.value = Math.sin(result.value);
}
function tan() {
  result.value = Math.tan(result.value);
}
function pow() {
  result.value = Math.pow(result.value, 2);
}
function powx(params) {
  result.value += "**(";
}

function sqrt() {
  result.value = Math.sqrt(result.value, 2);
}
function log() {
  result.value = Math.log(result.value, 2);
}
function pi() {
  result.value += Math.PI;
}
function e() {
  result.value = Math.E;
}
function sqrt() {
  result.value = Math.sqrt(result.value, 2);
}

function erase() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
