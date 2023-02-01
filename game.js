function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get HTML Elements
const guessResultElement = document.getElementById("guessResult");
const resultStatmentElement = document.getElementById("resultStatment");
const checkInputElement = document.getElementById("numberSearch");
const scoreElement = document.getElementById("score");

// default page load
let value = getRandomInt(1, 20);
let remainingScore = 20;
scoreElement.innerHTML = "💯 score:" + remainingScore;
console.log(value);

function checkInputNum() {
  const inputValue = checkInputElement.value;
  if (inputValue === "" || remainingScore === 0) {
    return;
  }

  const convertNum = Number(inputValue);

  if (convertNum > value) {
    resultStatmentElement.innerHTML = "Your Number is too BIG!";
    remainingScore -= 1;
    scoreElement.innerHTML = "💯 score:" + remainingScore;
  } else if (convertNum < value) {
    resultStatmentElement.innerHTML = " Your Number is too SMALL!";
    remainingScore -= 1;
    scoreElement.innerHTML = "💯 score:" + remainingScore;
  } else {
    resultStatmentElement.innerHTML = " 🎉 Correct Number!";
    scoreElement.innerHTML = "💯 score:" + remainingScore;
    guessResultElement.innerHTML = value;
  }

  if (remainingScore === 0) {
    resultStatmentElement.innerHTML = "GAME OVER!!!";
    checkBtnElement.disabled = true;
  }

  checkInputElement.innerHTML = "";
}

function againBtnWork() {
  value = getRandomInt(1, 20);
  console.log(value);
  guessResultElement.innerHTML = "?";
  resultStatmentElement.innerHTML = "";
  checkInputElement.value = "";
}

// Event Listeners
const checkBtnElement = document.getElementById("checkBtn");
checkBtnElement.addEventListener("click", checkInputNum);

const againBtnElement = document.getElementById("againButton");
againBtnElement.addEventListener("click", againBtnWork);
