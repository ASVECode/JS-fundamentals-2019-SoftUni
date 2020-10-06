function solve(numbers) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let num of numbers) {
        if (num % 2 == 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }
    console.log(sumEven - sumOdd);
}

solve([3, 5, 7, 9])