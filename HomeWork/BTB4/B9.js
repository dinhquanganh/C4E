let inputStr= prompt('Input number (,)').split(',').map(Number);
console.log(inputStr)
let repeatN =0;
let arrN=[];
    for(let i=0;i<inputStr.length;i++) {
        let t= inputStr.filter(x => x == inputStr[i]).length;
        if (repeatN< t) {
            arrN=[];
            arrN.push(inputStr[i]);
            repeatN=t;
        } else if (repeatN==t){-
            arrN.push(inputStr[i]);
        }
    }
console.log(...new Set(arrN));
