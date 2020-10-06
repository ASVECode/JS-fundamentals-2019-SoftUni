function storeProvision(currentStock, orderedProducts) {
    let currentStockLength = currentStock.length;
    for (let i = 0; i < orderedProducts.length; i += 2) {
        let productO = orderedProducts[i];
        orderedProducts[i + 1] = Number(orderedProducts[i + 1]);
        for (let j = 0; j < currentStockLength; j += 2) {
            currentStock[j + 1] = Number(currentStock[j + 1]);
            if (productO == currentStock[j]) {
                currentStock[j + 1] += orderedProducts[i + 1];
            }
        }
        if (!currentStock.includes(productO)) {
            currentStock.push(productO);
            currentStock.push(orderedProducts[i + 1])
        }
    }
    for (let i = 0; i < currentStock.length - 1; i += 2) {
        console.log(`${currentStock[i]} -> ${currentStock[i + 1]}`)
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);