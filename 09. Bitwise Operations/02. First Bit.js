function firstBit(num) {
    let shiftedValue = num >> 1;
    return shiftedValue & 1;
}
console.log(firstBit(51))