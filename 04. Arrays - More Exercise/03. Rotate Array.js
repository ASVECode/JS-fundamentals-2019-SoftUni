function solve(arr) {
    let numRotations = arr.pop();
    while (numRotations != 0) {
        for (let i = 0; i < arr.length - 1; i++) {
            let firstItem = arr[0];
            arr.shift();
            arr.push(firstItem);
        }
        numRotations--;
    }
    console.log(arr.join(' '));
}

solve(['Banana', 'Orange', 'Coconut', 'Apple', '15'])