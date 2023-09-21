from rest_framework import serializers
from .models import Registro

class InventarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registro
        fields = '__all__'