function matrix(number) {
    for (let row = 1; row <= number; row++) {
        let result = '';
        for (let col = 1; col <= number; col++) {
            result += number + ' ';
        }
        console.log(result);
    }
}
matrix(5)