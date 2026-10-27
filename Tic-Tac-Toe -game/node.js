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
