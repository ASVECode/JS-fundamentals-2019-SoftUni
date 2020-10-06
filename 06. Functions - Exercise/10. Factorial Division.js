function factorialDivision(num1, num2) {
    function factorialize(num) {
        let result = num;
        if (num === 0 || num === 1)
            return 1;
        while (num > 1) {
            num--;
            result *= num;
        }
        return result;
    }

    let FNum1 = factorialize(num1);
    let FNum2 = factorialize(num2);
    let result = (FNum1 / FNum2).toFixed(2);
    return result;
}
console.log(factorialDivision(6, 2))