from django.contrib import admin
from .models import Details  # Import your model
from .models import SaveDetails
from .models import CarDetails
from .models import CarSaveDetails
# Register your model so it appears in the admin
admin.site.register(Details)
admin.site.register(SaveDetails)
admin.site.register(CarDetails)
admin.site.register(CarSaveDetails)