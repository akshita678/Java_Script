# JavaScript Learning - For In Loop Practice

Hi! This is a simple project I made to practice using the `for...in` loop in JavaScript. I wanted to see how to look through an object and count only specific things.

## The Problem

I have a grocery list object. Some items have prices (numbers), but some items just have notes (strings). I need to write code that loops through the object and counts **only the items that have numbers**.

Here is my data:
```javascript
const grocery = {
    apple: 7.8,
    banana: 6.7 ,
    carrots: "Not sweet",
    Capsicum: 8.9,
    Rice: 1.5,
    milk: "Milk_Point"
}
```

---

## My Code

Here is the JavaScript code I wrote to solve this. It loops over the object, checks the type of each value, and adds 1 to my counter if it's a number.

```javascript
const grocery = {
    apple: 7.8,
    banana: 6.7 ,
    carrots: "Not sweet",
    Capsicum: 8.9,
    Rice: 1.5,
    milk: "Milk_Point"
}

let count_items = 0;

for (let val in grocery) {
   // Check if the value inside the item is a number
   if (typeof(grocery[val]) == "number") {
    count_items = count_items + 1;
   }
}

console.log(count_items); 
// Output will be 4 because there are 4 numbers!
```

---

## What I Learned From This

* How to use a `for...in` loop to go through an object key by key.
* How to use `grocery[val]` to get the actual value inside the key.
* Using `typeof()` to check if something is a number or a string.
* Using a counter variable (`count_items`) to keep track of the total.

---

## How to Run It

You can just copy this code and paste it right into your browser console (Press F12, go to Console), or run it using Node.js in your terminal:
```bash
node script.js
```
