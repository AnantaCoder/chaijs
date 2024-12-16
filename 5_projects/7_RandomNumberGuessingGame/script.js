const random_number = Math.floor(Math.random() * 100) + 1;

const btn = document.getElementById("submitGuess");
const guessRemaining = document.getElementById("guessesRemaining");
const previous = document.getElementById("previousGuesses");
const guessDisplay = document.getElementById("display");
const playAgainBtn = document.getElementById("playAgain");

let isGameOn = true;
let guesses = 0;
let PrevGuess = [];


btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (!isGameOn) {
        alert("Game over! Click 'Play Again' to restart.");
        return;
    }
    const input = document.getElementById("guessInput");
    const guess = parseInt(input.value, 10);
    validateGuess(guess);
    input.value = ""; 
});
playAgainBtn.addEventListener("click", function () {
    resetGame();
});

console.log(random_number)
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number.");
    } else if (guess <= 0 || guess > 100) {
        alert("Please enter a number between 1 and 100.");
    } else {
        PrevGuess.push(guess);
        guesses++;
        updateGuessesDisplay();

        if (guesses === 10 && guess !== random_number) {
            alert(`Game over! The correct number was ${random_number}.`);
            isGameOn = false;
            showPlayAgain();
        } else {
            checkGuess(guess);
        }
    }
}
function checkGuess(guess) {
    if (guess === random_number) {
        guessDisplay.innerHTML = `<strong style="color: green;">Congratulations! You guessed the number ${random_number}.</strong>`;
        isGameOn = false;
        showPlayAgain();
    } else if (guess > random_number) {
        displayMessage("Guess lower!");
    } else {
        displayMessage("Guess higher!");
    }
}
function updateGuessesDisplay() {
    guessRemaining.innerText = `Guesses Remaining: ${10 - guesses}`;

    previous.innerHTML = `Previous Guesses: <span style="color: red;">${PrevGuess.join(", ")}</span>`;
}
function displayMessage(message) {
    guessDisplay.innerHTML = `<strong style="color: black;">${message}</strong>`;
}
function showPlayAgain() {
    btn.style.display = "none";
    playAgainBtn.style.display = "inline-block";
}
function resetGame() {
    isGameOn = true;
    guesses = 0;
    PrevGuess = [];
    btn.style.display = "inline-block";
    playAgainBtn.style.display = "none";
    guessRemaining.innerText = "Guesses Remaining: 10";
    previous.innerText = "Previous Guesses:";
    guessDisplay.innerText = "";
    document.getElementById("guessInput").value = "";
}
