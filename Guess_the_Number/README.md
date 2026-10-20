# My First Number Guessing Game 🎮

A simple game built with **JavaScript** where one player sets a secret number, and another player tries to guess it!

## How the Game Works
1. **Set the Secret Number:** A pop-up will ask you to enter the number to hide.
2. **Make a Guess:** A second pop-up will ask you to guess the number.
3. **Get Hints:** The game will print `Guess a lil lower` or `Guess a lil higher` in the developer console.
4. **Win:** Once you guess the exact number, the game prints `Congo! You got it!`.

## How to Play It (Step-by-Step)
You do not need to install anything to run this code! Just use your web browser:

1. Open a blank browser tab (like Google Chrome or Firefox).
2. Right-click anywhere on the page and select **Inspect** (or press `F12` on Windows / `Cmd + Option + I` on Mac).
3. Click on the **Console** tab at the top of the panel that pops up.
4. Copy the code below, paste it into the console box, and press **Enter**.

## The Code

```javascript
// 1. Ask for the secret number and the first guess
let n = Number(prompt("Enter the number to hide:"));
let a = Number(prompt("Enter your guess:"));

// 2. Keep asking as long as the guess is wrong
while (a !== n) {
    if (a > n) {
        console.log("Guess a lil lower 🔽");
        a = Number(prompt("Enter your guess:"));
    } else {
        console.log("Guess a lil higher 🔼");
        a = Number(prompt("Enter your guess:"));
    }
}

// 3. Celebrate the win!
console.log("Congo! You got it! 🎉");
```

## What I Learned from This Project 🧠
* **Variables (`let`):** Used to store the secret number and the guesses.
* **`Number()` Function:** Converts text inputs from the pop-up into actual mathematical numbers so the computer can compare them correctly.
* **`while` Loops:** Keeps the game running over and over until the player gets the right answer.
* **`if / else` Conditions:** Helps the computer make choices and give the correct hints.
