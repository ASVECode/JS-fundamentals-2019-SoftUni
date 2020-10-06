function sorting(arr) {
    arr.sort(function (a, b) {
        return a.length - b.length || // sort by length, if equal then
            a.localeCompare(b);    // sort by dictionary order
    });
    return arr.join('\n');
}
console.log(sorting(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']))
