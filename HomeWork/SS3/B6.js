let ip= prompt('Enter the consequence of number, separated by (,)');
let inputN = [];
inputN = ip.split(",");
let min = Math.min(...inputN)
alert(`The smallest number is ${min}`);