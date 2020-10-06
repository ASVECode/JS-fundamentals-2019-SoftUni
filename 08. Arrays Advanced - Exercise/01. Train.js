function train(arr) {
    let wagons = arr[0].split(' ').map(Number);
    let maxCapacity = Number(arr[1]);
    for (let i = 2; i <= arr.length - 1; i++) {
        let commands = arr[i].split(' ');
        let command = commands[0];
        if (command == 'Add') {
            let num = commands[1];
            wagons.push(Number(num));
        } else {
            for (let j = 0; j < wagons.length; j++) {
                if (Number(wagons[j]) + Number(command) <= maxCapacity) {
                    wagons[j] = Number(wagons[j]) + Number(command);
                    break;
                }
            }
        }
    }
    return wagons.join(' ');
}
console.log(train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']));