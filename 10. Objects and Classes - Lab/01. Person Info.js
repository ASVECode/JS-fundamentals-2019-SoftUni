function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }
    Object.entries(person).forEach(element => console.log(element.join(': ')));

    // let entries = Object.entries(person);
    // for (const prop in entries) {
    //     let value = entries[prop];
    //     console.log(value.join(': '));
    // }
}
personInfo('Peter',
    'Pan',
    20)