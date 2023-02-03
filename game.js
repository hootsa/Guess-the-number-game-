window.onload = function () {
  // close instruction Modal
  document.getElementById("letsPlayBtn").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Get HTML Elements
  const guessResultElement = document.getElementById("guessResult");
  const resultStatmentElement = document.getElementById("resultStatment");
  const checkInputElement = document.getElementById("numberSearch");
  const scoreElement = document.getElementById("score");
  const highScoreElement = document.getElementById("highScore");
  const checkBtnElement = document.getElementById("checkBtn");

  if (checkInputElement.value === "") {
    checkBtnElement.disabled = true;
  }

  // default page load
  let value = getRandomInt(1, 20);
  let remainingScore = 20;
  let highScore = 0;
  scoreElement.innerHTML = "💯 score:" + remainingScore;
  highScoreElement.innerHTML = "🥇 Highscore: 0";
  console.log(value);

  function checkInputNum() {
    const inputValue = checkInputElement.value;
    if (remainingScore === 0) {
      checkBtnElement.disabled = true;
      return;
    }

    if (!inputValue) {
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
      checkBtnElement.disabled = true;
    }

    if (convertNum === value && remainingScore > highScore) {
      highScore = remainingScore;
      highScoreElement.innerHTML = "🥇 Highscore:" + remainingScore;
    }

    if (remainingScore === 0) {
      resultStatmentElement.innerHTML = "GAME OVER!!!";
      checkBtnElement.disabled = true;
    }
    checkInputElement.value = "";
  }

  function againBtnWork() {
    value = getRandomInt(1, 20);
    console.log(value);
    remainingScore = 20;
    scoreElement.innerHTML = "💯 score:" + remainingScore;
    checkBtnElement.disabled = false;
    guessResultElement.innerHTML = "?";
    resultStatmentElement.innerHTML = "";
    checkInputElement.value = "";
  }

  // Event Listeners
  checkBtnElement.addEventListener("click", checkInputNum);

  const againBtnElement = document.getElementById("againButton");
  againBtnElement.addEventListener("click", againBtnWork);

  checkInputElement.addEventListener("input", () => {
    checkBtnElement.disabled = false;
  });
};
