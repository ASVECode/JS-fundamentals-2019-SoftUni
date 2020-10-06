function radioCrystals(arr) {
    let finalMicrons = arr[0];
    let currentMicrons = arr[1];
    console.log(`Processing chunk ${currentMicrons} microns`)

    function cut(currentMicrons) {
        currentMicrons /= 4;
        return Math.floor(currentMicrons);
    }

    function lap(currentMicrons) {
        currentMicrons -= currentMicrons * 0.2;
        return Math.floor(currentMicrons);
    }

    function grind(currentMicrons) {
        currentMicrons -= 20;
        return Math.floor(currentMicrons);
    }
    function etch(currentMicrons) {
        currentMicrons -= 2;
        return Math.floor(currentMicrons);
    }

    let counter = 0;
    while (cut(currentMicrons) >= finalMicrons) {
        counter++;
        currentMicrons = cut(currentMicrons);
    }
    if (counter > 0) {
        console.log(`Cut x${counter}`);
        console.log(`Transporting and washing`);
    }

    counter = 0;
    while (lap(currentMicrons) >= finalMicrons) {
        counter++;
        currentMicrons = lap(currentMicrons);
    }
    if (counter > 0) {
        console.log(`Lap x${counter}`);
        console.log(`Transporting and washing`);
    }

    counter = 0;
    while (grind(currentMicrons) >= finalMicrons) {
        counter++;
        currentMicrons = grind(currentMicrons);
    }
    if (counter > 0) {
        console.log(`Grind x${counter}`);
        console.log(`Transporting and washing`);
    }

    counter = 0;
    while (etch(currentMicrons) >= finalMicrons - 1) {
        counter++;
        currentMicrons = etch(currentMicrons);
    }
    if (counter > 0) {
        console.log(`Etch x${counter}`);
        console.log(`Transporting and washing`);
    }

    if (currentMicrons == finalMicrons - 1) {
        console.log(`X-ray x1`);
    }

    console.log(`Finished crystal ${finalMicrons} microns`);
}
radioCrystals([1375, 50000]);