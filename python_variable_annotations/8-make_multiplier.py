#!/usr/bin/env python3
"""
Function make_multiplier takes a float multiplier as argument
and returns a function that multiplies a float by multiplier
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Params: multiplier: float
    Return: multiplies a float by multiplier
    """

    def multiply(number: float) -> float:
        """
        Params: number: float
        Return: number * multiplier
        """

        return number * multiplier

    return multiply
