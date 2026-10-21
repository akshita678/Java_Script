# 🌸 Word Decorator: Ultimate Uppercase Edition! 🌸

Welcome to the **Word Decorator** project! This script makes your final text output loudly bloom in all capital letters directly inside your web console.

---

## ✨ What This Project Does
This script interacts with you to dynamically build sentences and modify the word **"Flower"**. It prompts you for a **prefix** (a word that goes before) and a **suffix** (a word that goes after), then beautifully pieces them together in the console.

We set up the final line of code to use the built-in JavaScript method **`.toUpperCase()`** right after creating our template literal. Now, no matter how you type your prefix and suffix, the final result will be converted to bold, vibrant capital letters!

---

## 🚀 Key Features & Learning Milestones

### 🆕 My First Time Using Template Literals!
The coolest part of this project? **Template Literals** (also known as string interpolation) were used for the very first time! 

Instead of dealing with messy string concatenation (like `+ " " +`), this code uses backticks (`` ` ``) and the `${variable}` syntax. This keeps combining text and variables incredibly clean, readable, and fun to write.

### 🔠 Text Transformation
By chaining `.toUpperCase()` to the end of the template literal, we are dynamically transforming the string on the fly before it prints out.

---

## 💻 The Code

Here is the exact code running under the hood:

```javascript
// 1. Ask the user for their custom styling words
let prefix = prompt("Enter prefix");
let suffix = prompt("Enter suffix"); 

// 2. Mix them together using Template Literals
let answer = `this is the prefix u wanted to add :${prefix} and ${suffix} is the suffix u wanted to add to the word Flower `

// 3. Log the breakdown, then log the final result in ALL CAPS!
console.log(answer);
console.log(` ${prefix} flower ${suffix}`.toUpperCase()); 
```

---

## 🛠️ How to Test It Right Now

1. Open your web browser (Chrome, Safari, Firefox, Edge).
2. Right-click the page, click **Inspect**, and head over to the **Console** tab.
3. Copy and paste the code block above, then hit **Enter**.
4. Type in your prefix (e.g., *super*), type in your suffix (e.g., *power*), and watch the console output a giant, capitalized **" SUPER FLOWER POWER"**! 💥


