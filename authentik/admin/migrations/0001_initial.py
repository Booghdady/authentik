# Generated by Django 5.0.9 on 2024-09-26 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="VersionHistory",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True, primary_key=True, serialize=False, verbose_name="ID"
                    ),
                ),
                ("timestamp", models.DateTimeField(auto_now_add=True)),
                ("version", models.TextField()),
                ("build", models.TextField()),
            ],
            options={
                "verbose_name": "Version history",
                "verbose_name_plural": "Version history",
                "ordering": ("-timestamp",),
            },
        ),
    ]