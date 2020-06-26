let arrNumber= [1,2,4,6,[3,5],[10,12]];
let sum = arrNumber.reduce(function(a, b) {
    return a + b;
},0);
console.log(sum);
