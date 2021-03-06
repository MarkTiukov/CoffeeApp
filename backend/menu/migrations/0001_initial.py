# Generated by Django 3.0 on 2022-01-02 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MenuItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=31, verbose_name='menu item name')),
                ('price', models.IntegerField(verbose_name='menu item price')),
                ('description', models.TextField(verbose_name='menu item description')),
                ('amount', models.IntegerField(blank=True, null=True, verbose_name='number of menu item left')),
            ],
        ),
    ]
