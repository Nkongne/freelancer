from django.contrib import admin
from .models import Freelancer,Post,Comment
# Register your models here.
admin.site.register(Freelancer)
admin.site.register(Post)
admin.site.register(Comment)