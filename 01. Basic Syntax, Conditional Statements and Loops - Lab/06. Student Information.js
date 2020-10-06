function solve(input) {
    let name = input.shift();
    let age = input.shift();
    let avarage = input.shift();
    while (true) {
        if (name == undefined) {
            break;
        }

        console.log(`Name: ${name}, Age: ${age}, Grade:${avarage}.`);
        name = input.shift();
        age = input.shift();
        avarage = input.shift();
    }
}
solve(['John', '15', '5.54678', 'Steve', '16', '2.1426', 'Marry', '12', ' 6.00'])