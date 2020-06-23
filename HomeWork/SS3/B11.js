let inputNum = prompt("Enter senquence of Number");
let newNum=inputNum.split(",").map(Number).filter(x => x % 2 == 1);
// newNum = newNum.filter(x => x % 2 == 1);
alert(`${newNum}`);
