#!/usr/bin/env python3
"""
Function that imports async_generator from the previous task
and write a coroutine that takes no arguments
"""

from typing import List

async_generator = __import__("0-async_generator").async_generator


async def async_comprehension() -> List[float]:
    """
    Async comprehension will collect 10 random numbers
    Return: 10 random numbers
    """

    return [numbers async for numbers in async_generator()]
