from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Freelancer(models.Model):
    languages = (
        ('Python', 'JavaScript'),
        ('Java', 'PHP'),
        ('Ruby', 'C'),
        ('C++', 'Android'),
        ('Flutter', 'C#'),)

    name = models.CharField(max_length=255)
    email = models.EmailField()
    programming_languages= models.CharField(max_length=20, choices=languages)
    phone = models.CharField(max_length=20)
    picture = models.ImageField(upload_to='uploads/', blank=True, null=True)
    qualification = models.CharField( max_length=255)
    registrationDate= models.DateTimeField(auto_now_add=True)
    create_by = models.OneToOneField(User, related_name='vendor', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Post(models.Model):
    freelancer = models.ForeignKey(Freelancer, related_name='post', on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    description=models.CharField(max_length=255)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)

    def __str__(self):
        return self.title

class Comment(models.Model):
    freelancer = models.ForeignKey(Freelancer, related_name='comment', on_delete=models.CASCADE)
    message = models.CharField(max_length=255)
    image = models.ImageField(upload_to='uploads/', blank=True, null=True)

    def __str__(self):
        return self.message