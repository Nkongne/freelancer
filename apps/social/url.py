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

router=routers.DefaultRouter()
router.register('freelancer',views.FreelancerViewSet)
router.register('post',views.PostViewSet)
router.register('comment',views.CommentViewSet)
schema_view = get_schema_view(title='Server Monitoring API',url='http://0.0.0.0:8000/api/',renderer_classes=[JSONOpenAPIRenderer])

urlpatterns = [

    path('openapi', get_schema_view(title="freelancer",description="API for all things …",version="1.0.0" ), name='openapi-schema'),

    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    re_path(r'^/freelancer/$', views.freelancer_list),
    re_path(r'^/freelancer/([0-9])$', views.freelancer_detail),
    re_path(r'^/post/$', views.post_list),
    re_path(r'^/post/?P[0-9]+$', views.post_detail),
    re_path(r'^/comment/$', views.comment_list),
    re_path(r'^/comment/?P[0-9]+$', views.comment_detail),
]