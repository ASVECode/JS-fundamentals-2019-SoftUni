function lastKSeq(n, k) {
    let nums = [];
    nums[0] = 1;
    for (let i = 1; i < n; i++) {
        let sum = 0;
        for (let prev = i - k; prev <= i - 1; prev++)
            if (prev >= 0) {
                sum += nums[prev];
                nums[i] = sum;
            }
    }
    let result = ''
    for (let i = 0; i < n; i++) {
        result += (nums[i] + " ");

    }
    return result;
}
console.log(lastKSeq(6, 3));