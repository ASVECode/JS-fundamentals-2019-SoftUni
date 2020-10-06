function oddNumbers(numbers) {
    let oddNums = [];
    for (let i = 0; i < numbers.length; i++) {
        if (i % 2 != 0) {
            oddNums.push(numbers[i] * 2);
        }
    }
    let result = oddNums.reverse();
    return result.join(' ');
}
console.log(oddNumbers([3, 0, 10, 4, 7, 3]));