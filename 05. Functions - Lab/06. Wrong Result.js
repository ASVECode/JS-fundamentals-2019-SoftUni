function wrongResult(numOne, numTwo, numThree) {
    if (numOne >= 0 && numTwo >= 0 && numThree >= 0) {
        return 'Positive';
    } else if (numOne < 0 && numTwo < 0 && numThree < 0) {
        return 'Negative';
    } else if (numOne > 0 && numTwo > 0 && numThree < 0) {
        return 'Negative';
    } else if (numOne > 0 && numTwo < 0 && numThree > 0) {
        return 'Negative';
    } else if (numOne < 0 && numTwo > 0 && numThree > 0) {
        return 'Negative';
    } else {
        return 'Positive';
    }
};
console.log(wrongResult(-1, 0, 0))