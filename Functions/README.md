# JavaScript Functions Journey

Welcome to my folder dedicated to mastering **JavaScript Functions**. This project serves as a digital logbook where I document my learning progress, core notes, coding challenges, and the bug fixes I encounter along the way.

## 📁 Repository Structure

*   **Core Concepts:** Notes on declarations, arrow functions, parameters, scope, and closures.
*   **Problem-Solving Sandbox:** Mini-programs, algorithms, and logical exercises.
*   **Bug Log:** Documentation of errors, edge cases, and structural solutions.

---

## 🔍 Featured Challenge: Handling the `NaN` Issue

One of my early challenges involved creating a function to repeat a text string a specific number of times based on user input. 

### The Problem
Initially, the code attempted to use multiplication to repeat the string:
```javascript
console.log(n * t); // Output: NaN
```
Unlike languages like Python where string multiplication is supported, JavaScript attempts to parse the string into a numeric value. When it fails, it returns **`NaN` (Not a Number)**.

### The Solution
To resolve this, I replaced the mathematical approach with a `for` loop. The loop iterates `t` times, safely printing the string `n` on a new line during each pass.

```javascript
for (let i = 0; i < t; i++) {
    console.log(n);
}
```
*You can view the full source code in the [Message Repeater directory](./01-message-repeater).*

---

## 🎯 Progress Tracker

- [x] **Basics:** Function declarations, arguments, and return values.
- [x] **Control Flow:** Integrating loops and conditionals inside functions *(e.g., Message Repeater)*.
- [x] **Scope & Closures:** Understanding local vs. global execution contexts.
- [x] **Arrow Functions:** Syntax minimization and conversion of traditional function to arrow function.
- [ ] **Array Methods:** Working with higher-order functions like `.map()`, `.filter()`, and `.reduce()`.

---

## 💻 How to Use This Repository

Each project folder is organized into:
1. `index.js`: The JavaScript file containing the functional source code and clarifying comments.
2. `README.md`: A concise summary detailing the core objective, problem constraints, and lessons learned.
