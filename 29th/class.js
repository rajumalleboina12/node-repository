class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  getVehicleInfo() {
    console.log(`I am a ${this.name} vehicle with ${this.wheels} wheels`);
  }
}

class SemiTruck extends Vehicle {
  constructor() {
    super("semi truck", 12); // passing values to super class constructor
  }
}

const v1 = new Vehicle("BMW", 4);
v1.getVehicleInfo();

const v2 = new SemiTruck();
v2.getVehicleInfo();
