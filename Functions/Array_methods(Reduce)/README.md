# 🧮 Accumulator Utility: Sum & Product of N Numbers

A JavaScript program that takes a number input `n` from the user, dynamically builds an array from `1` to `n`, and calculates both the total sum and the product (factorial) of those numbers using the `.reduce()` method.

## 📝 Key Concepts Explored

### 🏗️ Dynamic Array Creation
I learned how to use a standard `for` loop combined with the `.push()` method to automatically generate a sequential array of numbers starting from `1` all the way up to the user-defined limit `n`.

### 🧪 Higher-Order Functions: `.reduce()`
This project introduces the **`.reduce()`** method, which is a powerful array method used to boil down a whole array of values into a single final result. 

I mastered how the callback parameters work inside `.reduce()`:
1.  **`res` (Result/Accumulator):** The running total that carries over from the previous iteration.
2.  **`val` (Current Value):** The current element from the array being processed.

*   **For the Sum:** The accumulator continuously adds the current value (`res + val`).
*   **For the Product:** The accumulator continuously multiplies the current value (`res * val`), effectively calculating the factorial of the input number.

---

## 💻 The Code

```javascript
// Gathering the upper limit from the user 📥
let n = prompt("enter number");

// Building the sequential array from 1 to n 🧱
let a = [];
for (let i = 1; i <= n; i++) {
     a.push(i);
} 

// Using .reduce() to calculate the sum ➕
let sum = a.reduce((res, val) => {
    return res + val;
});

// Using .reduce() to calculate the product (Factorial) ✖️
let product = a.reduce((res, val) => {
    return res * val;
});

// Displaying the final computations 🎉
console.log(`Sum: ${sum}, Product: ${product}`);
```

---

## 🚀 How to Run It

1. Open your web browser's Developer Tools (Right-click -> **Inspect** or press `F12`). 🛠️
2. Click on the **Console** tab. 🖥️
3. Paste the code above and press **Enter**. 🔥
