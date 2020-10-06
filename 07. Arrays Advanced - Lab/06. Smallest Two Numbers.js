function twoSmallestNums(arr) {
    let sortNums = arr.sort((a, b) => {
        return a - b;
    });
    let result = sortNums.slice(0, 2);
    return result.join(' ');
}
console.log(twoSmallestNums([30, 15, 50, 5]))