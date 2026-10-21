let a ="naman";
let g="";
let n=a.length;
for(let i=n-1;i>=0;i--){
    g=g+a[i];

}
if(a==g){
    console.log("pallindrome");
}
else{
    console.log("not pallindrome");
}