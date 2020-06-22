let myS = [5,7,300,90,24,50,75];

let max = Math.max(...myS);

let a = myS.indexOf(max);
    myS[a] = 8;

for (let i=0; i<myS.length; i++) {
    myS[i]+=50;
}

console.log(`Hello, my name is Quang Anh and here is my sheep size:
    ${myS}` );
console.log(`My biggest sheep has size ${max}, let's shave it`);

console.log(`After shearing, here is my flock
    ${myS}`);
for (i=1; i<=3; i++) {
    console.log(`MONTH ${i}:
    One month has, passed, my sheeps have grown, here are their sizes 
    ${myS}`);
    if (i<3) { 
        max = Math.max(...myS);
        console.log(`My biggest sheep has size ${max}, let's shave it`);
        a = myS.indexOf(max);
        myS[a] = 8;
        console.log(`After shearing, here is my flock
        ${myS}`);
        for (let j=0; j<myS.length; j++) {
            myS[j]+=50;
        }
    } else {
        sum = myS.reduce(function(a, b) {
            return a + b;
        }, 0);
        console.log(`My flock has size in total: ${sum}`);
        console.log(`I would get ${sum} * 2$ = ${sum*2} $`)
    }
}

