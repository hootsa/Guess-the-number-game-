function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value = getRandomInt(1, 20);
console.log(value);
const guessResultElement = document.getElementById("guessResult");
const resultStatmentElement = document.getElementById("resultStatment");
const checkInputElement = document.getElementById("numberSearch");

function checkInputNum() {
  const inputValue = checkInputElement.value;
  const convertNum = Number(inputValue);

  guessResultElement.innerHTML = value;

  if (value === convertNum) {
    resultStatmentElement.innerHTML = " 🎉 Correct Number!";
  } else {
    resultStatmentElement.innerHTML = " ❌ Wrong Number!";
  }
  checkInputElement.disabled = true;
}

const checkBtnElement = document.getElementById("checkBtn");
checkBtnElement.addEventListener("click", checkInputNum);

const againBtnElement = document.getElementById("againButton");
againBtnElement.addEventListener("click", againBtnWork);

function againBtnWork() {
  checkInputElement.disabled = false;
  value = getRandomInt(1, 20);
  guessResultElement.innerHTML = "?";
  resultStatmentElement.innerHTML = "";
  checkInputElement.value = "";
}
