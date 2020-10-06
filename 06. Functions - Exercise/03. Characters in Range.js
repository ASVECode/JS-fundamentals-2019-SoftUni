function charInRange(firstChar, secondChar) {
    let fisrtCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);
    let start = Math.min(fisrtCode, secondCode);
    let end = Math.max(fisrtCode, secondCode);
    let characters = [];

    for (let i = start + 1; i < end; i++) {
        let currentChar = String.fromCharCode(i);
        characters.push(currentChar);
    }
    return characters.join(' ');
}
console.log(charInRange('#', ':'))