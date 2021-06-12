from rest_framework import serializers
from .models import Freelancer,Post,Comment

class FreelancerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Freelancer
        fields='__all__'


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'


