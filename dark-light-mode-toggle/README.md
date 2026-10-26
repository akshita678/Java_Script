# Dark/Light Mode Toggle Button

A simple, lightweight JavaScript project that toggles the web page background and text colors between Dark Mode and Light Mode when a button is clicked.

## 🚀 Features
* **State Management:** Tracks the current mode status (`light` or `dark`).
* **Dynamic Styling:** Inline modification of `<body>` styles (`backgroundColor` and `color`).
* **Console Logging:** Prints the active mode status to the developer console for easy debugging.

## 📁 Project Structure

### 1. HTML (`index.html`)
The structure contains a button to trigger the toggle and a heading element.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM PRACTICE</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <button>Click me!</button>
    <h3>Changing modes in website</h3>
    
    <script src="node.js"></script>
</body>
</html>
```

### 2. JavaScript (`node.js`)
The logic uses an event listener to intercept button clicks and conditionally update the DOM styles.

```javascript
let btn = document.querySelector("button");
let mode = "light";

btn.addEventListener("click", () => {
    if (mode === "light") {
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "Black";
        document.querySelector("body").style.color = "White";
    } else {
        mode = "light";
        document.querySelector("body").style.backgroundColor = "White";
        document.querySelector("body").style.color = "Black";
    }
    console.log(mode);
});
```

## 🛠️ How It Works
1. The script grabs the `<button>` element using `document.querySelector()`.
2. A tracker variable `mode` is initialized to `"light"`.
3. An explicit click event listener triggers an `if/else` check:
   * **Light to Dark:** If the tracker is `"light"`, it updates the background to black, changes the text to white, and flips the tracker to `"dark"`.
   * **Dark to Light:** If the tracker is `"dark"`, it reverts the background to white, changes the text to black, and flips the tracker back to `"light"`.
