# Generated by Django 3.1.4 on 2021-05-20 08:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('social', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='freelancerCommenter',
        ),
        migrations.AddField(
            model_name='comment',
            name='freelancer',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='comment', to='social.freelancer'),
            preserve_default=False,
        ),
    ]
