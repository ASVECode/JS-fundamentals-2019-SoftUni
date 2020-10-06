function partyList(arr) {
    let list = [];
    for (let command of arr) {
        command = command.split(' ');
        if (command.length == 4) {
            if (list.includes(command[0])) {
                list = list.filter(el => el != command[0]);
            } else {
                console.log(`${command[0]} is not in the list!`);
            }
        } else {
            if (list.includes(command[0])) {
                console.log(`${command[0]} is already in the list!`);
            } else {
                list.push(command[0]);
            }
        }
    }
    return list.join('\n');
}
console.log(partyList(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!']));