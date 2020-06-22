let inputStr = prompt("Enter senquence of names");
let name=inputStr.split(",").map(x=>`<${x}>`);
alert(`${inputString} => ${name}`);