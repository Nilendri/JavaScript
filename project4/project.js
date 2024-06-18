let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessFeild");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guess");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const result = document.querySelector(".resultpara");

const p = document.createElement("p");

let prevguess = [];
let numguess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`Enter Valid number`);
  } else if (guess < 1) {
    alert(`Enter more than 1`);
  } else if (guess > 100) {
    alert(`Enter less than 100`);
  } else {
    prevguess.push(guess);
    if (numguess === 11) {
      dispalyGuess(guess);
      displayMessage(`Game over,Random number was ${randomNumber}`);
      endGame();
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Your guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is to low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is to high`);
  }
}
function dispalyGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numguess++;
  remaining.innerHTML = `${11 - numguess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h3 id="newGame">Start new Game</h3>`;
  result.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevguess = [];
    numguess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numguess} `;
    userInput.removeAttribute("disabled");
    result.removeChild(p);

    playGame = true;
  });
}