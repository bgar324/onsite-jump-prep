class Engine:
  def start(self):
    print("Engine started.")

  def stop(self):
    print("Engine stopped.")

class Car:
  def __init__(self):
    self.engine = Engine()
  
  def start_car(self):
    self.engine.start()

  def stop_car(self):
    self.engine.stop()

my_car = Car()
my_car.start_car()
my_car.stop_car()