from django.db import models


class MenuItem(models.Model):
    name = models.CharField(verbose_name='menu item name', max_length=31)
    price = models.IntegerField(verbose_name='menu item price')
    description = models.TextField(verbose_name='menu item description')
    amount = models.IntegerField(verbose_name='number of menu item left', blank=True, null=True)

    def __str__(self):
        return self.name


