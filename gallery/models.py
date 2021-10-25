from django.db import models

# Create your models here.


class Photo(models.Model):
    """ Фото """
    image = models.ImageField()

    def __str__(self):
        return str(self.pk)


class Gallery(models.Model):
    """ Галерея """
    photos = models.ManyToManyField(Photo, related_name="gallery_photo")

    def __str__(self):
        return str(self.pk)
