from rest_framework import serializers
from .models import Details

class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = ['id','user', 'from_location','to_location','train','date','message']  # Define the fields you want to serialize
