function catalogue(input) {
    input.sort((a, b) => a.localeCompare(b));
    let products = [];
    input.forEach(line => {
        let parts = line.split(' : ');
        let product = {};
        product.name = parts[0];
        product.price = parts[1];
        products.push(product);
    });
    let firstLetter = products[0].name[0];
    console.log(firstLetter)
    console.log(`  ${products[0].name}: ${products[0].price}`)
    for (let i = 1; i <= products.length; i++) {
        if (products[i] == products[products.length]) {
            break;
        }
        if (products[i].name[0] == firstLetter) {
            console.log(`  ${products[i].name}: ${products[i].price}`)
        } else if (products[i].name[0] == products[i - 1].name[0]) {
            console.log(`  ${products[i].name}: ${products[i].price}`)
        }
        else {
            console.log(products[i].name[0]);
            console.log(`  ${products[i].name}: ${products[i].price}`)
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'F : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])