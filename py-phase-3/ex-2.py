from abc import ABC, abstractmethod
from typing import TypeVar, Generic

class Animal(ABC):
  @abstractmethod
  def speak(self):
    pass

TAnimal = TypeVar("TAnimal", bound=Animal)

class Trainer(Generic[TAnimal]):
  def train(self, animal : TAnimal):
    print(f"Training: {animal.speak()}")

class Dog(Animal):
  def speak(self):
    print("Woof!")

class Cat(Animal):
  def speak(self):
    print("Meow!")

trainer = Trainer()
trainer.train(Dog())
trainer.train(Cat())