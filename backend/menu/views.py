from rest_framework import generics

from menu.models import MenuItem, MenuCategory
from menu.serializers import MenuItemSerializer, MenuCategorySerializer


class MenuCategoryList(generics.ListAPIView):
    serializer_class = MenuCategorySerializer
    queryset = MenuCategory.objects.all()


class MenuItemList(generics.ListAPIView):
    serializer_class = MenuItemSerializer
    queryset = MenuItem.objects.all()
