# myapp/urls.py

from django.urls import path
from . import views  # Ensure this import does not cause circular imports

urlpatterns = [
    path('', views.home, name='home'),
    path('api/feedback/', views.submit_feedback, name='submit-feedback'),
    path('api/save/', views.save, name='save'),
    path('api/details/', views.get_details, name='get_details'),
    path('api/savedetails/', views.save_details, name='save_details'),
    path('api/clear_all_details/', views.clear_all_details, name='clear_all_details'),
    path('api/details/delete_and_save/', views.delete_and_save_entry),

    path('api/feedback_car/', views.submit_feedback_car, name='submit-feedback'),
    path('api/save_car/', views.save_car, name='save'),
    path('api/details_car/', views.get_details_car, name='get_details'),
    path('api/savedetails_car/', views.save_details_car, name='save_details'),
    path('api/clear_all_details_car/', views.clear_all_details_car, name='clear_all_details'),
    path('api/details/delete_and_save_car/', views.delete_and_save_entry_car),

]
