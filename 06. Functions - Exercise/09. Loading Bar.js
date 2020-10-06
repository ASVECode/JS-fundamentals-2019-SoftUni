function loadingBar(number) {
    if (number == 100) {
        return `100% Complete!\n[%%%%%%%%%%]`
    }
    let result = '%'.repeat(number / 10);
    for (let i = 1; i <= 10 - (number / 10); i++) {
        result += '.'
    };
    return `${number}% [${result}]\nStill loading...`;
}
console.log(loadingBar(100))