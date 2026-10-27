# 🕹️ MY FIRST WEB DEV PROJECT: Tic-Tac-Toe Game! 🎉

Welcome to my personal JavaScript learning playground! This is my very first frontend web development project. I built a fully interactive, responsive **Tic-Tac-Toe game** from scratch to learn how HTML, CSS, and JavaScript all work together! ✨

## 📝 Project Description

I built a classic 2-player Tic-Tac-Toe game that runs right in the browser! Here is how the gameplay works:
* **Player 1** starts first as `"O"`.
* **Player 2** goes next as `"X"`.
* When a player clicks a box, it fills up with their letter and automatically locks so nobody can cheat and click it twice! 🔐
* The game constantly checks the board after every turn and pops up an alert window the exact second someone gets 3-in-a-row! 🏆

### Winning Combinations Map

The game checks these exact slot numbers horizontally, vertically, and diagonally to find a winner:
```text
 0 | 1 | 2 
-----------
 3 | 4 | 5 
-----------
 6 | 7 | 8 
```

---

## 💡 How I Built It & My Approach

I split the game logic into three simple steps to keep things clean:
1. **Turn Switcher:** I used a true/false variable called `player0`. If it's true, the box gets an `"O"`, then it flips to false so the next click gets an `"X"`.
2. **Anti-Cheat Lock:** As soon as a box is clicked, I set `box.disabled = true` so the square gets frozen!
3. **Winner Check:** I wrote a custom `checkwinner()` function that runs through my list of winning combos every single time a player takes a turn.

### Project Files

#### 1. The Structure (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>first game</title>
    <link rel="stylesheet" href="style.css"> 
</head>

<body>
    <h1>Tic-Tac-Toe</h1>
    <div class="container">
        <div class="game">
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
            <button class="box"></button>
        </div>
    </div>
    <button id="reset">RESET GAME</button>
    
    <script src="node.js"></script>
</body>
</html>
```

#### 2. The Styles & Colors (`style.css`)
```css
body{
    background-color: teal;
    text-align: center;
    color: white;
}
*{
    margin: 0;
    padding: 0;
}
.container{
height: 70vh;    /* this means that 70% of visible height will be given to conatiner*/
 
    display: flex;  /* this means that all boxes will be in str line*/
    flex-wrap: wrap;/* this means that if theres no space then go in next line*/
justify-content: center;
align-items: center; 
}
.game{
    height:60vh;
    width: 60vh;
    
    display: flex;  /* this means that all boxes will be in str line*/
    flex-wrap: wrap;/* this means that if theres no space then go in next line*/
justify-content: center;
align-items: center;  /* this means that all boxes will come in centre of game div*/
gap: 1vh;}

    

.box{
    height:18vmin;
    width:18vmin;   /* this means vh 's 1% */
border-radius: 1rem;
border:none;
font-size:9vmin ;
color: red;
background-color: palegoldenrod;}

#reset{
    background-color:black;
    color:white;
    height: 10vmin;
    width:20vmin;
    border-radius: 1rem;
    border: none;
}
```

#### 3. The Brains/Logic (`node.js`)
```javascript
let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let player0=true;
const win=[
    [0,1,2],[0,3,6]
,[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        if (player0===true) {
            box.innerText="O";
            player0=false;
            
        }
        else{
           box.innerText="X";
           player0=true;

        }
        box.disabled=true;// this make sures btn isnt clicked twice

        checkwinner();
    })
    
});
const checkwinner=()=>{
    for(pattern of win){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!=""&&pos2!=""&&pos3!=""){
           if(pos1===pos2&&pos2===pos3){
              alert(`winner is ${pos1}`);
           }
        }

    }
}
```

---

## 🛠️ How to Play It On Your Computer

Want to test out my game? It's super easy to get running:

1. Download or clone this folder to your computer.
2. Make sure you keep all three files (`index.html`, `style.css`, and `node.js`) inside the **exact same folder**.
3. Double-click `index.html` to launch it instantly in your web browser, and have fun playing! 🎮🚀
