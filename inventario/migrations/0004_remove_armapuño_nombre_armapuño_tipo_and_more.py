# Generated by Django 4.2.5 on 2023-09-19 02:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0003_registro_funcionario_alter_funcionario_grado'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='armapuño',
            name='nombre',
        ),
        migrations.AddField(
            model_name='armapuño',
            name='tipo',
            field=models.CharField(choices=[('Pistola', 'Pistola'), ('Revolver', 'Revolver')], default='1', max_length=20),
        ),
        migrations.AlterField(
            model_name='funcionario',
            name='grado',
            field=models.CharField(choices=[('Carabinero', 'Carabinero'), ('Cabo 2', 'Cabo 2'), ('Cabo 1', 'Cabo 1'), ('Sargento 2', 'Sargento 2'), ('Sargento 1', 'Sargento 1'), ('Suboficial', 'Suboficial'), ('Suboficial Mayor', 'Suboficial Mayor'), ('Subteniente', 'Subteniente'), ('Teniente', 'Teniente'), ('Capitán', 'Capitán'), ('Mayor', 'Mayor'), ('Teniente Coronel', 'Teniente Coronel'), ('Coronel', 'Coronel')], default='Seleccione Grado', max_length=20),
        ),
        migrations.AlterField(
            model_name='registro',
            name='servicio',
            field=models.CharField(max_length=100),
        ),
    ]
