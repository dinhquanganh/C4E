let arrNumber= [1,2,4,6,[3,5],[10,12]];
let arrNew= arrNumber.join(',').split(',').map(Number);
let sum = arrNew.reduce(function(a, b) {
    return a + b;
},0);
console.log(sum);
for (i in arrNew) {
    arrNew[i]+=10;
}
console.log(arrNew);
