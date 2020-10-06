function solve(numbers) {
    let totalSum = 0;
    let condensed = [];
    if (numbers.length > 1) {
        while (numbers.length > 2) {

            for (let i = 0; i < numbers.length - 1; i++) {
                condensed[i] = numbers[i] + numbers[i + 1];

            }
            numbers = condensed;
            condensed = [];
        }
        console.log(numbers[0] + numbers[1]);

    } else {
        console.log(`${numbers[0]}`)
    }

}

solve([11])