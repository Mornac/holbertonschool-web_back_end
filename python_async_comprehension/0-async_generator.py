#!/usr/bin/env python3
"""
Function writes a coroutine called async_generator that takes no arguments
Coroutine will loop 10 times
Use the random module
"""

import asyncio
import random

from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """
    async generator that yields a random number between 0 and 10
    """

    for i in range(10):
        await asyncio.sleep(1)
        yield 10 * random.random()
