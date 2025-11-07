import threading
import time

balance = 0 # global variable
lock = threading.Lock()

def deposit():
  global balance
  for _ in range(100_000):
    with lock:
      balance = temp + 1

def withdraw():
  global balance
  for _ in range(100_000):
    with lock:
      balance -= 1
  
t1 = threading.Thread(target = deposit)
t2 = threading.Thread(target = withdraw)

t1.start()
t2.start()

t1.join()
t2.join()

print("Without lock: ", balance)