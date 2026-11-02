# Rock Paper Scissors Game

A clean, modern, and responsive web-based **Rock Paper Scissors Game** built using semantic HTML5 and custom CSS3. This is a  mini game that I built while learning and practicing all the knowledge of JavaScript that I have acquired till date .

## 🚀 Features

- **Semantic HTML5 Structure**: Organized layout containing a header, game choices, a live scoreboard, and a status message area.
- **Modern Flexbox Layout**: Centered and neatly spaced gameplay choices and scoreboard using CSS Flexbox.
- **Custom Aesthetic Styling**: A beautiful aesthetic color palette featuring rich plum accents (`#612940`) against a soft cream background (`#FDECEF`).
- **Responsive Images**: Game choice images are optimized using `object-fit: cover` and styled with smooth rounded corners (`border-radius`).
- **Live Scoreboard Logic**: Fully active user selection events dynamically computing computer actions, tracking runtime metrics, and shifting background styles.

## 📁 Project Structure

```text
├── index.html   # The structural layout of the game
├── style.css    # Custom styling and visual presentation
├── node.js      # JavaScript file containing game logic
├── rock.PNG     # Rock gesture image
├── paper.PNG    # Paper gesture image
└── scissors.PNG # Scissors gesture image
```

## 🛠️ Built With

- **HTML5**: For core layout structures and elements.
- **CSS3**: For custom styling, typography alignment, and Flexbox positioning.
- **JavaScript**: For choice listeners, randomized calculations, and score mutations.

## 💻 Getting Started

To view and interact with the user interface locally on your computer, follow these simple steps:

1. **Download the project files** and ensure they are all saved together in the same folder.
2. Make sure you have your choice images (`rock.PNG`, `paper.PNG`, `scissors.PNG`) placed in the same directory.
3. Simply **double-click the `index.html` file** to open it instantly in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox).

## 📝 Project Source Files

### HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rock paper scissors game</title>
    <link rel="stylesheet" href="style.css"> 

</head>

<body>
    <h1>Rock Paper Scissors</h1>
    <div class="choices">
        <div class="choice" id="rock">
            <img src="./rock.PNG">
        </div>
         <div class="choice" id="paper">
            <img src="./paper.PNG">
        </div>
         <div class="choice" id="scissors">
            <img src="./scissors.PNG">
        </div>
    </div>
    <div class="score-board">
        <div class="score" >
        <p id="user">0</p>
        <p>User</p>
        </div>
        <div class="score"  >
        <p id="computer">0</p>
        <p>Computer</p>
        </div>
    </div>
    <div class="message">
        <p id="message">Play your move</p>
    </div>
   
    
    
    <script src="node.js"></script>
</body>
</html>
```

### CSS (`style.css`)
```css
*{
    margin: 0;
    padding: 0;
    
}
body{
    background-color:#FDECEF;
}
h1{
    background-color:#612940;
    color:white;
    height: 4rem;
    text-align: center;
}
.choice.hover{
    cursor: pointer
}
.choice{
    height:170px;
    width: 170px;

}
img{
    height: 150px;
    width: 150px;
    object-fit: cover;  /*prevents shrinking of images basically supports quality */
    border-radius: 1rem; 
}
.choices{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2rem;
    margin-top: 3rem;
} 
.score-board{
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 1.5rem;

}
#user{
    font-weight: bold;
    font-size: 2.5rem;

}
#computer{
    font-weight: bold;
    font-size: 2.5rem;
}
#message{
    
    background-color: #612940; 
    color: white ;
    margin-top: 1rem;
    font-size: 2rem;
    text-align: center; /* hightlights only the content of msg */
    display: inline-block;
    padding: 1.3rem;
    border-radius: 1rem;
}
```

### JavaScript (`node.js`)
```javascript
let userScore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const user=document.querySelector('#user');
const comp=document.querySelector("#computer")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log('choice clicked')
        const userchoiceId=choice.getAttribute("id");
       
        playgame(userchoiceId)

    })
})

const compchoice=()=>{
    let options=["rock","scissors","paper"] 
    let pos=Math.floor(Math.random()*3);
    return options[pos];
}


const playgame=(userchoiceId)=>{
   const usermove=userchoiceId;
  const compmove=compchoice();
  console.log(usermove,compmove)
  if(usermove=="rock"&&compmove=="rock"){
    console.log("tie");
    msg.innerText="its a tie";
  }
  else if(usermove=="rock"&&compmove=="paper"){
    console.log("comp wins");
    msg.innerText="comp wins";
    computerscore++;
    msg.style.backgroundColor="Red"
  }
 else if(usermove=="rock"&&compmove=="scissors"){
    console.log("human wins");
    msg.innerText="human wins";
    userScore=userScore+1;
     msg.style.backgroundColor="Green"
  }
  else if(usermove=="paper"&&compmove=="paper"){
    console.log("tie");
    msg.innerText="tie";
  }else if(usermove=="paper"&&compmove=="scissors"){
    console.log("comp wins");
    msg.innerText="comp wins";
     computerscore=computerscore+1;
     msg.style.backgroundColor="Red"
  }
  else if(usermove=="paper"&&compmove=="rock"){
        console.log("human wins");
    msg.innerText="human wins";
     userScore=userScore+1;
msg.style.backgroundColor="Green"}
else if(usermove=="scissors"&&compmove=="scissors"){
    console.log("tie");
    msg.innerText="tie";
  }else if(usermove=="scissors"&&compmove=="paper"){
    console.log("human wins");
    msg.innerText="huamn wins";
     userScore=userScore+1;
    msg.style.backgroundColor="Green"
  }else if(usermove=="scissors"&&compmove=="rock"){
    console.log("comp wins");
    msg.innerText="comp wins";
     computerscore=computerscore+1;
     msg.style.backgroundColor="Red"
  }
user.innerText=userScore;
comp.innerText=computerscore; // dynamically updates the value 

  }
```

## 🔮 Future Enhancements

- Save high scores using localStorage.
- Add CSS animations for clicked options.

