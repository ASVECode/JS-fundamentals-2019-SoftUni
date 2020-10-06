function numModification(num) {
    let numStr = num + '';

    while (true) {
        let sum = 0;
        for (let digit of numStr) {
            sum += Number(digit);
        }
        if (sum / numStr.length < 5) {
            numStr += 9;
        } else {
            return numStr;
        }
    }
}
console.log(numModification(5853))