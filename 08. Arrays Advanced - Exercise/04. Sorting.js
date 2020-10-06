function sorting(numbers) {
    let sortNums = numbers.sort((a, b) => a - b);
    let smallest = sortNums.slice(0, sortNums.length / 2);
    let biggest = sortNums.slice(sortNums.length / 2);
    biggest = biggest.sort((a, b) => b - a);

    let result = [];
    for (let i = 0; i < biggest.length; i++) {
        result.push(biggest[i]);
        result.push(smallest[i]);
    }
    return result.join(' ');
}
console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));