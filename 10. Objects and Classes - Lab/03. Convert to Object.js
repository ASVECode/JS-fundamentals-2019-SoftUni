function convertToObject(jsonStr) {
    jsonStr = JSON.parse(jsonStr);
    Object.entries(jsonStr)
        .forEach(element => console.log(element.join(': ')));
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
