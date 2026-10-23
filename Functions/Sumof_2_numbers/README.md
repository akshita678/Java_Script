# ➕ Two-Number Sum Function

A basic JavaScript program that prompts the user for two numbers, calculates their sum using a function, and outputs the result. 🚀

## 📝 Key Learning: The `return` Statement

This project marks my very first time using the **`return` statement** in JavaScript! 🔑

*   **What I learned:** Instead of printing the result directly inside the function using `console.log()`, the `return` statement stops the function's execution and hands the final calculated value back to the code that called it. 🔄
*   **Why it matters:** This allows the output of the function to be stored safely in a variable (`result`) and used anywhere else in the program. 📦

---

## 💻 The Code

```javascript
// Function that calculates and returns the sum of two numbers
function sum(n,t){
    return n+t; // return is a reserved keyword that returns a value out of function any statement after this wont be executed 
   
  
}
// Converting the string inputs into integers 🔢
let n =parseInt(prompt("enter number 1"));
let t =parseInt(prompt("enter number 2"));

// Calling the function and saving the returned value 📥
let ans=sum(n,t); 

// Displaying the final result 🎉
console.log(`sum of the numbers is ${ans}`)
```


---



## 🚀 How to Run It

1. Open your web browser's Developer Tools (Right-click -> **Inspect** or press `F12`). 🛠️
2. Click on the **Console** tab. 🖥️
3. Paste the code above and press **Enter**. 🔥
