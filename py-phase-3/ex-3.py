from typing import TypeVar, Protocol

class Describable(Protocol):
  def describe(self) -> str:
    pass

T = TypeVar("T", bound=Describable)

class Book(Describable):
  def __init__(self, year):
    self.year = year
  def describe(self) -> str:
    return f"Book titled {self.year}"

class Car(Describable):
  def __init__(self, brand):
    self.brand = brand
  def describe(self) -> str:
    return f"Car brand {self.brand}"

def show_description(item : T) -> str:
  print(f"Description: {item.describe()}")

show_description(Book("1984"))
show_description(Car("Toyota"))