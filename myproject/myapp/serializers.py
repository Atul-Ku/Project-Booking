from rest_framework import serializers
from .models import Details
from .models import SaveDetails
from .models import CarDetails
from .models import CarSaveDetails
class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = ['id','user', 'from_location','to_location','age','date','message','phone']  # Define the fields you want to serialize

class SaveDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaveDetails
        fields = ['id','user', 'from_location','to_location','age','date','message','phone']   # Define the fields you want to serialize

#######   For Car    ########

class CarDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarDetails
        fields = ['id','user', 'from_location','to_location','date','message','phone']  # Define the fields you want to serialize

class CarSaveDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarSaveDetails
        fields = ['id','user', 'from_location','to_location','date','message','phone']   # Define the fields you want to serialize