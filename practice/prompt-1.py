from typing import List
from heapq import heappush, heappop
def top_k_active_neighborhoods(posts : List[dict], now : int, k : int) -> List[str]:
  # post -> (neighborhood, timestamp)
  # 1 day = 24 hours * 3600 seconds
  cutoff = now - 7 * 24 * 3600
  ans = list()

  for post in posts:
    if post["timestamp"] >= cutoff:
      n = post["neighborhood"]
      ans[n] = ans.get(n, 0) + 1

  heap = []
  for n, c in ans.items():
    heappush(heap, (c,n))
    if len(heap) > k:
      heappop(heap)
  
  return [n for _, n in sorted(heap, reverse=True)]
