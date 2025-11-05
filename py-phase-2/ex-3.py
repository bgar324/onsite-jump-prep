from abc import ABC, abstractmethod

class Payment(ABC):
  @abstractmethod
  def process_payment(self):
    pass

class CreditCardPayment(Payment):
  def process_payment(self):
    print("Processing credit card payment...")

class PayPalPayment(Payment):
  def process_payment(self):
    print("Processing PayPal payment...")
  
def complete_transaction(payment : Payment):
  payment.process_payment()

test = [CreditCardPayment(), PayPalPayment()]

for t in test:
  complete_transaction(t)