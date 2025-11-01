from django.shortcuts import render


def home(request):
    """Home page view"""
    return render(request, 'home.html')


def about(request):
    """About page view"""
    return render(request, 'about.html')


def practice(request):
    """Practice page view"""
    return render(request, 'practice.html')


def schedule(request):
    """Schedule page view"""
    return render(request, 'schedule.html')


def memberships(request):
    """Memberships page view"""
    return render(request, 'memberships.html')


def contact(request):
    """Contact page view"""
    return render(request, 'contact.html')
