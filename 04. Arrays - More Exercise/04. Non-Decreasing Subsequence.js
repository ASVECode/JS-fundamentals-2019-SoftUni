function solve(arr) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i]) >= maxNum) {
            maxNum = arr[i];
            result.push(maxNum);
        }
    }
    console.log(result.join(' '));
}

// function solve(arr) {
//     let maxNum = arr[0];
//     let result = arr.filter(num => {
//         if (num >= maxNum) {
//             maxNum = num;
//         }
//         return num >= maxNum;
//     });
//     console.log(result.join(' '));
// }
solve([20, 3, 2, 15, 6, 1])