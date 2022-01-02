from rest_framework import serializers

from menu.models import MenuItem

class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        # TODO: maybe not '__all__'?
        fields = '__all__'