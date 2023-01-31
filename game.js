function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value = getRandomInt(0, 20);
console.log(value);
const guessResultElement = document.getElementById("guessResult");
const resultStatmentElement = document.getElementById("resultStatment");

function checkInputNum() {
  const checkInputElement = document.getElementById("numberSearch");
  const inputValue = checkInputElement.value;
  const converNum = Number(inputValue);

  guessResultElement.innerHTML = value;
  if (value === converNum) {
    resultStatmentElement.innerHTML = " 🎉 Correct Number!";
  } else {
    resultStatmentElement.innerHTML = " ❌ Wrong Number!";
  }
}

const checkBtnElement = document.getElementById("checkBtn");
checkBtnElement.addEventListener("click", checkInputNum);
