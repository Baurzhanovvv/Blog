from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/token/', TokenObtainPairView.as_view(), name='token_obtain_view'),
    path('auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh_view'),

    path('profile/', views.ProfileListView.as_view()),
    path('profile/create/', views.ProfileListView.as_view()),
    path('profile/<int:pk>/', views.DetailProfileView.as_view()),

    path('category/', views.CategoryListView.as_view()),
    path('category/create/', views.CategoryListView.as_view()),

    path('post/', views.PostListView.as_view()),
    path('post/create/', views.CreatePostView.as_view()),
    path('post/<int:pk>/', views.DetailPostView.as_view()),

    path('comment/create/', views.CreateCommentView.as_view())
]
