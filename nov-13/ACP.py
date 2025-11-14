# Prompt E — asyncio coroutine pipeline

# Build the skeleton of:

# async def price_feed():
#     # yields a new price every 0.1 sec

# async def subscriber(name):
#     # prints the prices it receives

# async def main():
#     # run feed + two subscribers


# Checkpoints:

# Explain the event loop

# Explain why this is concurrency, not parallelism

# Explain why subscribers don’t block the feed

# Explain why this model fits real-time UI subscriptions

import asyncio
import time
from typing import Optional

async def price_feed(queue: asyncio.Queue):
    print("FEED: Starting production...")
    for i in range(5):
        await asyncio.sleep(0.1)
        await queue.put(f"Price Update {i+1}")
        print(f"FEED: Published Price Update {i+1}")
    await queue.put(None)
    print("FEED: Finished publishing.")

async def subscriber(name: str, queue: asyncio.Queue):
    print(f"SUBSCRIBER {name}: Waiting for feed...")
    while True:
        data: Optional[str] = await queue.get()
        if data is None:
            await queue.put(None)
            break
        print(f"\t>>> {name} received data: {data}")

async def main():
    pipeline_queue = asyncio.Queue()
    start = time.time()
    print("-" * 30)
    print("Main: Scheduling concurrent tasks.")
    feed_task = asyncio.create_task(price_feed(pipeline_queue))
    sub_1_task = asyncio.create_task(subscriber("Ben", pipeline_queue))
    sub_2_task = asyncio.create_task(subscriber("Jane", pipeline_queue))
    await asyncio.gather(feed_task, sub_1_task, sub_2_task)
    end = time.time()
    print("-" * 30)
    print(f"Main: All tasks completed in {end - start:.2f} seconds.")

if __name__ == "__main__":
    asyncio.run(main())
