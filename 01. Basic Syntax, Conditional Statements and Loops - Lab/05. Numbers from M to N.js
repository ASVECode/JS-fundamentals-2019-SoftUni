function solve(input) {
    let M = Number(input.shift())
    let N = Number(input.shift())

    for (let i = M; i >= N; i--) {
        console.log(i);
    }
}
solve(['10', '5'])