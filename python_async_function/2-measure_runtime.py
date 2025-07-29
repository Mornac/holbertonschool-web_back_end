#!/usr/bin/env python3
"""
Function that measures total execution time and should return a float
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

    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()

    return (end_time - start_time) / n


if __name__ == "__main__":
    measure_time(5, 9)
