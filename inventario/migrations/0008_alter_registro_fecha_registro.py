# Generated by Django 4.2.5 on 2023-10-06 05:45

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0007_remove_camara_nombre_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registro',
            name='fecha_registro',
            field=models.DateTimeField(default=django.utils.timezone.now, editable=False, null=True),
        ),
    ]