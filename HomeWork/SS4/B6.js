let  inp= prompt('Input string need delete "$"?');

function remove_dollar_sign(inputStr){
    let i=0;
    while (i<inputStr.length) {
        if (inputStr[i]=== "$") {
            inputStr= inputStr.replace("$",'');
        } else { 
            i++
        }
    }
    return inputStr;
}
console.log(remove_dollar_sign(inp));