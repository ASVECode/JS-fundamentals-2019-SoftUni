function addAndSubstract(num1, num2, num3) {
    let sum = (a, b) => a + b;
    let subtract = (sum, c) => sum - c;

    return subtract(sum(num1, num2), num3);
}
console.log(addAndSubstract(23, 6, 10));