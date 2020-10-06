function grade(num) {
    if (num >= 2.00 && num < 3.00) {
        return 'Fail';
    } else if (num >= 3.00 && num < 3.50) {
        return 'Poor';
    } else if (num >= 3.50 && num < 4.50) {
        return 'Good';
    } else if (num >= 4.50 && num < 5.50) {
        return 'Very good';
    } else {
        return 'Excellent';
    }
}
console.log(grade(3.31));