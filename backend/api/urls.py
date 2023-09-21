from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.SiteMapAPI),
    path('test/',views.TestAPI),
    path('chess/',include('chess.urls'))
]