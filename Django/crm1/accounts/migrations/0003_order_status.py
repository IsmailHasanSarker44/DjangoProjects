# Generated by Django 3.1.7 on 2021-04-05 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_order_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('Pending', 'Pending'), ('Out of delivery', 'Out of delivery'), ('Delivered', 'Delivered')], max_length=200, null=True),
        ),
    ]
