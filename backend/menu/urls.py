from django.urls import path

from menu.views import MenuItemList

urlpatterns = [
    # path('categories/', ),
    path('items/', MenuItemList.as_view()),
]
