# JavaScript Array Manipulation

A simple JavaScript solution to manipulate an array of tech companies based on a set of requirements.

## 💻 Code

```javascript
let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// 1. Remove the first company ("Bloomberg")
company.shift(); 

// 2. Remove "Uber" and add "Ola" in its place
// Note: Index is 1 because shift() moved all elements down by one position
company.splice(1, 1, "Ola");

// 3. Add "Amazon" to the end
company.push("Amazon");

console.log(company);
// Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]
```

## 🔍 The Splice Mistake Explained

### The Error
I originally wrote `company.splice(2, 1, "Ola")`. This accidentally removed `"Google"` instead of `"Uber"`.

### Why it happened
In the starting array, `"Uber"` sits at **index 2**:
* Index 0: `"Bloomberg"`
* Index 1: `"Microsoft"`
* **Index 2: `"Uber"`**

However, running `company.shift()` removes `"Bloomberg"` and **shifts all remaining elements to the left by 1 position**. 

### The Shift Effect
* Index 0 becomes: `"Microsoft"`
* **Index 1 becomes: `"Uber"`** (Moved down from index 2)
* Index 2 becomes: `"Google"`
## Key Learnings : 
ARRAY IS A MUTABLE DATATYPE , some methods like shift() makes changes in original array whereas some methods like concat() make  a shallow copy of array and return it 

To fix it, I updated the code to use index **1** (`company.splice(1, 1, "Ola")`) to correctly target and replace `"Uber"`.
