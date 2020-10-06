function calculator(num1, num2, operator) {
    let multiply = (a, b) => a * b;
    let add = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let divide = (a, b) => a / b;

    switch (operator) {
        case 'multiply':
            return multiply(num1, num2);
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'divide':
            return divide(num1, num2);
    }
}

console.log(calculator(2, 3, 'multiply'))