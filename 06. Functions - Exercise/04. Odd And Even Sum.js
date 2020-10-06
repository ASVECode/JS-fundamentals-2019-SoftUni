// function OddAndEvenSum(num) {
//     num = num + ''
//     let sumOdd = 0;
//     let sumEven = 0;

//     for (let number of num) {
//         if (number % 2 == 0) {
//             sumEven += Number(number);
//         } else {
//             sumOdd += Number(number);
//         }
//     }
//     return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
// }
// console.log(OddAndEvenSum(1000435))

function solve(num) {
    num.toString();
    let oddSum = 0;
    let evenSum = 0;

    function isOdd(n) {
        return num % 2 !== 0;
    }

    function isEven(n) {
        return num % 2 === 0;
    }


    for (let i = 0; i < num.length; i++) {

        let digit = Number(num[i]);

        if (isOdd(digit)) {
            oddSum += digit;
        }
        if (isEven(digit)) {
            evenSum += digit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);