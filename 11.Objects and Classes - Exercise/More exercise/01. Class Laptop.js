class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }
    showInfo(info) {
      //  console.log(info.producer);
    }
    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }
    get price() {
        return `${(800 - age * 2) + (quality * 0.5)}`
    }
}
let info = {producer: "Dell", age: 2, brand: "XPS"}
let laptop = new Laptop(info, 10)
laptop.turnOn()
console.log(laptop.showInfo())
laptop.turnOff()
console.log(laptop.quality)
laptop.turnOn()
console.log(laptop.isOn)
console.log(laptop.price)
