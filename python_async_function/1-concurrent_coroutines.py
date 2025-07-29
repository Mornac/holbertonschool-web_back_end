#!/usr/bin/env python3
"""
Function writes an async routine called wait_n
that takes in 2 int arguments
"""

import asyncio
from typing import List

wait_random = __import__("0-basic_async_syntax").wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Params:
        n: int
        max_delay: int
    Return: a list of float value
    """

    waiting_time = [
        asyncio.create_task(wait_random(max_delay)) for _ in range(n)
    ]

    return [
        await waiting for waiting in asyncio.as_completed(waiting_time)
    ]

if __name__ == "__main__":
    asyncio.run(wait_n(5, 5))
