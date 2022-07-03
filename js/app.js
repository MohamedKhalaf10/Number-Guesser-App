/* Start Global Vriables */

// Select Guess Input
let guess = document.querySelector("#guess");

// Select Guess Button
let guessButton = document.querySelector("#button");

// Select Note Span
let note = document.querySelector(".note");

// Set Number of Trials To 3
let trials = 3;

/* End Global Vriables */
/* Start Building The App */

guessButton.addEventListener("click", (e) => {
  if (guess.value >= 1 && guess.value <= 5) {
    // Prevent The Page From Refresh On Click
    e.preventDefault();

    guessNumber(guess.value);
  }
});

/* End Building The App */
/* Start Functions */

function guessNumber(number) {
  // Get Random Number From 1 To 5
  let randomNumber = Math.floor(Math.random() * 5) + 1;
  if (guess.disabled === false) {
    if (number == randomNumber) {
      // Exectute Correct Number Function
      correctNumber(number);
    } else {
      wrongNumber(randomNumber, trials);
    }
  } else {
    playAgain();
  }
}
// In Case The Number Was Correct
function correctNumber(num) {
  guess.style.border = "1px solid green";
  note.innerHTML = `${num} was correct number! YOU WIN`;
  note.style.cssText = "color: green; display: inline";
  playAgain();
}

// In Case The Number Was Wrong
function wrongNumber(random, trialsNumber) {
  if (trials !== 0) {
    note.innerHTML = `Wrong. ${random} is the correct number. You have ${trialsNumber} guesses left. Try again!`;
    note.style.cssText = "color: red; display: inline";
    guess.value = "";
    trials--;
  } else {
    guess.style.border = "1px solid red";
    note.innerHTML = `Game Over. YOU LOSE! The correct number was ${random}`;
    note.style.cssText = "color: red; display: inline";
    playAgain();
  }
}

// Start New Game
function playAgain() {
  guessButton.value = "Play Again";
  guess.disabled = true;
  guessButton.addEventListener("click", (e) => {
    e.preventDefault();
    location.reload();
  });
}
/* End Functions */
