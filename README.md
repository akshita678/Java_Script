# 🚀 JavaScript Fundamentals & Logic Practice

Welcome to my JavaScript repository! This space serves as a dedicated archive for my coding journey, logical problem-solving, and foundational script practices during my **1st Year of BTech**. 

As an absolute beginner, I am using this repository to build a strong programming habit, track my learning timeline, and master core computer science concepts through JavaScript.

---

## 📂 Repository Structure

The code is organized categorically into fundamental JavaScript concepts to keep track of my progress:

*   **`01-grade-marking-system/`** — Logic control blocks (`if-else`, `switch` statements).
    *   `grade-calculator.js` 📊 — Simple prompt-based scoring script.
*   **`02-loops/`** — Iterative loops (`for`, `while`, `do-while`).
*   **`03-functions/`** — Reusable logic and modular code blocks.
  
*   **`04-DOM Selection-Mthods/`** — DOM manipulation and browser events.
    *   `index.html` 🌐 — Simple interface structure.
    *   `style.css` 🎨 — Main stylesheet.
    *   `node.js` ⚡ — JS logic script.

---

## 💻 Highlighted Projects

### 📊 Program 1: Grade Calculator Script
One of my first scripts! It takes user marks via a browser prompt and evaluates the academic grade.

```javascript
let marks = prompt("enter marks ");
if (marks >= 80 && marks <= 100) {
    console.log("A");
} else if (marks >= 70 && marks < 80) {
    console.log("B");
} else if (marks >= 60 && marks < 70) {
    console.log("C");
} else if (marks >= 50 && marks < 60) {
    console.log("D");
} else {
    console.log("E");
}
```

### 🌗 Program 2: Dark/Light Mode Toggle
An interactive theme switcher that intercepts button clicks to dynamically shift DOM elements between dark and light themes.

```javascript
const themeToggleBtn = document.querySelector("button");
let currentTheme = "light";

themeToggleBtn.addEventListener("click", () => {
    if (currentTheme === "light") {
        currentTheme = "dark";
        document.body.style.backgroundColor = "Black";
        document.body.style.color = "White";
    } else {
        currentTheme = "light";
        document.body.style.backgroundColor = "White";
        document.body.style.color = "Black";
    }
    console.log(`Theme changed to: ${currentTheme}`);
});
```

---

## 🧠 Key Skills & Concepts Implemented
*   **Data Capture:** Interacting with users directly using browser controls like `prompt()`.
*   **Flow Control:** Designing logic pathways with conditional structures.
*   **DOM & Event Handling:** Intercepting browser actions (clicks) to manipulate HTML styles in real-time.
*   **Git Version Control:** Committing code consistently to map real-time technical growth.

---

## 🛠️ How to Run These Scripts Locally

### For Pure JavaScript Logic Files:
1. Open your browser (Chrome, Edge, Brave, Firefox).
2. Press **`F12`** or right-click anywhere and select **Inspect**.
3. Navigate to the **Console** tab.
4. Copy and paste the script code directly into the window and hit **Enter**.

### For UI/DOM Projects (Like the Theme Toggle):
1. Download or clone the folder locally.
2. Double-click the `index.html` file to launch it directly in your web browser.
3. Click the target interface button to test the dynamic transitions.

---
🌱 *Every massive codebase started with a single file. Documenting my software engineering evolution one commit at a time.*

