// Guessing Game Program

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));
    attempts++;

    if (guess > randomNumber) {
        alert("Too high! Try again.");
    } else if (guess < randomNumber) {
        alert("Too low! Try again.");
    } else {
        alert("Correct! You guessed the number in " + attempts + " attempts.");
    }
}