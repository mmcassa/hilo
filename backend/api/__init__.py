from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication

class ProtectedAPIView(APIView):
    protected_methods = ["POST","DELETE","PUT","PATCH"]
    authentication_classes = [SessionAuthentication]
    required_permissions = None
    def check_permissions(self,request):
        super().check_permissions(request)
        if request.method in self.protected_methods and self.required_permissions is not None and not request.user.is_superuser:            
            self.permission_denied(request)