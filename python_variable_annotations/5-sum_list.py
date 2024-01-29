#!/usr/bin/env python3
"""Complex types - list of floats"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    "Function that return a sum of float list"
    gokei = 0.0
    for num in input_list:
        gokei += num
    return gokei
