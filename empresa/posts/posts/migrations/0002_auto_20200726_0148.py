# Generated by Django 3.0.8 on 2020-07-26 01:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proyecto',
            name='cod_proyecto',
            field=models.CharField(max_length=20, unique=True, verbose_name='Código de Proyecto'),
        ),
        migrations.AlterField(
            model_name='proyecto',
            name='cod_snip',
            field=models.CharField(default='', max_length=20, unique=True, verbose_name='Código Snip'),
        ),
    ]