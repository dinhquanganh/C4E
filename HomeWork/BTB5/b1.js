const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
    }

for (let x in product) {
    console.log(x);
}

// x la thuoc tinh (property)

for (let x in product) {
    console.log(product[x]);
}