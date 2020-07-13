const cours = [
{
    STT: 1,
    name: 'HTML',
    Complete: false,
},
{
    STT: 2,
    name: 'CSS',
    Complete: false,
},
{
    STT: 3,
    name: 'Basics of JavaScript',
    Complete: false,
},
{
    STT: 4,
    name: 'Node Package Manager (npm)',
    Complete: false,
},
{
    STT: 5,
    name: 'Git',
    Complete: false,
}
];

console.log(`Hi there, this is your learning tasks to front-end developer career:`)
cours.forEach((cours) => {
    for(key in cours){
        console.log(`${key}: ${cours[key]}`);
    }
    console.log(`------------------------------------`);
});
while(true){
const command = prompt(`Enter your command (New, Delete, Update, Complete,E)`);
if(command == 'new'){
    const newCours = prompt(`Enter new task:`);
    let len = cours.length + 1;
    const newObj = {
        STT: len, 
        name: newCours,
        Complete: false,
    };
    cours.push(newObj);
    console.log(` `);
    console.log(`--NEW--`);
    console.log(`Hi there, this is your learning tasks to front-end developer career:`)
    cours.forEach((cours) => {
        for(key in cours){
            console.log(`${key}: ${cours[key]}`);
        }
        console.log(`------------------------------------`);
    });
}
else if(command == 'update'){
    const number = prompt(`Enter position:`);
    const newName = prompt(`Enter new title`);
    cours.forEach((cour) => {
        if(number == cour.STT){
            cour.name = newName;
        }
    });
    console.log(` `);
    console.log(`--UPDATE--`);
    console.log(`Hi there, this is your learning tasks to front-end developer career:`)
    cours.forEach((cours) => {
        for(key in cours){
            console.log(`${key}: ${cours[key]}`);
        }
    console.log(`------------------------------------`);
    });
}
else if(command == 'complete'){
    const num = prompt(`Enter position:`);
    cours.forEach((cour) => {
        if(num == cour.STT){
            cour.Complete = true;
        }
    });
    console.log(` `);
    console.log(`--COMPLETE--`);
    console.log(`Hi there, this is your learning tasks to front-end developer career:`)
    cours.forEach((cours) => {
        for(key in cours){
            console.log(`${key}: ${cours[key]}`);
        }
        console.log(`------------------------------------`);
    });
}
else if(command == 'delete'){
    const num = prompt(`Enter position:`);
    cours.forEach((cour) => {
        if(num == cour.STT){
            cours.splice(num-1, 1);
        }
    });
    for(let i = num; i <= cours.length; i ++){
        cours[i-1].STT = i;
    }
    console.log(` `);
    console.log(`--DELETE--`);
    console.log(`Hi there, this is your learning tasks to front-end developer career:`)
    cours.forEach((cours) => {
        for(key in cours){
            console.log(`${key}: ${cours[key]}`);
        }
        console.log(`------------------------------------`);
    });
}
else if(command == 'e')
break;
else alert(`Khong tim thay chuc nang!!`);
}