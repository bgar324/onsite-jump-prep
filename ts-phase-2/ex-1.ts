class Vehicle{
  name : string;
  constructor (name : string) {
    this.name = name;
  } 

  move(){
    return `${this.name} is moving`;
  }
}

class Car extends Vehicle {
  move() {
    return `${this.name} drives on the road`;
  }
}

class ElectricCar extends Car {
  move() {
    return super.move() + ". It moves silently on electric power";
  }
}

