#!/usr/bin/env python3
"""
Function sum_mixed_list takes a list mxd_lst of integers
and floats and returns their sum as a float
"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Params: mxd_lst: List[Union[int, float]]
    Return: sum: float
    """

    return sum(mxd_lst)
