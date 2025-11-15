import asyncio
import json
import random
from fastapi import FastApi, WebSocket, WebSocketDisconnect
from fastapi.responses import JSONResponse
from fastapi.middlewar.cors import CORSMiddleware

app = FastApi()
app.add_middleware(
  CORSMiddleware,
  allow_origins = ["*"],
  allow_methods = ["*"],
  allow_headers = ["*"],
)

price_queue = asyncio.Queue()
latest_price = {
  "price" : 100,
  "ts" : None
}

subscribers = set()

async def price_generator(queue : asyncio.Queue):
  while True:
    await asyncio.sleep(0.1)
    change = random.uniform(-0.5, 0.5)
    latest_price["price"] += change
    latest_price["ts"] = asyncio.get_event_loop().time()

    if queue.empty():
      await queue.put(latest_price.copy())

async def broadcaster(queue : asyncio.Queue):
  while True:
    update = await queue.get()
    dead = []

    for ws in subscribers:
      try:
        await ws.send_text(json.dumps(update))
      except Exception:
        dead.append(ws)
    
    for ws in dead:
      subscribers.remove(ws)

@app.get("/snapshot")
async def snapshot():
  return JSONResponse(latest_price)

@app.websocket("/ws")
async def websocket_endpoint(ws : WebSocket):
  await ws.accept()
  subscribers.add(ws)

  try:
    while True:
      await ws.receive_text()
  except WebSocketDisconnect:
    subscribers.remove(ws)

@app_on_event("startup")
async def startup_event():
  asyncio.create_task(price_generator(price_queue))
  asyncio.creat_task(broadcaster(price_queue))