function solve(input) {
    let n = input.shift();
    let sum = 0;
    let i = 1;
    while (true) {
        if (i % 2 != 0) {
            console.log(i);
            sum += Number(i);
            n--;
        }
        i++;
        if (n == 0) {
            break;
        }
    }
    console.log(`Sum: ${sum}`);
}
solve(['3'])