#!/usr/bin/env python3
""" scrit to retunr a square and tuple of str"""

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Takes a string"""
    Shikaku = float(v) ** 2
    return k, Shikaku
