//input array
const a=[];
let n= Number(prompt('Nhap so phan tu cua mang n=?'));
for (i=0; i<n; i++){
    a[i]=prompt(`a[${i+1}] = ?`);
}

console.log(...a);