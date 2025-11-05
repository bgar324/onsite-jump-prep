class Container<T>{
  value : T;

  constructor(value : T){
    this.value = value;
  }

  getValue() : T {
    return this.value;
  }

  setValue(newValue : T){
    this.value = newValue;
  }
}

const nameContainer = new Container("Benjamin");
const numberContainer = new Container(100);

console.log(nameContainer.getValue()); // Benjamin
numberContainer.setValue(200);
console.log(numberContainer.getValue()); // 200
