function binaryDigitsCount(d, b) {
    let digitToBinary = [];
    while (d > 0) {
        digitToBinary.push(d % 2);
        d = Math.floor(d / 2);
    }
    let counter = 0;
    for (let i = 0; i < digitToBinary.length; i++) {
        if (digitToBinary[i] == b) {
            counter++;
        }
    }
    return counter;
}
console.log(binaryDigitsCount(15, 1))
