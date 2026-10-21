# Character Replacer in JavaScript

This is a simple JavaScript program that asks for a string and lets you replace a specific character inside it with a new one using browser prompts.

---

## 💡 What I Learned
For this project, I used the **`includes()`** function for the first time! It checks if a specific character exists inside a string and returns `true` or `false`. This allowed me to verify if a letter was present before attempting to replace it.

---

## 🛠️ The Code

```js
let char = prompt("Enter character to remove:");
let rep = prompt("Enter character to replace the char with:");
let string1 = prompt("Enter string:");

// Checking if the character exists in the string
if (string1.includes(char)) {
    let result = string1.replace(char, rep); 
    console.log("New string:", result);
} else {
    console.log("char not found");
}
```

---

## 🔍 Code Breakdown

1. **`prompt()` Inputs:** The program collects three inputs from the user: the target character, the replacement character, and the main string.
2. **`string1.includes(char)`:** This conditional checks if the target character is inside the string. 
3. **`string1.replace(char, rep)`:** If found, the `.replace()` method replaces the *first* occurrence of that character with the new one.
4. **`else` Block:** If the character isn't found, it logs `"char not found"` to the console instead of trying to change the text.

---

## 📝 Example Output

* **Input String:** `"banana"`
* **Character to remove:** `"a"`
* **Replacement character:** `"x"`
* **Console Output:** `New string: bxnana` *(Note: `.replace()` only modifies the first instance it matches)*
