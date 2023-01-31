function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value = getRandomInt(0, 20);

const checkInputElement = document.getElementById("numberSearch");
const inputValue = checkInputElement.value;
const converNum = Number(inputValue);

const guessResultElement = document.getElementById("guessResult");
const resultStatmentElement = document.getElementById("resultStatment");

function checkInputNum() {
  guessResultElement.innerHTML = value;
  if (value === inputValue) {
    resultStatmentElement.innerHTML = " 🎉 Correct Number!";
  } else {
    resultStatmentElement.innerHTML = " ❌ Wrong Number!";
  }
  return resultStatmentElement;
}

const checkBtnElement = document.getElementById("checkBtn");
checkBtnElement.addEventListener("click", () => {
  const newValue = checkInputNum();
  return newValue;
});
