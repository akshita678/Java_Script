## Problem: Counting Vowels 🗣️

 I wanted to write a program that looks at a word and counts how many vowels (`a, e, i, o, u`) are inside it. 

### 🤦‍♂️ My Big Fumble with `.toLowerCase`
I wanted my program to work even if someone typed capital letters like "APPLE". I found out there is a built-in trick called `toLowerCase` to make the whole word lowercase. 

But I kept messing up because I just wrote it like this:
```javascript
s = n.toLowerCase; // This is WRONG! It didn't do anything!
```
I fumbled with this for a while until I learned you **MUST** put the open and close parentheses `()` at the end, otherwise Javascript doesn't actually run the trick!

### My Final Working Code:
```javascript
let n = prompt("Enter word to find number of vowels");
c = n.length;
s = n.toLowerCase(); // I fixed it by adding the () here!
let num = 0;

for (let i = 0; i < c; i++) {
    if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
       console.log(s[i]); // This prints out each vowel it detects
       num = num + 1; // Adds 1 to the score
    }
}

console.log(num); // Prints the final total number
```

---

## 🛠️ How to run my code

If you want to test my code:
1. Open any webpage in Google Chrome or Firefox.
2. Right-click anywhere and click **Inspect**.
3. Click the **Console** tab at the top.
4. Copy and paste my code in there, press **Enter**, and type a word into the popup box!
