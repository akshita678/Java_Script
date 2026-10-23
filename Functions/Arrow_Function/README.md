# 🔠 Vowel Counter: Traditional vs. Arrow Functions

A single-file code demonstrating two different ways to solve the same problem: counting vowels in a string using a `for...of` loop. This script contains both a traditional function block and a modern Arrow Function block.

## 📝 Key Concepts Explored

*   **The `for...of` Loop 🔁:** A clean and modern JavaScript loop designed specifically to iterate over iterable objects like strings. It pulls out every individual character (`i`) one by one automatically.
*   **Arrow Function Syntax 🏹:** Converting a traditional declaration to a concise variable-based assignment using the `=>` operator.
*   **CONVERSION OF A TRADITIONAL FUNCTION TO ARROW FUNCTION 

---

## 💻 Combined Code

```javascript
// ==========================================
// 1. TRADITIONAL FUNCTION APPROACH
// ==========================================
let count_vowel_trad = 0;

function countTraditional(n) { 
    for (let i of n) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            count_vowel_trad = count_vowel_trad + 1;
        }
    }
    return count_vowel_trad;
}

// ==========================================
// 2. MODERN ARROW FUNCTION APPROACH 🏹
// ==========================================
let count_vowel_arrow = 0;

const countArrow = (n) => {
    for (let i of n) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
            count_vowel_arrow = count_vowel_arrow + 1;
        }
    }
    return count_vowel_arrow;
};

// ==========================================
// RUNNING BOTH METHODS 🚀
// ==========================================
let n = prompt("Enter a string to check for vowels:");

// Executing Traditional Function
let traditionalAns = countTraditional(n); 
console.log(`Result from Traditional Function: ${traditionalAns}`);

// Executing Arrow Function
let arrowAns = countArrow(n); 
console.log(`Result from Arrow Function: ${arrowAns}`);
```

---

## 🚀 How to Run It

1. Open your web browser's Developer Tools (Right-click -> **Inspect** or press `F12`). 🛠️
2. Click on the **Console** tab. 🖥️
3. Paste the unified block of code above and press **Enter**. 🔥
