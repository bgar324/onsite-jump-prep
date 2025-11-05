class Student {
  name : string;
  private gpa : number;

  constructor(name : string, gpa : number){
    this.name = name;
    this.gpa = gpa;
  }

  updateGPA(newGPA : number): void{
    if(newGPA >= 0 && newGPA <= 4){
      this.gpa = newGPA
      console.log(`Succesfully changed GPA to: ${newGPA}`)
    } else {
      throw new Error("GPA out of bounds. Must be within 0 and 4.")
    }
  }

  getInfo(){
    return `${this.name} - ${this.gpa}`
  }
}

let newStudent = new Student("Benjamin", 4.0);

console.log(newStudent.getInfo())
console.log(newStudent.updateGPA(2.2))
console.log(newStudent.getInfo())