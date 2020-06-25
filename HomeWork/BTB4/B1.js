let x = Number(prompt('Enter x=?'));
let y = Number(prompt('Enter y=?'));
let inputStr=[];
let j=0;
for (let i=x; i<=y;i+=2 ){
    inputStr[j]=i;
    j++;
}
console.log(inputStr);
let sum = inputStr.reduce(function(a, b) {
    return a + b;
}, 0);

let num = inputStr.length;
let tbc = sum/num;
console.log(tbc);