# myapp/urls.py

from django.urls import path
from . import views  # Ensure this import does not cause circular imports

urlpatterns = [
    path('', views.home, name='home'),
    path('api/feedback/', views.submit_feedback, name='submit-feedback'),
    path('api/details/', views.get_details, name='get_details'),
    path('api/clear_all_details/', views.clear_all_details, name='clear_all_details'),
]
