from django.urls import path, include
from rest_framework import routers
from inventario import views

router = routers.DefaultRouter()
router.register(r'reg', views.InventarioView, basename='registros')
router.register(r'arma', views.ArmaView, basename='arma')
router.register(r'camara', views.CamaraView, basename='camara')
router.register(r'escopeta', views.EscopetaView, basename='escopeta')
router.register(r'carabina', views.CarabinaView, basename='carabina')
router.register(r'funcionario', views.FuncionarioView, basename='funcionario')

urlpatterns = [
    path("api/", include(router.urls)),
]
