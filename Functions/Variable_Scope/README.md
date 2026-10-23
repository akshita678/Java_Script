# 🌐 Variable Scope: Global vs. Local

A simple JavaScript code demonstrating how variable scope dictates where variables can be accessed, and how functions prioritize local data over global data. 🔍

## 📝 Key Learning: Variable Scope

This code marks my first deep dive into **Variable Scope** in JavaScript! 

*   **Global Scope 🌍:** Variables declared outside of any function (like `let pet = "dog"`) are global. They can be accessed from absolutely anywhere in your script.
*   **Local (Functional) Scope 🏠:** Variables declared *inside* a function (like `let pet = "cat"`) are local to that function. They only live inside that function and cannot be reached from the outside.
*   **Shadowing & Priority 🎯:** When a function has a local variable with the exact same name as a global variable, the function prioritizes the **local value first**. This is called variable shadowing.

---

## 💻 The Code

```javascript
// 🌍 Global Variable 
let pet = "dog"; 

function animal() {
    // 🏠 Local Variable 
    let pet = "cat"; 
    
    // Output: "cat" -> The function prioritizes the local value first! 🎯
    console.log(pet); 
}

// Running the function
animal();

// Output: "dog" -> The local "cat" variable cannot be accessed outside the function! 🛑
console.log(pet); 
```

---

## 🧠 Question: What if we used `var` instead of `let`? 🤔

*   **The Answer:** It behaves exactly the same way here! 
*   **Why?** While `var` does not respect *block scope* (like `if` statements or `for` loops), it **absolutely respects functional scope**. A `var` declared inside a function remains locked inside that function, meaning it won't leak out to the global space.

---

## 🚀 How to Run It

1. Open your web browser's Developer Tools (Right-click -> **Inspect** or press `F12`). 🛠️
2. Click on the **Console** tab. 🖥️
3. Paste the code above and press **Enter**. 🔥
