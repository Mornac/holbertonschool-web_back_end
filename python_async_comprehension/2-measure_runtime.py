#!/usr/bin/env python3
"""
Function that write a measure_runtime coroutine that will execute
async_comprehension four times in parallel using asyncio.gather
measure_runtime should measure the total runtime and return it
"""

import asyncio
import time

async_comprehension = __import__("1-async_comprehension").async_comprehension


async def measure_runtime() -> float:
    """
    Measure runtime will execute async_comprehension four times
    Return: a float: total runtime
    """

    start_time = time.time()
    await asyncio.gather(*(async_comprehension() for _ in range(4)))
    end_time = time.time()

    return (end_time - start_time)
