from rest_framework import serializers

from gallery.models import Photo, Gallery


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ('__all__',)


class GallerySerializer(serializers.ModelSerializer):
    photos = PhotoSerializer()

    class Meta:
        model = Gallery
        fields = ('__all__',)


class CreateGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ('__all__',)
