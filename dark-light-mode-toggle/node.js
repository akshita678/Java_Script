// Create a toggle btn which switches dark to light 
let btn=document.querySelector("button");
let mode="light";

btn.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        document.querySelector("body").style.backgroundColor="Black"
        document.querySelector("body").style.color="White"
    }
else{
    mode="light";
    document.querySelector("body").style.backgroundColor="White"
        document.querySelector("body").style.color="Black"
}
console.log(mode)
})  