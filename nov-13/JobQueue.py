# Prompt C (Python)

# “Model a JobQueue with basic scheduling behavior.”

# Constructor:

# No parameters
# Internals:

# internal list for “jobs”

# job = {id, priority, created_at}

# Methods:

# add_job(id, priority)

# pop_job() returns highest-priority job (lower number = higher priority)

# size()

# Twist:

# Add reprioritize(id, new_priority)

# What is your data structure choice and why?

# Checkpoints:

# Are you picking list? heapq? Why?

# How do you maintain stability in ties?

# Do you need timestamps? Why or why not?

import heapq
import time
from typing import List, Tuple, Any

JobItem = Tuple[int, float, Any]

class JobQueue:
  def __init__(self):  
    self._jobs = List[JobItem] = []

  def add_job(self, id : Any, priority : int) -> None:
    created_at = time.time()

    job_item : JobItem = (priority, created_at, id)
    heapq.heappush(self._jobs, job_item)
  
  def pop_job(self) -> Tuple[int, Any]:
    if not self._jobs:
      raise IndexError("pop from empty JobQueue.")
    
    job = heapq.heappop(self._jobs)
    return job[0], job[2]

  def size(self) -> int:
    return len(self._jobs)

  #repriotize function isn't explained well. refraining.