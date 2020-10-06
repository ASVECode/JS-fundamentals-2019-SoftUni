function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let difX1Y1ToX2Y2 = Math.sqrt(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2));
    let difX1Y1ToStart = Math.sqrt(Math.pow((x1 - 0), 2) + Math.pow((y1 - 0), 2));
    let difX2Y2ToStart = Math.sqrt(Math.pow((x2 - 0), 2) + Math.pow((y2 - 0), 2));

    if (difX1Y1ToStart == parseInt(difX1Y1ToStart)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (difX2Y2ToStart == parseInt(difX2Y2ToStart)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (difX1Y1ToX2Y2 == parseInt(difX1Y1ToX2Y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
pointsValidation([2, 1, 1, 1]);