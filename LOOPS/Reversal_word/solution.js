let n = prompt("Enter word to reverse");
let rev = ""; // Start completely empty, no spaces
let c = n.length;

// Start at c - 1 to target the real last character position
for (let i = c - 1; i >= 0; i--) {
    rev = rev + n[i];
}

console.log(rev);