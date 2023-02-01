function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value = getRandomInt(1, 20);
console.log(value);
const guessResultElement = document.getElementById("guessResult");
const resultStatmentElement = document.getElementById("resultStatment");
const checkInputElement = document.getElementById("numberSearch");
const scoreElement = document.getElementById("score");

let maxScore = 20;
scoreElement.innerHTML = "💯 score:" + maxScore;
function checkInputNum() {
  let minScore = 0;

  const inputValue = checkInputElement.value;
  if (inputValue === "") {
    return;
  }
  const convertNum = Number(inputValue);

  if (convertNum > value && maxScore !== minScore) {
    resultStatmentElement.innerHTML = "Your Number is too BIG!";
    maxScore -= 1;
    scoreElement.innerHTML = "💯 score:" + maxScore;
  } else if (convertNum < value && maxScore !== minScore) {
    resultStatmentElement.innerHTML = " Your Number is too SMALL!";
    maxScore -= 1;
    scoreElement.innerHTML = "💯 score:" + maxScore;
  } else {
    resultStatmentElement.innerHTML = " 🎉 Correct Number!";
    scoreElement.innerHTML = "💯 score:" + maxScore;
    guessResultElement.innerHTML = value;
  }
  if (maxScore === minScore) {
    scoreElement.innerHTML = "💯 score:" + minScore;
  }

  checkInputElement.innerHTML = "";
}

const checkBtnElement = document.getElementById("checkBtn");
checkBtnElement.addEventListener("click", checkInputNum);

const againBtnElement = document.getElementById("againButton");
againBtnElement.addEventListener("click", againBtnWork);

function againBtnWork() {
  checkInputElement.disabled = false;
  value = getRandomInt(1, 20);
  console.log(value);
  guessResultElement.innerHTML = "?";
  resultStatmentElement.innerHTML = "";
  checkInputElement.value = "";
}
