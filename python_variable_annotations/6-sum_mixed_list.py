#!/usr/bin/env python3
"""scrip to return a float"""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Sums the elements in a list"""
    n_uku = 0
    for nums_mixed in mxd_lst:
        n_uku += nums_mixed
    return n_uku
