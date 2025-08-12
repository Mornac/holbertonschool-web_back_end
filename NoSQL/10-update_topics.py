#!/usr/bin/env python3
"""
Function that changes all topics of a school document
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name:
    pymongo collection object: mongo_collection
    name: school name to update, string
    topics: list of topics approached in the school, list of strings
    """
    return mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
