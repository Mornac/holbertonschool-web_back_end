#!/usr/bin/env python3
"""
Function that lists all documents in a collection
"""


def list_all(mongo_collection):
    """
    List all documents in the mongo collection
    mongo_collection: pymongo collection object
    Return: a list
            an empty list if no document in the collection
    """
    return mongo_collection.find()
