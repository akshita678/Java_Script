# My First Space Remover Project! 😄

Hey everyone! This is a simple JavaScript program I made to take a sentence from the user and remove all the spaces from it. 

## What it does
* It asks you to type a sentence using a popup box.
* It looks at every single letter using a `for` loop.
* If it sees a space, it skips it.
* If it's a letter, it adds it to a new secret word.
* Finally, it prints out the result in the console!

## The Code

```javascript
let n = prompt("Enter sentence");
c=n.length // counts the length of sentence 
let s=""; 
for(let i=0;i<c;i++){
    if(n[i]==" "){
        continue;   // skips the space 
   
}
else{
    s=s+n[i]; // if not space then add it to the empty string
}

}
console.log("sentence without space ",s);
```

## How to use it on your computer

1. Open Google Chrome or any browser.
2. Right-click anywhere and click **Inspect** (or press F12).
3. Click on the **Console** tab at the top.
4. Copy my code and paste it right there, then press **Enter**.
5. Type your sentence in the popup box and see the magic in the console!
