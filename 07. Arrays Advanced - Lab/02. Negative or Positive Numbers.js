function negativeOrPositive(arr) {
    let negative = [];
    let positive = [];
    for (let num of arr) {
        if (num >= 0) {
            positive.push(num);
        } else {
            negative.unshift(num);
        }
    }
    let result = negative.concat(positive);
    return result.join('\n');
}
console.log(negativeOrPositive([3, -2, 0, -1]));