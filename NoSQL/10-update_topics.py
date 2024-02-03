#!/usr/bin/env python3
"""Function to change topics in a collection based in name"""


def update_topics(mongo_collection, name, topics):
    "Updated topics in the collection"
    new_updated = mongo_collection.update_many({"name" : name}, {"$set": {"topics" : topics}})
    return new_updated.modified_count