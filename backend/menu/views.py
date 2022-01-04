from rest_framework import generics

from menu.models import MenuItem, MenuCategory
from menu.serializers import MenuItemSerializer, MenuCategorySerializer


class MenuCategoryList(generics.ListAPIView):
    serializer_class = MenuCategorySerializer
    queryset = MenuCategory.objects.all()


class MenuItemList(generics.ListAPIView):
    serializer_class = MenuItemSerializer
    queryset = MenuItem.objects.all()


class ItemByCategoryView(generics.ListAPIView):
    serializer_class = MenuItemSerializer

    def get_queryset(self):
        search_string = self.kwargs['category']
        category_id = MenuCategory.objects.get(name=search_string)
        return MenuItem.objects.filter(category=category_id)

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

      
class ItemTake(generics.RetrieveUpdateAPIView):
    serializer_class = MenuItemSerializer
    queryset = MenuItem.objects.all()
