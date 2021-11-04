from django.db.models import Q
from django.shortcuts import render

# Create your views here.
from rest_framework import status, generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.models import Profile, Category, Post, Comment
from blog.serializers import ProfileSerializer, CategorySerializer, PostSerializer, CreatePostSerializer, \
    CreateCommentSerializer, CreateProfileSerializer


class IsUser(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class Logout(APIView):

    def get(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)


class ProfileListView(generics.ListCreateAPIView):
    serializer_class = CreateProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = (permissions.AllowAny,)

    def get_queryset(self):
        queryset = Profile.objects.all()
        params = self.request.query_params

        user = params.get('user', None)

        if user:
            queryset = queryset.filter(user=user)

        return queryset


class UpdateProfileView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CreateProfileSerializer
    permission_classes = (IsUser,)
    queryset = Profile.objects.all()


class DetailProfileView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (IsUser,)
    queryset = Profile.objects.all()


class CategoryListView(generics.ListCreateAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = (permissions.IsAuthenticatedOrReadOnly, )


class PostListView(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Post.objects.filter(draft=False)
        params = self.request.query_params

        category = params.get('category', None)
        title = params.get('title', None)

        if category:
            queryset = queryset.filter(category__id=category)

        if title:
            queryset = queryset.filter(title__icontains=title)

        return queryset


class CreatePostView(generics.CreateAPIView):
    serializer_class = CreatePostSerializer
    queryset = Post.objects.filter(draft=False)
    permission_classes = (permissions.IsAdminUser,)


class DetailPostView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.filter(draft=False)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class UpdatePostView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CreatePostSerializer
    queryset = Post.objects.filter(draft=False)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CreateCommentView(generics.CreateAPIView):
    serializer_class = CreateCommentSerializer
    queryset = Comment.objects.all()
    permission_classes = (permissions.IsAuthenticated,)
