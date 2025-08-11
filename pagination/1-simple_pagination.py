#!/usr/bin/env python3
"""
Function that should return a tuple of size to containing
a start index and an end index corresponding to the range of indexes
to return in a list for those particular pagination parameters
"""
import csv
import math
from typing import Union, Tuple, List


def index_range(page, page_size) -> Union[tuple[int, int], None]:
    """
    Params:
        page: index of the page
        page_size: number of elements in the page
    Return a start index and an end index in a list
    """
    if (page and page_size):
        return (page * page_size - page_size, page * page_size)


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Method that takes two integer arguments:
        Args:
            page with default value = 1
            page_size with default value = 10
        Assert to verify that both args are integers greater than 0
        index_range to find correct indexes to paginate the dataset correctly
        Return:
            the appropriate page of the dataset
            an empty list if the input args are out of range
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)

        if start >= len(self.dataset()):
            return []
        return self.dataset()[start:end]
