#!/usr/bin/python3
"""
t .get() and .count() methods
"""
from models import storage
from models.state import State
from models.city import City

print("All objects: {}".format(storage.count()))
print("City objects: {}".format(storage.count(City)))

first_city_id = list(storage.all(City).values())[0].id
print("First city: {}".format(storage.get(City, first_city_id)))
