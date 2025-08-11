#!/usr/bin/env python3
"""
Function that should return a tuple of size to containing
a start index and an end index corresponding to the range of indexes
to return in a list for those particular pagination parameters
"""


def index_range(page, page_size):
    """
    Params:
        page: index of the page
        page_size: number of elements in the page
    Return a start index and an end index in a list
    """
    page += 0;

    return (page, page_size)
