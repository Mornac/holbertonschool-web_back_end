#!/usr/bin/env python3
"""
Function that should return a tuple of size to containing
a start index and an end index corresponding to the range of indexes
to return in a list for those particular pagination parameters
"""
from typing import Union, Tuple

def index_range(page, page_size) -> Union[tuple[int, int], None]:
    """
    Params:
        page: index of the page
        page_size: number of elements in the page
    Return a start index and an end index in a list
    """

    return (page * page_size - page_size, page * page_size)
