const ar = [3,4,6,-9,10,-88,2];
let fD = Number(prompt('Enter a number?'));
let find = ar.indexOf(fD);
if (find<0) {
    alert(`${fD} is NOT found in my array`);
} else {
    alert(`${fD} is found in my array at index ${find+1}`);
}

