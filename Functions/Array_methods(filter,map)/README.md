# 📊 Array Transformations: Filter & Map

A two-part JavaScript project demonstrating how to use modern array methods to extract specific data elements and transform arrays without changing  the original source array .

## 📝 Key Concepts Explored

### ✂️ Array Filtering (`.filter()`)
I learned how to use the **`.filter()`** method to screen an array based on a specific condition. 
* **How it works:** It runs a callback function on every item and evaluates a condition (`val > 70`). If the condition returns `true`, the element is saved; if it returns `false`, it gets dropped.
* **Result:** It creates a brand-new array containing only the elements that passed the test.

### 🗺️ Array Mapping (`.map()`)
I learned how to use the **`.map()`** method to transform every item inside an array.
* **How it works:** Unlike `.forEach()`, which just executes actions, `.map()` takes the value returned by the callback function (`val * 2`) and uses it to populate a brand-new array of identical length.
* **Result:** It provides an elegant way to modify datasets cleanly without changing the values in the original array.

---

## 💻 The Code

```javascript
// ==========================================
// PART A: Filtering Marks (> 70) 📊
// ==========================================
let marks =;

// .filter() creates an array containing only marks above 70
const answer = marks.filter((val) => {
    return val > 70;
});

console.log("Marks greater than 70:", answer); 
// Output: [89, 99, 78, 98]


// ==========================================
// PART B: Doubling Values with Map 🗺️
// ==========================================
let a =;

// .map() creates a brand new array with each value doubled
let nw = a.map((val) => {
    return val * 2;
});

console.log("Original Array:", a);  // [12, 3, 4, 56, 78] (Untouched!)
console.log("Doubled Array:", nw);  // [24, 6, 8, 112, 156]
```

---

## 🚀 How to Run It

1. Open your web browser's Developer Tools (Right-click -> **Inspect** or press `F12`). 🛠️
2. Click on the **Console** tab. 🖥️
3. Paste the complete code snippet above and hit **Enter**. 🔥
