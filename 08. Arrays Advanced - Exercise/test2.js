// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     if (num == 4) {
//         numbers.splice(i, 1);
//     }
// }
// console.log(numbers)
    let numbers =[21, 25, 28];
   for(let i =0; i<=numbers.length;i++){
       numbers.splice(i,1,(numbers[i]+1));
       console.log(numbers)

   }
//     let usedConcrete = [];
//     let sum = numbers.reduce((a, b) => a + b, 0);
//     while (sum <= numbers.length * 30) {
//         let dailyUsedConcrete = 0;
//         for (let num of numbers) {
//             if (num < 30) {
//                 dailyUsedConcrete += 195;
//                 sum++;
//                 numbers.splice(numbers.indexOf(num),1,num++);
//             }

//         }
//         usedConcrete.push(dailyUsedConcrete)
//     }


//     console.log(usedConcrete)
// }