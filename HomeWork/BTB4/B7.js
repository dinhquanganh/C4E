let n= Number(prompt('Input N=?'));
let inputStr= prompt('Input number (,)').split(',');
let newinputStr=[]; 
for (let i = 0; i < inputStr.length; i += n) {
    smallinputStr = inputStr.slice(i, i+n);
    newinputStr.push(smallinputStr);
}

for (i in newinputStr){
    console.log(newinputStr[i]);
}
