const manageS=['Jean','T-Shirt','Socks'];
console.log('Menu');
for (i=0; i<manageS.length; i++) {
            console.log(`${i+1}. ${manageS[i]}`);
        };
console.log('----------------------------------------');
let kt=true;
while (kt) {
    let inputST=prompt('Hi there, welcome to shop admin panel, what do you want(C/R/U/D)?');
    if (inputST=='c' || inputST=='C') {
        let inp=prompt('Enter the name of the new item');
        manageS.push(inp);
        alert('Done');
        for (i=0; i<manageS.length; i++) {
            console.log(`${i+1}. ${manageS[i]}`);
        }
        console.log('----------------------------------------');
    } else if (inputST=='r' || inputST=='R') {
        for (i=0; i<manageS.length; i++) {
            console.log(`${i+1}. ${manageS[i]}`);
        }
        console.log('----------------------------------------');
    } else if (inputST=='u' || inputST=='U') {
        let inp=Number(prompt('Enter the positon you want to update'));
        let st= prompt('Enter the new name');
        manageS[inp-1]=st;
        for (i=0; i<manageS.length; i++) {
            console.log(`${i+1}. ${manageS[i]}`);
        }
        console.log('----------------------------------------');
    } else if (inputST=='d' || inputST=='D') {
        let inp=Number(prompt('Enter the positon you want to update'));
        manageS.splice(inp-1,1);
        for (i=0; i<manageS.length; i++) {
            console.log(`${i+1}. ${manageS[i]}`);
        }
        console.log('----------------------------------------');        
    } else {
        alert('This command is not supported');
        kt=false;
    }
}