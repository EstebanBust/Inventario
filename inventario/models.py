from django.db import models
from django.utils import timezone


# Create your models here.


GRADOS = (
    ('Carabinero', 'Carabinero'),
    ('Cabo 2', 'Cabo 2'),
    ('Cabo 1', 'Cabo 1'),
    ('Sargento 2', 'Sargento 2'),
    ('Sargento 1', 'Sargento 1'),
    ('Suboficial', 'Suboficial'),
    ('Suboficial Mayor', 'Suboficial Mayor'),
    ('Subteniente', 'Subteniente'),
    ('Teniente', 'Teniente'),
    ('Capitán', 'Capitán'),
    ('Mayor', 'Mayor'),
    ('Teniente Coronel', 'Teniente Coronel'),
    ('Coronel', 'Coronel'),
)
ARMAPUÑO = (
    ('Pistola', 'Pistola'),
    ('Revolver', 'Revolver'),
)


class ArmaPuño(models.Model):
    numero_serie = models.CharField(max_length=50, primary_key=True)
    tipo = models.CharField(
        max_length=20,
        choices=ARMAPUÑO,
        default='1',  # Opción predeterminada si no se especifica ninguna
    )

    def __str__(self):
        return f"{self.tipo} - {self.numero_serie}"


class Camara(models.Model):
    numero_serie = models.CharField(max_length=50, primary_key=True)
    modelo = models.CharField(max_length=100, null=True)
    resolucion = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.numero_serie


class Escopeta(models.Model):
    numero_serie = models.CharField(max_length=50, primary_key=True)
    marca = models.CharField(max_length=100, null=True)
    modelo = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.numero_serie


class CarabinaLanzaGases(models.Model):
    numero_serie = models.CharField(max_length=50, primary_key=True)
    marca = models.CharField(max_length=100, null=True)
    modelo = models.CharField(max_length=100, null=True)

    def __str__(self):
        return self.numero_serie


class Funcionario(models.Model):
    nombre = models.CharField(max_length=100)
    grado = models.CharField(
        max_length=20,
        choices=GRADOS,
        default='Seleccione Grado',  # Opción predeterminada si no se especifica ninguna
    )

    def __str__(self):
        return f"{self.grado} {self.nombre}"


class Registro(models.Model):
    fecha_registro = models.DateTimeField(
        default=timezone.now, editable=False)
    funcionario = models.ForeignKey(
        Funcionario, on_delete=models.CASCADE, null=True)
    servicio = models.CharField(max_length=100)
    arma_puno = models.ForeignKey(
        ArmaPuño, on_delete=models.CASCADE, null=True)
    camara = models.BooleanField(default=False)
    camara_relacion = models.ForeignKey(
        Camara, blank=True, on_delete=models.CASCADE, null=True)
    escopeta = models.BooleanField(default=False)
    escopeta_relacion = models.ForeignKey(
        Escopeta, blank=True, on_delete=models.CASCADE, null=True)
    carabina_lanza_gases = models.BooleanField(default=False)
    carabina_lanza_gases_relacion = models.ForeignKey(
        CarabinaLanzaGases, blank=True, on_delete=models.CASCADE, null=True)
    extra = models.TextField(max_length=200, null=True, blank=True)
    finalizado = models.BooleanField(default=False)

    def __str__(self):
        return f"Registro de servicio: {self.servicio} de {self.funcionario} estado:{self.finalizado}"
