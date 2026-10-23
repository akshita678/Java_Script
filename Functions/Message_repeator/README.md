# Message Repeater Utility

A simple JavaScript program that prompts a user for a message and a number, then displays that message in the console the specified number of times.

## How It Works

1. The program asks you to input a text message via a popup prompt.
2. It then asks you how many times you want that message to be displayed.
3. Finally, it executes the `abx` function to log the message to the console.

## The Bug & How It Was Resolved

### The Problem (`NaN` Error)
Initially, the code attempted to repeat the string by multiplying it directly with a number like this:
```javascript
console.log(n * t); 
```
In languages like Python, multiplying a string by a number repeats the text. However, in JavaScript, using the multiplication operator (`*`) on a string and a number results in **`NaN` (Not a Number)** because JavaScript tries to perform actual math on the text.

### The Fix (Looping)
To resolve this issue, the multiplication logic was removed. Instead, a `for` loop was introduced inside the `abx` function. The loop safely iterates `t` times, printing the string `n` individually on each pass:

```javascript
for (let i = 0; i < t; i++) {
    console.log(n);
}
```

## Code

```javascript
function abx(n, t) {
    console.log(`msg is ${n}, times is ${t}`);
    
    // Fixed Bug: Instead of multiplying (which causes NaN), 
    // we loop 't' times to repeat the message.
    for (let i = 0; i < t; i++) {
        console.log(n);
    }
}

let n = prompt("enter msg to be displayed");
let t = parseInt(prompt("enter number of times msg needs to be displayed"));
abx(n, t); 
```

## How to Run This Code

1. Open any modern web browser (like Google Chrome, Firefox, or Edge).
2. Right-click anywhere on the page and select **Inspect** (or press `F12`) to open the Developer Tools.
3. Click on the **Console** tab.
4. Paste the code into the console and hit **Enter**.
5. Respond to the two prompt boxes that pop up!
