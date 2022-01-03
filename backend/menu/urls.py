from django.urls import path

from menu.views import MenuItemList, MenuCategoryList

urlpatterns = [
    path('categories/', MenuCategoryList.as_view()),
    path('items/', MenuItemList.as_view()),
]
