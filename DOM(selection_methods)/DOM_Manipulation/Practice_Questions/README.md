# My DOM Practice Project

Hey! This is my practice project where I am learning how to use JavaScript to change things on a webpage (DOM manipulation). I learned how to make a new button using JS and how to add a CSS class without deleting the old one.

## My Code Files

### index.html
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
    <h2 class="student">"Coding Practice"</h2>
    <p class="para">Science is all around us</p>
   
    <script src="node.js"></script>
</body>
</html>
```

### style.css
```css
.para{
    color:blue;
    background-color: aqua;
}

.newpara{
    color:yellow;
    background-color: brown;
}
```

### node.js
```javascript
// 1. creating a new button and putting it at the top of body
let bdy=document.querySelector("body");
let nbt=document.createElement("button");
nbt.innerText="CLICK ME !!";
nbt.style.backgroundColor="red";
nbt.style.color="white";
bdy.prepend(nbt);

// 2. adding a new class to my p tag
let p=document.querySelector("p");

// p.setAttribute("class","newpara"); // told by teacher that this deletes old class!

// using classlist instead so both classes stay
p.classList.add("newpara"); 
```

## What I Learned
* `prepend()` puts the new element at the very top inside the tag.
* `setAttribute` overwrites the whole class string, which can ruin old styling.
* `classList.add()` is much better because it just appends the new class to the list!
