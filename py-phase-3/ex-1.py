from typing import TypeVar, Generic

T = TypeVar('T')

class Pair(Generic[T]):
  def __init__(self, first : T, second : T):
    self.first = first
    self.second = second
  
  def swap(self) -> Pair[T]:
    return Pair(self.second, self.first)

p = Pair[int](1, 2)
swapped = p.swap()
print(swapped.first, swapped.second)  # 2 1