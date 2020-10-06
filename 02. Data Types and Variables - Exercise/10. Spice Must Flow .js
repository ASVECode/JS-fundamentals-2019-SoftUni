function solve(yield) {
    let expenses = 0;
    let totalAmount = 0;
    let days = 0;
    while (true) {
        if (yield < 100) {
            if (totalAmount >= 26) {
                totalAmount -= 26;
            }
            break;
        }
        days += 1;
        totalAmount += (yield - 26);
        yield -= 10;

    }
    console.log(days);
    console.log(totalAmount);

}
solve(111)