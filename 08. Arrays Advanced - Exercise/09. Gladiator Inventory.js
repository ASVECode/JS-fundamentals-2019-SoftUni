function gladiator(arr) {
    let inventory = arr[0].split(' ');
    for (let i = 1; i < arr.length; i++) {
        let commands = arr[i];
        let command = commands.split(' ')[0];
        let equipment = commands.split(' ')[1];

        if (command == 'Buy') {
            if (inventory.includes(equipment)) {
                continue;
            } else {
                inventory.push(equipment);
            }
        } else if (command == 'Trash') {
            if (inventory.includes(equipment)) {
                inventory.splice(inventory.indexOf(equipment), 1);
            }
        } else if (command == 'Repair') {
            if (inventory.includes(equipment)) {
                inventory.splice(inventory.indexOf(equipment), 1);
                inventory.push(equipment);
            }
        } else {
            let upgrade = equipment.split('-')[1];
            equipment = equipment.split('-')[0];
            if (inventory.includes(equipment)) {
                let newEquipment = `${equipment}:${upgrade}`;
                inventory.splice((inventory.indexOf(equipment) + 1), 0, newEquipment);
            }
        }
    }
    return inventory.join(' ');
}
console.log(gladiator(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']));