# 🔄 Palindrome Checker in JavaScript

A  program that I wrote to determine whether a given string is a **palindrome** (reads the same forward and backward).

---

## 🚀 How It Works

The script takes a string, reverses it using a backward-looping `for` cycle, and compares the result with the original input.

```js
let a = "naman";
let g = "";
let n = a.length;

// Loop backwards through the string
for (let i = n - 1; i >= 0; i--) {
    g = g + a[i];
}

// Check if the original matches the reversed string
if (a == g) {
    console.log("palindrome");
} else {
    console.log("not palindrome");
}
```

---

## 📊 Code Breakdown

| Component | Purpose |
| :--- | :--- |
| **`let a`** | The target string input to test (e.g., `"naman"`). |
| **`let g`** | An empty string accumulator to store the reversed characters. |
| **`let n`** | Stores the total length of the string for the loop boundary. |
| **`for` loop** | Starts at index `n-1` (the last character) and counts down to `0`. |
| **`if (a == g)`**| Validates equality to log `"palindrome"` or `"not palindrome"`. |

---

## 💡 Example Inputs & Outputs

* **Input:** `"naman"` ➡️ **Output:** `palindrome`
* **Input:** `"racecar"` ➡️ **Output:** `palindrome`
* **Input:** `"hello"` ➡️ **Output:** `not palindrome`

---
