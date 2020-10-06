function solve(input) {
    let num = Number(input.shift());
    if (num >= 5.50) {
        console.log('Excellent');
    } else {
        console.log('Not excellent')
    }
}
solve(['4.50'])