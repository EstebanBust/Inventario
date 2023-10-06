from rest_framework import serializers
from .models import *

class InventarioSerializer(serializers.ModelSerializer):
    funcionario_nombre = serializers.CharField(source='funcionario.nombre', read_only=True)
    class Meta:
        model = Registro
        fields = '__all__'
class ArmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArmaPuño
        fields = ['numero_serie']

class CamaraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camara
        fields = ['numero_serie']

class EscopetaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Escopeta
        fields = ['numero_serie']

class CarabinaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarabinaLanzaGases
        fields = ['numero_serie']

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ['id','grado','nombre']