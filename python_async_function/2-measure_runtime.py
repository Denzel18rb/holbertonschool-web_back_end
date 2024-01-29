#!/usr/bin/env python3
"""
Test file for printing the correct output of the wait_n coroutine
"""
import asyncio
from timeit import default_timer as timer

wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """ returns total_time """
    hajimeru = timer()
    asyncio.run(wait_n(n, max_delay))
    owari = timer()

    return (owari - hajimeru) / n
