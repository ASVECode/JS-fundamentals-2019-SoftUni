function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    for (let fights = 1; fights <= lostFightsCount; fights++) {
        if (fights % 2 == 0) {
            expenses += helmetPrice;
        }
        if (fights % 3 == 0) {
            expenses += swordPrice;
        }
        if (fights % 6 == 0) {
            expenses += shieldPrice;
        }
        if (fights % 12 == 0) {
            expenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)

}
solve(7, 2, 3, 4, 5)