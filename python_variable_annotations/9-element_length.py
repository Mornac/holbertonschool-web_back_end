#!/usr/bin/env python3
"""
Annotate the function's parameters and
return values with the appropriate types
"""

from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Params: lst : Iterable[Sequence]
    Return: List of tuple in sequence
    """

    return [(i, len(i)) for i in lst]
