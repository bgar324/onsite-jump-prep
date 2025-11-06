from typing import overload, Union

@overload
def get_length(x : str) -> int:
  pass

@overload
def get_length(x : list) -> int:
  pass

@overload
def get_length(x : int) -> int:
  pass

def get_length(x : Union[str, list, int]) -> int:
  if isinstance(x, (str, list)):
    return len(x)
  elif isinstance(x, int):
    return 0
  else:
    raise TypeError("Unsupported type")

print(get_length("hello"))   # 5
print(get_length([1,2,3]))   # 3
print(get_length(42))        # 0