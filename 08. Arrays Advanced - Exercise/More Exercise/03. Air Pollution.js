function airPollution(mapSofia, forcesStr) {
    let matrix = [];
    let polluted = [];

    mapSofia.forEach(row => {
        matrix.push(row.split(' ').map(Number))
    })
    forcesStr.forEach(force => {
        let [forceType, index] = force.split(' ');

        switch (forceType) {
            case 'breeze':
                matrix[Number(index)] = matrix[Number(index)].map(cell => {
                    cell -= 15;
                    if (cell < 0) return 0;
                    return cell
                });
                break;
            case 'gale':
                matrix.forEach(row => {
                    row[Number(index)] -= 20;
                    if (row[Number(index)] < 0)
                        row[Number(index)] = 0
                })
                break;
            case 'smog':
                matrix = matrix.map(row =>
                    row.map(cell => cell += Number(index)))
                break;
        }
    })

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50)
                polluted.push(`[${row}-${col}]`)
        }

    }

    if (polluted.length !== 0) {
        return (`Polluted areas: ${polluted.join(', ')}`);
    } else {
        return ('No polluted areas');
    }
}
console.log(airPollution(["5 7 72 14 4",
    "41 35 37 27 33",
    "23 16 27 42 12",
    "2 20 28 39 14",
    "16 34 31 10 24"],
    ["breeze 1", "gale 2", "smog 25"]));