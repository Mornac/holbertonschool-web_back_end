#!/usr/bin/env python3
"""
Function to_kv takes a string and an int/float as arguments
and returns a tuple
"""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    Params:
        k: string
        v: square of int or float
    Return: tuple annotated as a float
    """

    return (k, v ** 2)
