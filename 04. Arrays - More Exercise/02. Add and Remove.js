function solve(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'add') {
            result.push(i + 1);
        } else {
            result.pop();
        }
    }
    if (result.length == 0) {
        console.log('Empty')
    } else {
        console.log(result.join(' '));
    }

}

solve(['add', 'add', 'remove', 'add', 'add'])