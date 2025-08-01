#!/usr/bin/env python3
"""
Function task_wait_random that takes an integer max_delay
and returns a asyncio.Task
"""

import asyncio

wait_random = __import__("0-basic_async_syntax").wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Params: max_delay: int
    Return: a float: asyncio.Task
    """

    return asyncio.create_task(wait_random(max_delay))


if __name__ == "__main__":
    task_wait_random()
