let string=prompt('Input String?').split(' ');
for (let i=0; i<string.length; i++ ) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
}
string=string.join(' ')
console.log(string);