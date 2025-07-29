#!/usr/bin/env python3
"""
Function write an asunchronous coroutune takes in an integer argument
named wit_random that waits for a random delay between 0 and max_delay seconds
and eventually returns it
"""

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """
    Params:
        max_delay: int, default 10
    Return: float value: random delay between 0 and max_delay
    """

    wait_time = max_delay * random.random()
    await asyncio.sleep(wait_time)
    return wait_time

if __name__ == "__main__":
    asyncio.run(wait_random)
