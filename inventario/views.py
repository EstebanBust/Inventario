from .models import Registro  # Importa el modelo Registro
from rest_framework import viewsets
from .serializer import *
from .models import *
from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authentication import TokenAuthentication


class InventarioView(viewsets.ModelViewSet):
    serializer_class = InventarioSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtra los registros donde registro_finalizado sea False
        return Registro.objects.filter(finalizado=False)


class ArmaView(viewsets.ModelViewSet):
    queryset = ArmaPuño.objects.all()
    serializer_class = ArmaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class CamaraView(viewsets.ModelViewSet):
    queryset = Camara.objects.all()
    serializer_class = CamaraSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class EscopetaView(viewsets.ModelViewSet):
    queryset = Escopeta.objects.all()
    serializer_class = EscopetaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class CarabinaView(viewsets.ModelViewSet):
    queryset = CarabinaLanzaGases.objects.all()
    serializer_class = CarabinaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


class FuncionarioView(viewsets.ModelViewSet):
    queryset = Funcionario.objects.all()
    serializer_class = FuncionarioSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
