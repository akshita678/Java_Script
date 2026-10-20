# My JavaScript Word Reverser Loop Challenge 🔄

Hi! I am practicing JavaScript loops. I wanted to make a script that asks a user for a word and flips it completely backward using a `for` loop. 

Rules I followed:
* **No functions** (haven't learned them yet!)
* **No arrays** (just simple strings and loops!)

---

## 🛑 My First Try (It had bugs!)

This was the code I wrote first. It almost worked, but it kept putting `undefined` and a random space at the front of my reversed word.

```javascript
n = prompt("Enter word to reverse");
rev = " ";
c = n.length;

for(let i=c; i>=0; i--){
    rev = rev + n[i];
}

console.log(rev);
// If I type "cat", it prints: " undefinedtac" 😭
```

### What I did wrong:
1. **The `undefined` mistake:** In JavaScript, counting slots in a word starts at `0`. If my word is `"cat"`, the length (`c`) is `3`. But the letters are only at slots `0`, `1`, and `2`. Slot `3` is totally empty! Because my loop started at `i = c` (which is 3), it grabbed an empty slot and added the word `"undefined"` to my text.
2. **The space mistake:** I accidentally started my `rev` variable with a space inside quotes (`" "`). That added a permanent annoying space right at the start.

---

## ✅ My Fixed Code (It works perfectly!)

To fix it, I changed `rev` to a completely empty string `""` with no spaces. Then I made the loop start at `c - 1` so it targets the actual last letter of the word safely.

```javascript
let n = prompt("Enter word to reverse");
let rev = ""; // Completely empty now!
let c = n.length;

// Started at c - 1 to get the real last letter slot
for (let i = c - 1; i >= 0; i--) {
    rev = rev + n[i];
}

console.log(rev);
// Now if I type "cat", it prints: "tac" 🎉
```

---

## 🛠️ How to try it yourself

1. Open any website page on your browser.
2. Right-click and choose **Inspect**, then click on the **Console** tab.
3. Copy my **Fixed Code** from above, paste it in there, and press **Enter**!
