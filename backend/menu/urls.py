from django.urls import path

from menu.views import MenuItemList, MenuCategoryList, ItemByCategoryView, ItemTake

urlpatterns = [
    path('categories/', MenuCategoryList.as_view()),
    path('items/', MenuItemList.as_view()),
    path('items/<str:category>/', ItemByCategoryView.as_view()),
    path('take_item/<int:pk>/', ItemTake.as_view()),
]
