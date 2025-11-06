interface Vehicle {
  drive() : void
}

class Car implements Vehicle {
  drive() : void {
    console.log("Driving a car.")
  }
}

class Truck implements Vehicle {
  drive() : void {
    console.log("Driving a truck.")
  }
}

type VehicleType = "car" | "truck";

class VehicleFactory {
  static create(type : VehicleType) : Vehicle {
    if (type === "car") return new Car();
    if (type === "truck") return new Truck();
    throw new Error("Unsupported vehicle type.")
  }
}

class Garage {
  vehicle : Vehicle;
  color : string;
  owner : string;

  constructor(vehicle : Vehicle, color : string, owner : string){
    this.vehicle = vehicle;
    this.color = color;
    this.owner = owner;
  }

  showInfo(){
    console.log(`${this.owner}'s ${this.color} ${this.vehicle.constructor.name}`);
  }
}

class GarageBuilder {
  private vehicle? : Vehicle;
  private color? : string;
  private owner? : string;

  setVehicle(vehicle : Vehicle) : this {
    this.vehicle = vehicle;
    return this;
  }

  setColor(color : string) : this {
    this.color = color;
    return this;
  }

  setOwner(owner : string) : this {
    this.owner = owner;
    return this;
  }

  build() : Garage {
    if(!this.vehicle || !this.color || !this.owner) {
      throw new Error("Missing one or more properties.")
    }
    return new Garage(this.vehicle, this.color, this.owner)
  }
}