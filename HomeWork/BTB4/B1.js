let x = Number(prompt('Enter x=?'));
let y = Number(prompt('Enter y=?'));
let arr=[];
let j=0;
for (let i=x; i<=y;i+=2 ){
    arr[j]=i;
    j++;
}
console.log(arr);
let sum = arr.reduce(function(a, b) {
    return a + b;
}, 0);

let num = arr.length;
let tbc = sum/num;
console.log(tbc);