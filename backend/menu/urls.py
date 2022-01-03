from django.urls import path

from menu.views import MenuItemList, MenuCategoryList, ItemByCategoryView

urlpatterns = [
    path('categories/', MenuCategoryList.as_view()),
    path('items/', MenuItemList.as_view()),
    path('items/<str:category>/', ItemByCategoryView.as_view()),
]
