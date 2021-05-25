"""freelancer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.urls import path, re_path
from rest_framework import routers
from rest_framework.schemas import get_schema_view
from apps.social import views
from django.conf.urls import url
from rest_framework.schemas.openapi import SchemaGenerator
from rest_framework.schemas import get_schema_view
from rest_framework.renderers import JSONOpenAPIRenderer


schema_view = get_schema_view(title='Server Monitoring API',url='http://0.0.0.0:8000/api/',renderer_classes=[JSONOpenAPIRenderer])

urlpatterns = [
    path('openapi', get_schema_view(title="freelancer",description="API for all things …",version="1.0.0" ), name='openapi-schema'),

    path('admin/', admin.site.urls),

    re_path(r'^api/freelancer/$', views.freelancer_list),
    re_path(r'^api/freelancer/?P[0-9]+$', views.freelancer_detail),
    re_path(r'^api/post/$', views.post_list),
    re_path(r'^api/post/?P[0-9]+$', views.post_detail),
    re_path(r'^api/comment/$', views.comment_list),
    re_path(r'^api/comment/?P[0-9]+$', views.comment_detail),
]
