from django.contrib import admin

# Register your models here.
from gallery.models import Gallery, Photo

admin.site.register(Photo)
admin.site.register(Gallery)
