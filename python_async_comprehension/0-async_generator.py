#!/usr/bin/env python3
"""Module defines an asynchronous generator function"""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """This function generates random float numbers between 0 and 10 with"""
    for _ in range(10):
        """A 1-second delay between each generation"""
        await asyncio.sleep(1)
        yield random.random() * 10
