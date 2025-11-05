class BankAccount:
  def __init__(self, balance):
    self.__balance = balance
  
  def deposit(self, amount):
    if amount <= 0:
      print("Deposit must be positive.")
      return
    self.__balance += amount
  
  def withdraw(self, amount):
    if amount > self.__balance:
      print("Insufficient funds.")
    else:
      self.__balance -= amount
      print(f"Withdrew ${amount}.")
  
  def get_balance(self):
    return self.__balance

bank_account = BankAccount(300)
bank_account.deposit(200)
bank_account.withdraw(300)
print(bank_account.get_balance())