#!/usr/bin/env python3
"""scritp to  type an iterable object"""


from typing import List, Tuple, Sequence, Iterable


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Takes a list of strings and returns a list of tuples"""
    return [(i, len(i)) for i in lst]
