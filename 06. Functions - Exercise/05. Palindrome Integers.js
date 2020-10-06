function palindromeInt(input) {

    for (let num of input) {
        console.log(isPalindrome(num));
    };

    function isPalindrome(num) {
        let reversedStr = '';
        let numToStr = num.toString();
        for (let i = numToStr.length - 1; i >= 0; i--) {
            reversedStr += numToStr[i];
        }
        return numToStr === reversedStr;
    };
}
palindromeInt([32, 2, 232, 1010])

// function palindromeInt(input) {

//     for (let num of input) {
//         console.log(isPalindrome(num));
//     };

//     function isPalindrome(num) {
//     let numAsStr = num.toString();
//         for (let i = 0; i < numAsStr.length/2; i++) {
//             if(numAsStr[i]!==numAsStr[numAsStr.length-1-i]){
//                 return false;
//             }
//         }
//         return true;;
//     };
// }
// palindromeInt([32, 2, 232, 1010])