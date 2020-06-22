let inputStr = prompt("Enter senquence names");
let name=inputStr.split(",").map(x=>`<${x}>`);
alert(`${inputStr} => ${name}`);    