function manipulation(arr) {
    let numbers = arr[0].split(' ');
    for (let i = 1; i <= arr.length - 1; i++) {
        let commands = arr[i].split(' ');
        let command = commands[0];
        let num = commands[1];

        if (command == 'Add') {
            numbers.push(num);
        } else if (command == 'Remove') {
            numbers = numbers.filter(el => el != num);
        } else if (command == 'RemoveAt') {
            numbers.splice(num, 1);
        } else {
            let index = commands[2];
            numbers.splice(index, 0, num);
        }
    }
    return numbers.join(' ');
}
console.log(manipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']));