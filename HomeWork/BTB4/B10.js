let strInput= prompt('Input string?');
let check= strInput.split('').reverse().join('');
if (check === strInput) {
    alert("Correct");
} else {
    alert ("False");
}