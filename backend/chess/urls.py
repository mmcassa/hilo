from django.urls import path
from .views import *

urlpatterns = [
    path('request/',RequestGameAPI.as_view()),
    path('request/respond/',AcceptGameAPI.as_view()),
    path('game/<int:id>/move/',validateMoveAPI)
]