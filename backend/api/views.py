from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import json
# Create your views here.

@api_view(['GET'])
def SiteMapAPI(request):
    """
    List of Available APIs
    """
    sites = [
        {
            "name" : "Test",
            "purpose" : "An example of a potential API url",
            "uri" : "/0/test/"
        }
    ]
    return Response(sites)

@api_view(['GET'])
def TestAPI(request):
    """
    Test API
    """
    return Response("Your test worked!")