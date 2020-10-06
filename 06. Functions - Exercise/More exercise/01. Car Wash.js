function carWash(input) {
    let value = 0;
    for (let command of input) {
        if (command == 'soap') {
            value += 10;
        } else if (command == 'water') {
            value += value * 0.2;
        } else if (command == 'vacuum cleaner') {
            value += value * 0.25;
        } else {
            value -= value * 0.1;
        }
    }
    return `The car is ${value.toFixed(2)}% clean.`
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));