class Temperature:
  def __init__(self, celsius):
    # in celsius
    self.__celsius = celsius

  # getter
  @property
  def fahrenheit(self):
    return self.__celsius * (9/5) + 32

  @fahrenheit.setter
  def fahrenheit(self, new_fahrenheit):
    self.__celsius = (new_fahrenheit - 32) * 5/9

t = Temperature(0)
print(t.fahrenheit)  # 32.0

t.fahrenheit = 212
print(t.fahrenheit)  # 212.0

print(t._Temperature__celsius)  # 100.0 (internal Celsius value)
