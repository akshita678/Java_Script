# 📦 JavaScript Array Fundamentals

This file serves as a practical playground to understand how arrays behave in JavaScript, focusing on structural behavior, item modification, and loop iterations. 🇮🇳

---

## 🎯 Concepts Explored in this Script

### 1. Structure & Properties
* **Type Identification:** Demonstrates that `typeof()` an array returns `"object"`.
* **Out-of-Bounds Access:** Highlights that accessing an unassigned index (like `grocery[1200]`) gracefully returns `undefined` instead of throwing an error.

### 2. Mutability (Updating Elements)
* **Correction Note:** Although primitive types are immutable, **arrays in JavaScript are mutable**. 
* **In-Place Update:** The script proves this by dynamically replacing `"mango"` with `"Cashews"` using direct index assignment: `grocery[1] = "Cashews"`.

### 3. Array Traversal (Iteration)
The file demonstrates two distinct ways to write a program that loops through and prints all elements:
* **Standard `for` loop:** Tracking the index manually via `grocery.length`.
* **`for...of` loop (⭐ Preferred Way):** Cleaner syntax to directly extract and log values without managing counters.

---

## 💻 How to Execute This Code

Make sure you have [Node.js](https://nodejs.org) installed, then run the file directly from your terminal:

```bash
node your_file_name.js
```
