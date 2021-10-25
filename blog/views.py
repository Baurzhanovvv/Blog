from django.shortcuts import render

# Create your views here.
from djoser import permissions
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


class IsUser(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        return obj.user == request.user


class Logout(APIView):

    def get(self, request, format=None):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)