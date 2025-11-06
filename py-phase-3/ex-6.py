from typing import TypeVar, Generic, List, Optional, Protocol

class ItemBase(Protocol):
  id : int
  name : str

T = TypeVar('T', bound=ItemBase)

class InventoryManager(Generic[T]):
  def __init__(self) -> None:
    self._items : List[T] = []

  def add_item(self, item : T) -> None:
    self._items.append(item)

  def get_item_by_id(self, id : int) -> Optional[T]:
    for item in self._items:
      if item.id == id:
        return item
      return None

  def get_all_items(self) -> List[T]:
    return list(self._items)
  
  def remove_item(self, id : int) -> None:
    self._items = [item for item in self._items if item.id != id]

class Book:
  def __init__(self, id : int, name : str, author : str) -> None:
    self.id = id
    self.name = name
    self.author = author
  
inventory = InventoryManager[Book]()
inventory.add_item(Book(1, "1984", "George Orwell"))
inventory.add_item(Book(2, "Dune", "Frank Herbert"))

print(inventory.get_item_by_id(1).name)  # 1984
inventory.remove_item(1)
print([b.name for b in inventory.get_all_items()]) 