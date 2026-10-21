# My String Reverse Project

Hi! This is a small project I made to practice coding in JavaScript. It takes a word and flips it backwards!

## What it does
I used a `for` loop to go through the word backwards. 

At first, I had a small bug where it printed `undefinedolleH` because my loop started at `a.length` (which is 5), but JavaScript arrays/strings start counting at 0! I fixed it by starting the loop at `n - 1`.

## The Code
Here is the code I wrote:

```javascript
let a = "Hello";
let g = "";
let n = a.length;

// Had to use n - 1 so it doesn't say undefined!
for (let i = n - 1; i >= 0; i--) {
    g = g + a[i];
}

console.log(g); // This prints "olleH" in the console!
```

## How to run it
1. Copy my code.
2. Right-click on any webpage in Chrome and click **Inspect**.
3. Go to the **Console** tab.
4. Paste the code and hit **Enter**!

Let me know if you like it!
