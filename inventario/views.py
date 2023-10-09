from .models import Registro  # Importa el modelo Registro
from django.shortcuts import render
from rest_framework import viewsets, status
from .serializer import *
from .models import *
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authtoken.models import Token
class InventarioView(viewsets.ModelViewSet):
    serializer_class = InventarioSerializer

    def get_queryset(self):
        # Filtra los registros donde registro_finalizado sea False
        return Registro.objects.filter(finalizado=False)


class ArmaView(viewsets.ModelViewSet):
    queryset = ArmaPuño.objects.all()
    serializer_class = ArmaSerializer


class CamaraView(viewsets.ModelViewSet):
    queryset = Camara.objects.all()
    serializer_class = CamaraSerializer


class EscopetaView(viewsets.ModelViewSet):
    queryset = Escopeta.objects.all()
    serializer_class = EscopetaSerializer


class CarabinaView(viewsets.ModelViewSet):
    queryset = CarabinaLanzaGases.objects.all()
    serializer_class = CarabinaSerializer


class FuncionarioView(viewsets.ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer
