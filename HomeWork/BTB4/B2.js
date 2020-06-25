let str= prompt('Enter the consequence of Number, separated by commas (,)');
let strNum= str.split(",").map(Number);
let strNumC= strNum.filter(x => x%2==0);
let strNumL= strNum.filter(x => x%2==1);

let sumC = strNumC.reduce(function(a, b) {
    return a + b;
}, 0);

let sumL = strNumL.reduce(function(a, b) {
    return a + b;
}, 0);
console.log(`Tong cac so chan : ${sumC}`);
console.log(`Tong cac so le: ${sumL}`);