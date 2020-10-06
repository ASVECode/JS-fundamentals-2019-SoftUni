function solve(numbers) {
    let sumEven = 0;
    for (let num of numbers) {
        if (num % 2 == 0) {
            sumEven += Number(num);
        }
    }
    console.log(sumEven);
}


solve(['1', '2', '3', '4', '5', '6'])