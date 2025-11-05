from abc import ABC, abstractmethod

class Playable(ABC):
  @abstractmethod
  def play(self):
    pass

class Recordable(ABC):
  @abstractmethod
  def record(self):
    pass

class Guitar(Playable, Recordable):
  def play(self):
    print("Guitar playing melody.")

  def record(self):
    print("Guitar recording track.")

guitar = Guitar()
guitar.play()
guitar.record()