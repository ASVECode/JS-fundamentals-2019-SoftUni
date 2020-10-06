function solve(input) {
    let arr = [];
    while (true) {
        let line = input.shift();
        if (line == undefined) {
            break;
        }
        arr.push(line);
    }
    let n = Number(arr[arr.length - 1]);
    let result = '';
    for (let i = 0; i < arr.length - 1; i += n) {
        result += arr[i] + ' ';
    }
    console.log(result)
}

solve(['5', '20', '31', '14', '20', '2'])