#!/usr/bin/env python3
"""
Test file for printing the correct output of the wait_n coroutine
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """returns list"""
    tasuku = []
    kekka_risuto = []
    for i in range(n):
        tasuku.append(task_wait_random(max_delay))

    kekka_risuto = [await task for task in asyncio.as_completed(tasuku)]
    return kekka_risuto
