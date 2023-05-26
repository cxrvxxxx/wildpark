from django.urls import path

from . import views

urlpatterns = [
    path("logo/", views.logo, name="logo"),
]
