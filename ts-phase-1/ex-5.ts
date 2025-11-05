interface Payable {
  getSalary() : number;
}

class Employee{
  name : string;
  role : string;

  constructor(name : string, role : string){
    this.name = name;
    this.role = role;
  }

  describe() : any{
    return `${this.name} is a ${this.role}`
  }

}

class FullTimeEmployee extends Employee implements Payable{
  salary : number;

  constructor(name : string, role : string, salary : number){
    super(name, role)
    this.salary = salary;
  }

  getSalary() : number {
    return this.salary
  }
}

class PartTimeEmployee extends Employee implements Payable{
  hourlyRate : number;
  hoursWorked : number;

  constructor(name : string, role : string, hourlyRate : number, hoursWorked : number){
    super(name, role)
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }


  getSalary() : number {
    return this.hourlyRate * this.hoursWorked;
  }
}