function convertToJson(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    }
    person = JSON.stringify(person);
    return person;
}
console.log(convertToJson('George',
    'Jones',
    'Brown'
))