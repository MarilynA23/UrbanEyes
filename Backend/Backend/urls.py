"""
URL configuration for Backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from .views import IssueListView, UserDetailsView, SingleUser, SingleUserIssue, CityIssue, UserDetailsUpdateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('issues/', IssueListView.as_view(), name='issue-list'),
    path('userdetails/', UserDetailsView.as_view(), name='user-details'),
    path('user/<str:name>', SingleUser.as_view(), name='single-user'),
    path('userissue/<str:name>', SingleUserIssue.as_view(), name='single-user-issue'),
    path('cityissue/<str:name>', CityIssue.as_view(), name='city-issue'),
    path('updateuserdetails/<str:name>', UserDetailsUpdateView.as_view(), name='user-details-update')
]
