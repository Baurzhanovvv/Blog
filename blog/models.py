from django.contrib.auth.models import User
from django.db import models

# Create your models here.


class Profile(models.Model):
    """ Профиль """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    liked_post = models.ManyToManyField('Post', related_name="profile_post")

    def __str__(self):
        return self.user.first_name


class Category(models.Model):
    """ Категория """
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Post(models.Model):
    """ Посты """
    author = models.ForeignKey(User, default="admin", on_delete=models.CASCADE)
    title = models.CharField(max_length=120)
    text = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    gallery = models.ForeignKey('gallery.Gallery', on_delete=models.CASCADE)
    comment = models.ManyToManyField('Comment', blank=True)
    draft = models.BooleanField(default=False)

    def __str__(self):
        return self.title


class Comment(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    text = models.TextField()
    date_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.pk)
