// Convert the target number to a number type
let n = Number(prompt("Enter the number to guess:"));
let a = Number(prompt("Enter your guess:"));

while (a !== n) {
    if (a > n) {
        console.log("Guess a lil lower");
        a = Number(prompt("Enter your guess:"));
    } else {
        console.log("Guess a lil higher");
        a = Number(prompt("Enter your guess:"));
    }
}

console.log("Congo! You got it!");


