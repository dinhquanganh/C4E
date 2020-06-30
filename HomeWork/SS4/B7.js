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

string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}
