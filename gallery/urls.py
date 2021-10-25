from django.urls import path

from . import views

urlpatterns = [
    path('photo/', views.CreatePhotoListView.as_view()),
    path('photo/create', views.CreatePhotoListView.as_view()),
    path('photo/<int:pk>/', views.DetailPhotoView.as_view()),
    path('gallery/', views.GalleryListView.as_view()),
    path('gallery/create', views.CreateGalleryListView.as_view()),
    path('gallery/<int:pk>/', views.DetailGalleryView.as_view()),
]