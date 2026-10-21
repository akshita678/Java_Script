let char = prompt("Enter character to remove:");
let rep = prompt("Enter character to replace the char with:");
let string1 = prompt("Enter string:");

// Check if the character actually exists in the string first
if (string1.includes(char)) {
    let result = string1.replace(char, rep);
    console.log("New string:", result);
} else {
    console.log("char not found");
}
