function inventory(input) {
    let heroes = [];
    input.forEach(line => {
        let tokens = line.split(' / ');
        let hero = {};
        hero.Hero = tokens[0];
        hero.level = tokens[1];
        let sortesItems = tokens[2].split(', ');
        sortesItems.sort((a, b) => a.localeCompare(b));
        hero.items = sortesItems.join(', ');
        heroes.push(hero);
    });
    heroes = heroes.sort((a, b) => (a.level - b.level));
    for (let hero of heroes) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])