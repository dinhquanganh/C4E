let all= [
        {
            name: "Xiaomi charger 20000mAh ",
            brand : "Xiaomi",
            price: 482,
            color: "White",
            category: "charger"
        },
        {
            name: "Vsmart active 3",
            brand : "Vsmart",
            price: 4300,
            color: "Green",
            category: "phone"
        },
        {
            name: "Iphone X 128GB",
            brand : "Apple",
            price: 15350,
            color: "Black",
            category: "phone"
        },
        {
            name: "Samsung galaxy S7",
            brand : "SamSung",
            price: 3260,
            color: "Red",
            category: "phone"
        }
]
//
for (let i in all) {
    i=Number(i);
    console.log(`#${i+1}. ${all[i].name}`);
    console.log(`Price: ${all[i].price}`);
}

//
let inputPoss=Number(prompt('Enter product possition?'));

console.log(all[inputPoss-1]);

let inputCat=prompt('Enter your category?');
for (i in all) {
    i=Number(i);
    if (all[i].category== inputCat) {
        console.log(`#${i+1}. ${all[i].name}`);
        console.log(`Price: ${all[i].price}`);
    }
}
//
all[0].providers= 'Fpt Store';
all[1].providers= 'The gioi di dong';
all[2].providers= 'Viettel store';
all[3].providers= 'The goi di dong, Viettel store';

all.forEach((phone) =>{
    console.log(`${phone.name}`);
    console.log(`Price: ${phone.price}`);
    console.log(`Providers: ${phone.providers}`);
    console.log('-------------------------------------')
})

//

let inputProvid=prompt('Enter Provider?');
for (i in all) {
    i=Number(i);
    if (all[i].providers== inputProvid) {
        console.log(all[i]);
    }
}






