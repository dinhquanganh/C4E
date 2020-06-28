//Write a function that takes 2 numbers as arguments and print out sum of them (note: has arguments, no return)
function sum(a,b) {
    return a+b;
}

let inpNum= prompt('Input two Number (,)').split(',').map(Number);
console.log(sum(inpNum[0],inpNum[1]));