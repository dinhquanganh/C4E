let n= Number(prompt('Input N=?'));
let inputStr= prompt('Input number (,)').split(',');
let newArr=[];
for (let i=0; i<n; i++) {
    if (i<inputStr.length) {
        newArr[i]=inputStr[i];
    } else {
        console.log('n lon hon so phan tu cua mang ban vua nhap');
        break;
    }
}
console.log(newArr);