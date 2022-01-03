from django.db import models


class MenuCategory(models.Model):
    name = models.CharField(verbose_name='name', max_length=31)

    def __str__(self):
        return self.name


class MenuItem(models.Model):
    name = models.CharField(verbose_name='name', max_length=31)
    price = models.IntegerField(verbose_name='price')
    description = models.TextField(verbose_name='description')
    amount = models.IntegerField(verbose_name='left in stock', blank=True, null=True)
    category = models.ForeignKey(MenuCategory, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
