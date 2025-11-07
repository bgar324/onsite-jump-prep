import asyncio
import time

async def download_file(url):
    print(f"Downloading {url}")
    await asyncio.sleep(1)         
    print(f"Finished {url}")
    return f"Done: {url}"

async def main():
    urls = ["a.com", "b.com", "c.com", "d.com", "e.com"]
    start = time.time()

    results = await asyncio.gather(*(download_file(u) for u in urls))

    print(f"Total time: {round(time.time() - start, 2)}s")
    print(results)

asyncio.run(main())
