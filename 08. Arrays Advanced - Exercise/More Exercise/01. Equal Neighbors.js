function equalNeighbours(input) {
    let elements = [];
    let length = input[0].length;
    for (let i = 0; i < input.length; i++) {
        let arr = input[i];
        for (let j = 0; j < arr.length; j++) {
            elements.push(arr[j]);
        }
    }
    let pairs = 0;
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        if (element == elements[i + length]) {
            pairs++;
        }
        if (element == elements[i + 1] && i != length - 1) {
            pairs++;
        }
    }
    return pairs;
}
console.log(equalNeighbours([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));