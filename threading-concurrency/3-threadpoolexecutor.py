from concurrent.futures import ThreadPoolExecutor
import time

def download_file(url):
    time.sleep(1)  # simulate I/O
    return f"Downloaded: {url}"

# Simulate 100 "files"
queue = [f"file_{i}.com" for i in range(100)]

def run_test(max_workers):
    start = time.time()
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        list(executor.map(download_file, queue))
    end = time.time()
    print(f"max_workers={max_workers} took {round(end - start, 2)}s")

# Test different pool sizes
for workers in [1, 5, 10, 50, 100]:
    run_test(workers)
