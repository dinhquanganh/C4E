let inputStr= Number(prompt('Input number (,)').split(','));
let repeatN =0;
let arrN=[];
let x=0;
let y=0;
    for(let i=0;i<inputStr.length;i++) {
        let t= inputStr.filter(x => x === inputStr[i] ).length;
        if (repeatN< t) {
            for (j=0; j<arrN.length; j++) {
                if (inputStr[i]==arrN[j]) {
                    break;
                } else {
                    
                }
            }
            repeatN=t;
        }
    }
        