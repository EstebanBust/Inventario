# Generated by Django 4.2.5 on 2023-09-19 02:09

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ArmaPuño',
            fields=[
                ('numero_serie', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('calibre', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Camara',
            fields=[
                ('numero_serie', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('resolucion', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='CarabinaLanzaGases',
            fields=[
                ('numero_serie', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('tipo', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Escopeta',
            fields=[
                ('numero_serie', models.CharField(max_length=50, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('tipo', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='Funcionario',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('grado', models.CharField(choices=[('1', 'Carabinero'), ('2', 'Cabo 2'), ('3', 'Cabo 1'), ('4', 'Sargento 2'), ('5', 'Sargento 1'), ('6', 'Suboficial'), ('7', 'Suboficial Mayor'), ('8', 'Subteniente'), ('9', 'Teniente'), ('10', 'Capitán'), ('11', 'Mayor'), ('12', 'Teniente Coronel'), ('13', 'Coronel')], default='1', max_length=2)),
                ('fecha_registro', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('camara', models.BooleanField(default=False)),
                ('escopeta', models.BooleanField(default=False)),
                ('carabina_lanza_gases', models.BooleanField(default=False)),
                ('extra', models.TextField(max_length=200)),
                ('arma_puno', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='inventario.armapuño')),
                ('camara_relacion', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.camara')),
                ('carabina_lanza_gases_relacion', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.carabinalanzagases')),
                ('escopeta_relacion', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.escopeta')),
            ],
        ),
    ]
