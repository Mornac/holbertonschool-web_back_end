#!/usr/bin/env python3
"""
Function that provides some stats about Nginx logs stored in MongoDB
"""
from pymongo import MongoClient


def log_stats():
    """
    Method to provide some stats in MongoDB with:
    database = logs_db
    collection = nginx
    x = number of documents in nginx
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    db = client.logs
    collection = db.nginx

    logs_count = collection.count_documents({})
    methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
    status_check = collection.count_documents({
        'method': 'GET', 'path': '/status'})
    print(f"{logs_count} logs")
    print('Methods:')
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")
    print(f"{status_check} status check")


if __name__ == "__main__":
    log_stats()
