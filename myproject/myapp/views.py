from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Details
from .serializers import DetailsSerializer
def home(request):
    return render(request,'Hi')


@api_view(['GET'])
def sample_api(request):
    data = {"message": "Hello from Django API"}
    return Response(data)

@api_view(['POST'])
def submit_feedback(request):
    if request.method == 'POST':
        serializer = DetailsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def get_details(request):
    details = Details.objects.all()  # Fetch all records
    serializer = DetailsSerializer(details, many=True)  # Serialize the data
    return Response(serializer.data)


@api_view(['DELETE'])
def clear_all_details(request):
    try:
        Details.objects.all().delete()  # Delete all records from the Details model
        return Response({"message": "All details deleted successfully."}, status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)