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

