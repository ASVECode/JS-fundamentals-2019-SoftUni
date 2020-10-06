function manipulator(arrInt, arrCommand) {
    let arr = arrInt.splice(0)
    for (let value of arrCommand) {
        let splitArr = value.split(' ');
        let command = splitArr.shift();
        let leftNum = splitArr.map(Number);

        if (command === 'print') {
            return arr;
        }
        else if (command === 'addMany' || command === 'add') {
            let index = leftNum.shift();
            for (let i = 0; i < leftNum.length; i++) {
                arr.splice(index + i, 0, leftNum[i]);
            }
        }
        else if (command === 'contains') {
            let foundedOccuranceIndex = arr.indexOf(leftNum[0]);
            console.log(foundedOccuranceIndex);
        }
        else if (command === 'remove') {
            arr.splice(leftNum[0], 1);
        }
        else if (command === 'shift') {
            for (let i = 0; i < leftNum[0]; i++) {
                let shifted = arr.shift();
                arr.push(shifted);
            }
        }
        else if (command === 'sumPairs') {
            let temporaryArr = [];
            for (let i = 0; i < arr.length / 2; i++) {
                let sumPairs = arr[i] + arr[i + 1];
                temporaryArr.push(sumPairs);
            }
            arr = temporaryArr;
        }
    }
}

console.log(manipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']));