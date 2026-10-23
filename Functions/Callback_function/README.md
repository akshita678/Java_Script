# 🔢 Array Square & Index Printer

A simple JavaScript code that iterates through an array of numbers, calculates the square of each value, and prints the result alongside its matching index.

## 📝 Key Concepts Explored

### 🏗️ Higher-Order Functions & Callbacks
This project marks my first hands-on experience working with **Higher-Order Functions** and **Callback Functions**!
*   **Higher-Order Function (`.forEach()`):** A function that accepts another function as an argument. Instead of writing a manual loop, `.forEach()` manages the iteration automatically under the hood.
*   **Callback Function:** The arrow function `(val, index) => { ... }` passed *into* `.forEach()`. It is called automatically for every single item inside the array.

### ⚙️ Understanding `.forEach()` Parameters
I learned that the callback function inside `.forEach()` can automatically accept specific, ordered parameters from the array:
1.  **`val` (1st Parameter):** Represents the current element being processed in the array.
2.  **`index` (2nd Parameter):** Represents the index position of that current element (starting at `0`).

---

## 💻 The Code

```javascript
// Initial array of numbers
let arr =;

// Utilizing .forEach() as a Higher-Order Function 🚀
arr.forEach((val, index) => {
    // Calculates the square (val * val) and prints it with its current index
    console.log(val * val, index);
});
```

---

## 🚀 How to Run It

1. Open your web browser's Developer Tools (Right-click -> **Inspect** or press `F12`). 🛠️
2. Click on the **Console** tab. 🖥️
3. Paste the code above and press **Enter**. 🔥
