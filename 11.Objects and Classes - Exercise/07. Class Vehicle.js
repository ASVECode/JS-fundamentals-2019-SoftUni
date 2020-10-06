class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        let quality = parts.engine * parts.power;
        this.parts = {
            engine: parts.engine,
            power: parts.power,
            quality: quality
        }
        this.fuel = fuel;
    }
    drive(lossFuel) {
        this.fuel -= lossFuel;
    }
}
let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
