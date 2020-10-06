function bomb(numbers, nums) {

    let bombNum = nums[0];
    let power = nums[1]
    let result = [];

    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (num == bombNum) {
            let startIndex = Math.max(0, (i - power));
            let countToEnd = 1 + power + power;
            numbers.splice(startIndex,countToEnd);
            //result = numbers.reduce((a, b) => a + b, 0);
            console.log(numbers);
            i = -1;
        
        } 
    }
   // return result;
    console.log(numbers)
}

console.log(bomb([1, 4, 1, 1, 1, 1, 1, 4, 1], [4, 2]));