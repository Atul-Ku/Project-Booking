import json
from django.db import models
import datetime  # Import datetime module

class Details(models.Model):
    user = models.CharField(max_length=100)
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    message = models.CharField(max_length=1000, default="No message")  # Provide default value for message
    age = models.IntegerField(default=0)
    phone=models.IntegerField(default=0)
    date = models.DateField(default=datetime.date.today)  # Default to current date

    def to_json(self):
        data = {
            "user": self.user,
            "from_location": self.from_location,
            "to_location": self.to_location,
            "age": self.train,
            "message": self.message,
            "phone": self.phone,
            "date": self.date.isoformat()
        }
        return json.dumps(data)

class SaveDetails(models.Model):
    user = models.CharField(max_length=100)
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    message = models.CharField(max_length=1000, default="No message")  # Provide default value for message
    age = models.IntegerField(default=0)
    phone = models.IntegerField(default=0)
    date = models.DateField(default=datetime.date.today)  # Default to current date

    def to_json(self):
        data = {
            "user": self.user,
            "from_location": self.from_location,
            "to_location": self.to_location,
            "age": self.age,
            "message": self.message,
            "phone": self.phone,
            "date": self.date.isoformat()
        }
        return json.dumps(data)




#### car details #####


class CarDetails(models.Model):
    user = models.CharField(max_length=100)
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    message = models.CharField(max_length=1000, default="No message")  # Provide default value for message
    phone=models.IntegerField(default=0)
    date = models.DateField(default=datetime.date.today)  # Default to current date

    def to_json(self):
        data = {
            "user": self.user,
            "from_location": self.from_location,
            "to_location": self.to_location,
            "message": self.message,
            "phone": self.phone,
            "date": self.date.isoformat()
        }
        return json.dumps(data)

class CarSaveDetails(models.Model):
    user = models.CharField(max_length=100)
    from_location = models.CharField(max_length=100)
    to_location = models.CharField(max_length=100)
    message = models.CharField(max_length=1000, default="No message")  # Provide default value for message
    phone = models.IntegerField(default=0)
    date = models.DateField(default=datetime.date.today)  # Default to current date

    def to_json(self):
        data = {
            "user": self.user,
            "from_location": self.from_location,
            "to_location": self.to_location,
            "message": self.message,
            "phone": self.phone,
            "date": self.date.isoformat()
        }
        return json.dumps(data)
