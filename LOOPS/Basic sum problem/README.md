# Multiples of 3 and 5 Sum Calculator

**This project contains a simple JavaScript program that finds the sum of all numbers below 1000 that can be divided evenly by 3 or 5.** 

This is a classic programming challenge often used to practice basic coding logic, loops, and conditional statements.

## 📖 The Problem
If we look at all the whole numbers below 10 that are multiples of 3 or 5, we get **3, 5, 6, and 9**. If we add them together (3 + 5 + 6 + 9), we get **23**. 

This script does the exact same thing, but it calculates the total for all numbers all the way up to **1000**.

## 💻 How the Code Works
The program uses three fundamental programming concepts:
* **Variables:** Stores the final running total.
* **For Loop:** Counts up from 1 to 999, checking one number at a time.
* **Modulo Operator (`%`):** Checks if a number leaves a remainder of 0 when divided by 3 or 5 (which means it is a multiple).

## 🚀 How to Run This on Your Computer

You don't need any complex tools to see this code in action. You can run it right inside your web browser!

### Method 1: Using Your Web Browser (Easiest)
1. Open any web browser (like Google Chrome, Microsoft Edge, or Safari).
2. Right-click anywhere on the page and select **Inspect** (or press `F12` on Windows / `Cmd + Option + I` on Mac).
3. Click on the **Console** tab at the top of the panel that pops up.
4. Copy the JavaScript code from your script file.
5. Paste it directly into the console and hit **Enter**.

### Method 2: Using Node.js (Terminal)
If you want to practice using your terminal/command prompt:
1. Make sure you have [Node.js](https://nodejs.org) installed on your computer.
2. Download or clone this repository to your computer.
3. Open your terminal, navigate to the folder where the files are stored, and type:
   ```bash
   node index.js
   ```

## 📋 Expected Output
When you run the script, it will print this exact result to your screen:
```text
The sum of all multiples of 3 or 5 below 1000 is: 233168
```

## 🤝 Connect & Learn
Since I am a first-year student learning the ropes, feel free to open an issue or reach out if you have tips on how to optimize this code or want to share alternative solutions!
