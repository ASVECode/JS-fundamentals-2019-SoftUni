// function janNotation(array) {
//     let operators = [];
//     let numbers = [];
//     for (let element of array) {
//         if (element == Number(element)) {
//             numbers.push(element);
//         } else {
//             operators.push(element);
//         }
//     }
//     if (operators.length == numbers.length - 1) {
//         while (array.length > 2) {
//             for (let i = 0; i < array.length; i++) {
//                 if (array[i + 2] != Number(array[i + 2])) {
//                     switch (array[i + 2]) {
//                         case '+':
//                             array.splice(i, 3, Number(array[i] + array[i + 1]));
//                             break;
//                         case '-':
//                             array.splice(i, 3, Number(array[i] - array[i + 1]));
//                             break;
//                         case '/':
//                             array.splice(i, 3, Number(array[i] / array[i + 1]));
//                             break;
//                         default:
//                             array.splice(i, 3, Number(array[i] * array[i + 1]));
//                             break;
//                     }
//                     break;
//                 }
//             }
//         }
//         return array.join();
//     } else {
//         if (numbers.length >= operators.length + 2) {
//             return 'Error: too many operands!';
//         } else {
//             return 'Error: not enough operands!';
//         }
//     }
// }

// console.log(janNotation([3,
//     4,
//     '+']


// ));
function jansNotation(input) {
    let operators = []
    let result = 0
    for (let symbol of input) {
        if (Number.isInteger(symbol)) {
            operators.push(symbol)
        } else {
            let secondOperators = operators.pop()
            let firstOperators = operators.pop()
            switch (symbol) {
                case "+":
                    operators.push(firstOperators + secondOperators)
                    break;
                case "-":
                    operators.push(firstOperators - secondOperators)
                    break;
                case "*":
                    operators.push(firstOperators * secondOperators)
                    break;
                case "/":
                    operators.push(firstOperators / secondOperators)
                    break;
            }
        }
    }

    if (operators.length > 1) {
        return ("Error: too many operands! ")
    } else if (!Number.isInteger(operators[0])) {
        return ("Error: not enough operands!")
    } else {
        return (operators[0])
    }
}
console.log(jansNotation([3,
    4,
    '+']


));