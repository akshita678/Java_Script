

let n = prompt("Enter sentence");
c=n.length
let s="";
for(let i=0;i<c;i++){
    if(n[i]==" "){
        continue;
   
}
else{
    s=s+n[i];
}

}
console.log("sentence without space ",s);
