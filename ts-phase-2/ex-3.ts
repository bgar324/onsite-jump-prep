// Class GasEngine → method start(): string → "Gas engine roaring to life!"

// Class ElectricMotor → method start(): string → "Electric motor humming quietly..."

// Class Car → constructor takes a powerSource object (either GasEngine or ElectricMotor)

class GasEngine {
  start() {
    console.log("Gas engine roaring to life!")
  }
}

class ElectricMotor{
  start() {
    console.log("Electric motor humming quietly...")
  }
}

class Car2 {
  private powerSource : GasEngine | ElectricMotor;

  constructor(powerSource : GasEngine | ElectricMotor){
    this.powerSource = powerSource
  }

  drive() {
    this.powerSource.start();
    console.log("Car drives forward!")
  }
}

const gasCar = new Car2(new GasEngine());
const evCar = new Car2(new ElectricMotor());

gasCar.drive();
evCar.drive();