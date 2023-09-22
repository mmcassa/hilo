from rest_framework import serializers

class NewChessGameSerializer(serializers.ModelSerializer):
    class Meta():
        fields = '__all__'