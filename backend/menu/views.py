from rest_framework import generics
from .models import MenuItem
from rest_framework import generics

from menu.models import MenuItem

from menu.serializers import MenuItemSerializer

class MenuItemList(generics.ListAPIView):
    serializer_class = MenuItemSerializer
    queryset = MenuItem.objects.all()
