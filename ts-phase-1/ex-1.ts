class Car {
  make : string;
  model : string;
  year : number;

  constructor(make : string, model : string, year : number){
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `${this.year} ${this.make} ${this.model}`
  }
} 

const myCar = new Car("Toyota", "Camry", 2016);

console.log(myCar.getInfo());