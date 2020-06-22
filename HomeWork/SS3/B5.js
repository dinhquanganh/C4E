let ip= prompt('Enter the consequence of Number, separated by commas (,)');
let inputN = [];
inputN= ip.split(",");
let sum=0;
for (let i =0;i< inputN.length;i++){
    sum+=Number(inputN[i]);
}
alert(`The sum of them ${sum}`);