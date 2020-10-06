function bunnyKill(input) {
    let [bombs, matrix] = [input.pop().split(/[\s,]+/g).map(Number), input.map(l => l.split(/\s+/g).map(Number))];
    let bunnyDamage = 0;
    let bunnyKills = 0;

    function doDamageOnNearBunnies(bombRow, bombCol, damage) {
        for (let row = Math.max(0, bombRow - 1); row <= Math.min(matrix.length - 1, bombRow + 1); row++) {
            for (let col = Math.max(0, bombCol - 1); col <= Math.min(matrix[row].length - 1, bombCol + 1); col++) {
                if (row != bombRow || col != bombCol) {
                    matrix[row][col] -= damage;
                    if (matrix[row][col] < 0)
                        matrix[row][col] = 0;
                }
            }
        }
    }

    for (let i = 0; i < bombs.length; i += 2) {
        let row = bombs[i];
        let col = bombs[i + 1];

        if (matrix[row][col] > 0) {
            bunnyDamage += matrix[row][col];
            bunnyKills++;
            doDamageOnNearBunnies(row, col, matrix[row][col]);
            matrix[row][col] = 0;
        }
    }
    matrix.map(r => bunnyDamage += r.reduce((a, b) => a + b));
    matrix.map(r => bunnyKills += r.filter(sr => sr > 0).length);

    console.log(bunnyDamage);
    return bunnyKills;
}

// function bunnyKill(input) {
//     let matrix = [];
//     let bombsIndex = input.pop().split(' ');
//     input.forEach(line => matrix.push(line.split(' ').map(Number)));

//     for (let bombIndex of bombsIndex) {
//         let [bombRow, bombCol] = bombIndex.split(',').map(Number);
//         let damage = matrix[bombRow][bombCol];
//         for (let row = 0, n = matrix.length; row < n; row++) {
//             for (let col = 0, m = matrix[row].length; col < m; col++) {
//                 if ((Math.abs(row - bombRow) <= 1 && Math.abs(col - bombCol) <= 1) && (col !== bombCol || row !== bombRow)) {
//                     matrix[row][col] = Math.max(0, matrix[row][col] - damage);
//                 }
//             }
//         }
//     }

//     let sum = 0,
//         counter = 0;
//     for (let row of matrix) {
//         for (let col of row) {
//             sum += col;
//             if (col > 0) {
//                 counter++;
//             }
//         }
//     }
//     console.log(sum);
//     return counter;
// }
console.log(bunnyKill(['10 10 10', '10 10 10', '10 10 10', '0,0']));