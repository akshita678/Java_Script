# 📊 JavaScript Grade Calculator

A beginner-friendly JavaScript program built during my **1st Year of BTech** to practice conditional logic (`if-else` statements) and user input handling.

---

## 🚀 How It Works

The script prompts the user to enter a student's marks and prints the corresponding grade to the console based on the following criteria:
* **80 - 99:** Grade A
* **70 - 79:** Grade B
* **60 - 68:** Grade C
* **50 - 58:** Grade D
* **Rest:** Grade E

---

## 💻 Code Snippet

This is the logic implemented using sequential conditional blocks:

```javascript
a = prompt("enter marks ");
if (a >= 80 && a < 100) {
    console.log("A")
}
else if (a >= 70 && a < 89) {
    console.log("B")
}
else if (a >= 60 && a < 69) {
    console.log("C")
}
else if (a >= 50 && a < 59) {
    console.log("D")
}
else {
    console.log("E")
}
```

---

## 🧠 What I Learned & Future Refactors
As part of my absolute beginner programming journey, building this script helped me understand:
* **Control Flow:** How JavaScript executes statements sequentially using `if-else if` structures.
* **Input Handling:** Capturing browser-based user input using `prompt()`.

### Next Steps for Improvement:
* **Type Conversion:** Converting the text string from `prompt()` into an actual integer using `parseInt()`.
* **Range Optimization:** Polishing the upper and lower boundaries so a perfect score of `100` is included in Grade A.

---
💡 *Documenting my software engineering learning timeline, one commit at a time!*

