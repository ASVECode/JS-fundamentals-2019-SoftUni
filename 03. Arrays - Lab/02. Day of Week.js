function solve(num) {
    let daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (num <= 0 || num > 7) {
        console.log('Invalid day!')
    } else {
        console.log(daysWeek[num - 1]);
    }
}
solve(11)