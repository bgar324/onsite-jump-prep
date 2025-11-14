# Prompt D — Two Threads, One Counter

# Implement a Counter object with an integer value.
# Start 2 threads that each increment the counter 10,000 times.

# Question:

# Why does it sometimes not equal 20,000?

# Fix it with a Lock.

# Deliverables:

# Small code snippet

# Clear verbal explanation of the race condition

# How Lock prevents interleaving

import threading

lock = threading.Lock()

class Counter:
  def __init__(self, count):
    self.count = count

  def increment(self):
    for _ in range(10_000):
      with lock:
        self.count += 1

shared_counter = Counter(0)

job_1 = threading.Thread(target = shared_counter.increment(), args = (1))

job_2 = threading.Thread(target = shared_counter.increment(), args = (1))

job_1.start()
job_2.start()

job_1.join()
job_2.join()

print(f"Expected Result: 20000")
print(f"Actual Result (Unsafe): {shared_counter.count}")