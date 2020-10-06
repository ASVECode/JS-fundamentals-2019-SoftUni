function firstlastK(arr) {
    let n = Number(arr[0]);
    let firstK = arr.slice(1, n + 1);
    let lastK = arr.slice(arr.length - n);
    let result = `${firstK.join(' ')}\n${lastK.join(' ')}`;
    return result;
}
console.log(firstlastK([3, 6, 7, 8, 9]))