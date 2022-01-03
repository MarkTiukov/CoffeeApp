from rest_framework import serializers

from menu.models import MenuItem, MenuCategory


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        # TODO: maybe not '__all__'?
        fields = '__all__'


class MenuCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuCategory
        # TODO: maybe not '__all__'?
        fields = '__all__'
