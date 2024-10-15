from django.shortcuts import render
import logging
# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Details
from .models import SaveDetails
from .serializers import DetailsSerializer
from .serializers import SaveDetailsSerializer

from .models import CarDetails
from .models import CarSaveDetails
from .serializers import CarDetailsSerializer
from .serializers import CarSaveDetailsSerializer
def home(request):
    return render(request,'Hi')


@api_view(['GET'])
def sample_api(request):
    data = {"message": "Hello from Django API"}
    return Response(data)

from django.db import connection
@api_view(['POST'])
def submit_feedback(request):
    if request.method == 'POST':
        serializer = DetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
           
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def save(request):
    if request.method == 'POST':
        serializer = SaveDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_details(request):
    details = Details.objects.all()  # Fetch all records
    serializer = DetailsSerializer(details, many=True)  # Serialize the data
    return Response(serializer.data)


@api_view(['GET'])
def save_details(request):
    details = SaveDetails.objects.all()  # Fetch all records
    serializer = SaveDetailsSerializer(details, many=True)  # Serialize the data
    return Response(serializer.data)

@api_view(['DELETE'])
def clear_all_details(request):
    try:
        SaveDetails.objects.all().delete()  # Delete all records from the Details model
        return Response({"message": "All details deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def delete_and_save_entry(request):
    try:
        entry_id = request.data.get('id')
        rowData = request.data.get('rowData')

        if not entry_id or not rowData:
            return Response({'error': 'Missing entry ID or data'}, status=status.HTTP_400_BAD_REQUEST)

        # Step 1: Find the entry in Details
        try:
            detail = Details.objects.get(id=entry_id)
        except Details.DoesNotExist:
            return Response({'error': 'Entry not found'}, status=status.HTTP_404_NOT_FOUND)

        # Step 2: Save entry to SavedEntry
        saved_entry = SaveDetails(
            user=rowData.get('user', detail.user),
            from_location=rowData.get('from_location', detail.from_location),
            to_location=rowData.get('to_location', detail.to_location),
            date=rowData.get('date', detail.date),
            age=rowData.get('train', detail.age),
            message=rowData.get('message', detail.message),
            phone=rowData.get('phone',detail.phone)
        )
        saved_entry.save()

        # Step 3: Delete the entry from Details
        detail.delete()

        # Step 4: Return success response
        serializer = SaveDetailsSerializer(saved_entry)

        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        return Response({'error': 'An error occurred while deleting and saving entry.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)




########## car Details   #############


@api_view(['POST'])
def submit_feedback_car(request):
    if request.method == 'POST':
        serializer = CarDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
           
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def save_car(request):
    if request.method == 'POST':
        serializer = CarSaveDetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_details_car(request):
    details = CarDetails.objects.all()  # Fetch all records
    serializer = CarDetailsSerializer(details, many=True)  # Serialize the data
    return Response(serializer.data)


@api_view(['GET'])
def save_details_car(request):
    details = CarSaveDetails.objects.all()  # Fetch all records
    serializer = CarSaveDetailsSerializer(details, many=True)  # Serialize the data
    return Response(serializer.data)

@api_view(['DELETE'])
def clear_all_details_car(request):
    try:
        CarSaveDetails.objects.all().delete()  # Delete all records from the Details model
        return Response({"message": "All details deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['POST'])
def delete_and_save_entry_car(request):
    try:
        entry_id = request.data.get('id')
        rowData = request.data.get('rowData')

        if not entry_id or not rowData:
            return Response({'error': 'Missing entry ID or data'}, status=status.HTTP_400_BAD_REQUEST)

        # Step 1: Find the entry in Details
        try:
            detail = CarDetails.objects.get(id=entry_id)
        except CarDetails.DoesNotExist:
            return Response({'error': 'Entry not found'}, status=status.HTTP_404_NOT_FOUND)

        # Step 2: Save entry to SavedEntry
        saved_entry = CarSaveDetails(
            user=rowData.get('user', detail.user),
            from_location=rowData.get('from_location', detail.from_location),
            to_location=rowData.get('to_location', detail.to_location),
            date=rowData.get('date', detail.date),
            message=rowData.get('message', detail.message),
            phone=rowData.get('phone',detail.phone)
        )
        saved_entry.save()

        # Step 3: Delete the entry from Details
        detail.delete()

        # Step 4: Return success response
        serializer = CarSaveDetailsSerializer(saved_entry)

        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    except Exception as e:
        logging.error(f"Error occurred: {str(e)}")
        return Response({'error': 'An error occurred while deleting and saving entry.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

