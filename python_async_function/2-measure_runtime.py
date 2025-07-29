#!usr/bin/env python3
"""
Function that creates a measure_time with integers as arguments
thas measures the total execution time and should return a float
"""

import asyncio
import time

wait_n = __import__("1-concurrent_coroutines").wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Params:
        n: int
        max_delay: int
    Return: a float: total_time / n
    """

    started = time.time()
    asyncio.run(wait_n(n, max_delay))
    finished = time.time()

    return (finished - started) / n


if __name__ == "__main__":
    measure_time(5, 9)
