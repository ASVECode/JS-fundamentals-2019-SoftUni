function searchNum(numbers, commands) {
    let takeEl = commands[0];
    let deleteEl = commands[1];
    let searchedNum = commands[2];
    let takenEl = numbers.slice(0, takeEl);
    takenEl.splice(0, deleteEl);
    let counter = 0;
    for (let i = 0; i < takenEl.length; i++) {
        if (takenEl[i] == searchedNum) {
            counter++;
        }
    }
    return `Number ${searchedNum} occurs ${counter} times.`
}
console.log(searchNum([5, 2, 3, 4, 1, 6], [5, 2, 3]));
