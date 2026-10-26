// create  a new button , give it text click me ,bg color=red,text=white insert the button as the first element inside the body tag 
let bdy=document.querySelector("body");
let nbt=document.createElement("button");
nbt.innerText="CLICK ME !!";
nbt.style.backgroundColor="red";
nbt.style.color="white";
bdy.prepend(nbt);

//create a p tag in html give it styling and class then create a class in CSS and append this new one into old one 
let p=document.querySelector("p");
p.setAttribute("class","newpara"); // this overwrites our prev class 
// new concept -- classlist 
p.classList.add("newpara");