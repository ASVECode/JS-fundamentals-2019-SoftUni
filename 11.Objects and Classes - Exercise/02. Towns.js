function towns(arr) {
    for (let str of arr) {
        let town = {
            town: str.split(' | ')[0],
            latitude: (Number(str.split(' | ')[1])).toFixed(2),
            longitude: (Number(str.split(' | ')[2])).toFixed(2)
        }
        console.log(town);
    }
}
towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])