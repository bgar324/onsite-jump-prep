from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List
import asyncio, uuid

app = FastAPI()

class Trade(BaseModel):
    client_trade_id: str
    symbol: str
    side: str       # BUY or SELL
    quantity: int
    price: float

class TradeResult(BaseModel):
    trade_id: str
    status: str
    avg_price: float
    filled_quantity: int

trades: List[TradeResult] = []

@app.post("/trade", response_model=TradeResult)
async def execute_trade(trade: Trade):
    # Simulate async validation & fill
    await asyncio.sleep(0.05)       # pretend we hit a match engine
    if trade.quantity <= 0:
        raise HTTPException(400, "Quantity must be positive")
    result = TradeResult(
        trade_id=str(uuid.uuid4()),
        status="FILLED",
        avg_price=trade.price,
        filled_quantity=trade.quantity,
    )
    trades.append(result)
    return result

@app.get("/trade")
async def get_all_trades():
    return trades
