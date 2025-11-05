class Account:
  def __init__(self, balance):
    self.balance = balance

  def deposit(self, amount):
    self.balance += amount
  
  def withdraw(self, amount):
    if self.balance >= amount:
      self.balance -= amount
    else:
      print("Not enough funds.")
    
  def show_balance(self):
    return self.balance
  
account1 = Account(200)
account2 = Account(100)

account1.deposit(150) # 350
account2.deposit(50) # 150

print(f"Balance: {account1.show_balance()}")
print(f"Balance: {account2.show_balance()}")

account1.withdraw(200) # 100
account2.withdraw(150) # 0

print(f"Balance: {account1.show_balance()}")
print(f"Balance: {account2.show_balance()}")
