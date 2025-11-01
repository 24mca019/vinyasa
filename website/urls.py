from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('practice/', views.practice, name='practice'),
    path('schedule/', views.schedule, name='schedule'),
    path('memberships/', views.memberships, name='memberships'),
    path('contact/', views.contact, name='contact'),
]
