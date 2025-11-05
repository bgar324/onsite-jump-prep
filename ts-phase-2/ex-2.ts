class Animal {
  name : string;
  constructor (name : string) {
    this.name = name;
  }

  speak () {
    return `${this.name} makes a sound.`
  }
}

class Dog extends Animal {
  speak () {
    return `${this.name} barks!`
  }
}

class Cat extends Animal {
  speak () {
    return `${this.name} meows.`
  }
}

class Bird extends Animal {
  speak () {
    return `${this.name} chirps!`
  }
}

const zoo: Animal[] = [new Dog("Buddy"), new Cat("Milo"), new Bird("Chirpy")];

for (const a of zoo){
  console.log(a.speak())
}