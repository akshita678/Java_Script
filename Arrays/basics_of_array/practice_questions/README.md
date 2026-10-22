# 🚀 My JavaScript Array Practice Questions

Hey! This is a file where I am practicing basic math questions using JavaScript arrays to build up my logic skills. 🇮🇳

---

## 🧠 What I Did in This File

### 1. Finding Average Marks
* **The Question:** Take this array `[85, 97, 44, 37, 76, 60]` and find the average score.
* **How I Solved It:** 
  1. I made a `total` variable starting at `0`.
  2. I used a cool `for...of` loop to go through every single mark and add it into the `total`.
  3. Finally, I divided the `total` by `marks.length` (which is `6` items) to print the average!

### 2. 10% Discount Calculator
* **The Question:** I have an array of 5 item prices: `[250, 645, 300, 900, 50]`. Everything has a 10% discount. Find the discount amount for each.
* **How I Solved It:**
  1. I used a normal `for` loop with index `i` to look at each price one by one.
  2. I divided the price by `10` to figure out what 10% equals (`price[i] / 10`).
  3. I used template literals (the backtick `` ` `` things) to log the old price and the new discount side-by-side.

---

## 💻 What the Console Shows

When I run this file using Node.js, the terminal prints out this exact math:

```text
Average is 66.5
 the initial price : 250 discounted :25 
 the initial price : 645 discounted :64.5 
 the initial price : 300 discounted :30 
 the initial price : 900 discounted :90 
 the initial price : 50 discounted :5 
```

---

## 🛠️ How I Run My Code

Open the terminal inside this folder and run:
```bash
node filename.js
```
