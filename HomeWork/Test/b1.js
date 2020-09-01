let inputArray=prompt('inputArray,separated by commas (,)').split(',').map(Number);
let niceArray=[];
function check(x, y) {
    return Math.log(y) / Math.log(x);
}
for(i=0; i<inputArray.length; i++) {
    for(let j=2; j<=Math.sqrt(inputArray[i]).toFixed(0); j++) {
        if (inputArray[i] % j==0) {
            let fix= check(j,inputArray[i]).toFixed(1);
            console.log(Number.isInteger(fix));
            if(Number.isInteger(check(j,inputArray[i])) == true) {
                niceArray.push(inputArray[i]);
                break;
            }
        }
}
}

console.log(niceArray);