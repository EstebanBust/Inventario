# Generated by Django 4.2.5 on 2023-10-07 19:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('inventario', '0011_remove_registro_arma_puno_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registro',
            name='arma_puno',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.armapuño'),
        ),
        migrations.AlterField(
            model_name='registro',
            name='camara_relacion',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.camara'),
        ),
        migrations.AlterField(
            model_name='registro',
            name='carabina_lanza_gases_relacion',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.carabinalanzagases'),
        ),
        migrations.AlterField(
            model_name='registro',
            name='escopeta_relacion',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.escopeta'),
        ),
        migrations.AlterField(
            model_name='registro',
            name='funcionario',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='inventario.funcionario'),
        ),
    ]
