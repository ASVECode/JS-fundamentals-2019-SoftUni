function listOfProducts(products) {
    let sortedProduct = products.sort();
    let result = '';
    for (let i = 0; i < products.length; i++) {
        result += `${i + 1}.${sortedProduct[i]}\n`
    }
    return result;
}

console.log(listOfProducts(['Potatos', 'Tomatos', 'Onions', 'Apples']))