from django.contrib import admin

from menu.models import MenuItem, MenuCategory

admin.site.register(MenuCategory)
admin.site.register(MenuItem)
