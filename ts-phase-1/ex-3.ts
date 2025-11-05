class Student2 {

  constructor(public _name : string, private _gpa : number){
    this._name = _name;
    this._gpa = _gpa;
  }

  get gpa(){
    return this._gpa
  }

  set gpa(newGPA : number){
    if(newGPA >= 0 && newGPA <= 4){
      this._gpa = newGPA
      console.log(`Succesfully changed GPA to: ${newGPA}`)
    } else {
      throw new Error("GPA out of bounds. Must be within 0 and 4.")
    }
  }

  set name(name : string){
    this.name = name
  }

  getInfo(){
    return `${this.name} - ${this.gpa}`
  }
}

const ben = new Student2("Benjamin", 4.0);
console.log(ben.getInfo()); // Benjamin - GPA: 4
ben.gpa = 3.7;
console.log(ben.getInfo()); // Benjamin - GPA: 3.7
ben.gpa = 7; // ❌ Throws Error
