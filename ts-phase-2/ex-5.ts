// class Employee → method work(): string → "${name} is working."

// class Manager extends Employee → method manage(): string → "${name} is managing a team."

// class Engineer extends Employee → method code(): string → "${name} is writing code."

// Write a function perform(employee: Employee) that:

// if employee instanceof Manager → call manage()

// if employee instanceof Engineer → call code()

// else → call work()

// Create one Manager and one Engineer and pass them both into perform()

class Employee2 {
  name : string;
  constructor(name : string) {
    this.name = name;
  }

  work() : any {
    console.log(`${this.name} is working`)
  }
}

class Manager extends Employee2 {
  manage() : any {
    console.log(`${this.name} is managing a team.`)
  }
}

class Engineer extends Employee2 {
  code() : any {
    console.log(`${this.name} is writing code.`)
  }
}

function perform(employee : Employee2) {
  if (employee instanceof Manager){
    employee.manage()
  } else if (employee instanceof Engineer) {
    employee.code()
  } else {
    employee.work()
  }
} 

const employees : Employee2[] = [new Manager("Ben"), new Engineer("Robert"), new Employee2("Jake")]

for (const v of employees){
  perform(v)
}