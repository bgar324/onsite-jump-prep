from typing import TypedDict

class Employee(TypedDict):
  name : str
  id : int
  department : str

class ContactInfo(TypedDict):
  email : str
  phone : str

class PartialEmployee(Employee, total=False):
  pass

class FullEmployee(Employee, ContactInfo):
  pass

emp : Employee = {"name" : "Ben", "id" : 101, "department" : "Engineering"}

partial : PartialEmployee = {"name", "Ben"}

full: FullEmployee = {
    "name": "Ben",
    "id": 101,
    "department": "Engineering",
    "email": "ben@example.com",
    "phone": "555-1234"
}

print(emp)
print(partial)
print(full)