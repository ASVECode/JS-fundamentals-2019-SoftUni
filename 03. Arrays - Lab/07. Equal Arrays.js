function solve(arr1, arr2) {
    let sumArr1 = 0;
    let sumArr2 = 0;
    let result = '';
    for (let i = 0; i <= arr1.length - 1; i++) {
        if (arr1[i] != arr2[i]) {
            result = `Arrays are not identical. Found difference at ${i} index`;
            break;
        } else {
            sumArr1 += Number(arr1[i]);
            result = `Arrays are identical. Sum: ${sumArr1}`
        }
    }
    console.log(result);

}

solve(['10', '10', '30'], ['10', '20', '30'])