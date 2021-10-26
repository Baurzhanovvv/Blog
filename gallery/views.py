from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions

from gallery.models import Photo, Gallery
from gallery.serializers import PhotoSerializer, GallerySerializer, CreateGallerySerializer


class CreatePhotoListView(generics.ListCreateAPIView):
    serializer_class = PhotoSerializer
    queryset = Photo.objects.all()
    permission_classes = (permissions.IsAdminUser, permissions.IsAuthenticatedOrReadOnly)


class DetailPhotoView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PhotoSerializer
    queryset = Photo.objects.all()
    permission_classes = (permissions.IsAdminUser,)


class GalleryListView(generics.ListAPIView):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CreateGalleryListView(generics.CreateAPIView):
    serializer_class = CreateGallerySerializer
    queryset = Gallery.objects.all()
    permission_classes = (permissions.IsAdminUser,)


class DetailGalleryView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()
    permission_classes = (permissions.IsAdminUser,)
