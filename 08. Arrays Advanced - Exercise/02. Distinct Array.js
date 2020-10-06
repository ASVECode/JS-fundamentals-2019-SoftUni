function distinct(numbers) {
    let result = [... new Set(numbers)];
    return result.join(' ');
}
console.log(distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]));
