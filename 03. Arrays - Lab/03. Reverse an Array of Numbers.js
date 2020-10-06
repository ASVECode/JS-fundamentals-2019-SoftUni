function solve(limit, num){
    let result = '';
    for(let i = limit-1; i>=1; i--){
        result += num[i] + ' ';
    }
    console.log(result+ num[0])
}
solve(4, [-1, 20, 99, 5])