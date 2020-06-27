let inputStr= prompt('Input number (,)').split(',').map(Number);
let max =0;
let x=0;
let y=0;
    for(let i=0;i<inputStr.length-1;i++) {
        for(let j=i+1;j<inputStr.length;j++) {
            if(max<Math.abs(inputStr[i]-inputStr[j])) { 
                max=Math.abs(inputStr[i]-inputStr[j]);
                x=inputStr[i];
                y=inputStr[j];
            }
        }
    }
console.log(`Max difference = ${max} (of ${x} and ${y})`);