function solve(input) {
    let rooms = input.join('').split('|');
    let health = 100;
    let chest = 0;
    let counter = 0;
    for (let i = 0; i < rooms.length; i++) {
        counter++;
        let nums = rooms[i].split(' ');
        let room = nums[0];
        let num = Number(nums[1]);
        if (room == 'chest') {
            chest += num;
            if (health <= 0) {
                break;
            }
            console.log(`You found ${num} coins.`)
        } else {
            if (room == 'potion') {
                health += num;
                if (health > 100) {
                console.log(`You healed for ${Math.abs(num-(health-100))} hp.`)
                    health = 100;
                    console.log(`Current health: ${health} hp.`)

                }else{
                    console.log(`You healed for ${num} hp.`)
                    console.log(`Current health: ${health} hp.`)

                }
            } else {
                health -= num;
                if (health <= 0) {
                    console.log(`You died! Killed by ${room}.`);
                    console.log(`Best room: ${counter}`)
                    break;
                } else {
                    console.log(`You slayed ${room}.`);
                }
            }

        }
        if (i == (rooms.length - 1)) {
            if (health > 0) {
                console.log(`You've made it!`);
                console.log(`Coins: ${chest}`);
                console.log(`Health: ${health}`);
                break;
            }
        }
    }
}
solve(['cat 10|potion 30|ork 10|chest 10|snake 25|chest 110'])