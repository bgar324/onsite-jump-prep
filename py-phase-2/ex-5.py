from abc import ABC, abstractmethod

class Connectable(ABC):
  @abstractmethod
  def connect(self):
    pass

class Authenticatable(Connectable):
  @abstractmethod
  def authenticate(self):
    pass

class DatabaseConnection(Authenticatable):
  def connect(self):
    print("Connecting to the database...")
  
  def authenticate(self):
    print("Authenticating user...")

obj = DatabaseConnection()
obj.connect()
obj.authenticate()