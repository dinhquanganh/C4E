let inputStr = prompt("Enter senquence names");
let name=inputStr.split(",").map((name) =>{
    return `<${name}>`});
// neu chi co 1 lenh thi chi can .map(name => `<${name}`)
alert(`${inputStr} => ${name}`.join(' '));  
// join() :nối các phần tử trong array
   