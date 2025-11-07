from datetime import datetime
from typing import List, Optional, TypeVar, Generic, Protocol
from threading import Lock

class Order:
  def __init__(self, id : int, symbol : str, price : float, quantity : int, type : str):
    self._id = id
    self._symbol = symbol
    self._price = price
    self._quantity = quantity
    self._type = type.upper()
    self._created_at = datetime.now()

  @property
  def id(self): return self._id
  @property
  def symbol(self): return self._symbol
  @property
  def price(self): return self._price
  @property
  def quantity(self): return self._quantity
  @property
  def type(self): return self._type

T = TypeVar("T")

class Repository(Protocol, Generic[T]):
  def add(self, item : T) -> None:
    pass
  def remove(self, item_id : int) -> None:
    pass
  def get(self, item_id : int) -> None:
    pass
  def list_all(self) -> List[T]:
    pass

class InMemoryRepository(Generic[T]):
  def __init__(self):
    self._items : dict[int, T] = {}
    self._lock = Lock()

  def add(self, item : T) -> None:
    with self._lock:
      self._items[getattr(item, "id")] = item

  def remove(self, item_id : int) -> None:
    with self._lock:
      self._items.pop(item_id, None)

  def get(self, item_id : int) -> Optional[T]:
    with self._lock:
      return self._items.get(item_id)

  def list_all(self) -> List[T]:
    with self._lock:
      return list(self._items.values())

class OrderBook:
  def __init__(self, repo : Repository[Order]):
    self._repo = repo
    self._lock = Lock()
  
  def place_order(self, order : Order):
    with self._lock:
      self._repo.add(order)

  def cancel_order(self, order_id : int):
    with self._lock:
      self._repo.remove(order_id)
  
  def get_best_bid(self, symbol: str) -> Optional[Order]:
      with self._lock:
          orders = self._repo.list_all()

      best_order = None
      for order in orders:
          if order.symbol == symbol and order.type == "BUY":
              if best_order is None or order.price > best_order.price:
                  best_order = order
      return best_order


  def get_best_ask(self, symbol: str) -> Optional[Order]:
      with self._lock:
          orders = self._repo.list_all()

      best_order = None
      for order in orders:
          if order.symbol == symbol and order.type == "SELL":
              if best_order is None or order.price < best_order.price:
                  best_order = order
      return best_order

