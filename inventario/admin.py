from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(Funcionario)
admin.site.register(ArmaPuño)
admin.site.register(Camara)
admin.site.register(Escopeta)
admin.site.register(CarabinaLanzaGases)

admin.site.register(Registro)