function solve(matrix) {
    let sumRow = row => matrix[row].reduce((a, b) => a + b);
    console.log(sumRow)
    let sumCol = col => matrix.map(row => row[col])
        .reduce((a, b) => a + b);
    if (matrix.length > 0) {
        let targetSum = sumRow(0);
 
        for (let i = 1; i < matrix.length; i++) {
            let rowSum = sumRow(i);
            if (rowSum !== targetSum) {
                console.log('false');
            }
        }
 
        for (let j = 0; j < matrix[0].length; j++) {
            let colSum = sumCol(j);
            if (colSum !== targetSum) {
                console.log('false');
            }
        }
    }
 
    //return true;
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   )