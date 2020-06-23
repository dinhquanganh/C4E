let ip= prompt('Enter the consequence of Number, separated by commas (,)');
let inputN= ip.split(",").map(Number);
let sum=0;
for (let i = 0;i<inputN.length;i++){
    sum+=inputN[i];
}
alert(`The sum of them ${sum}`);