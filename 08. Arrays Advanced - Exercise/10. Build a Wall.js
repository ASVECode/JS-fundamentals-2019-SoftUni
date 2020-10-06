function buildWall(numbers) {
    numbers = numbers.map(Number);

    let usedConcrete = [];
    let sum = numbers.reduce((a, b) => a + b, 0);
    let maxSum = numbers.length * 30;
    while (sum < maxSum) {
        let dailyUsedConcrete = 0;
        for (let num of numbers) {
            if (num < 30) {
                dailyUsedConcrete += 195;
                sum++;
                numbers.splice(numbers.indexOf(num), 1, (num + 1));
            }

        }
        usedConcrete.push(dailyUsedConcrete)
    }
    console.log(usedConcrete.join(', '))
    let finalCost = usedConcrete.reduce((a, b) => a + b, 0) * 1900;
    return `${finalCost} pesos`;
}
console.log(buildWall([21, 25, 28]));