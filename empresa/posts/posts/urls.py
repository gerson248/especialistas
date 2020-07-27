from django.urls import path

from . import views

app_name = 'posts'

urlpatterns = [
        path('',views.IndexView.as_view(),name='index'),
        path('<int:pk>/',views.DetailView.as_view(),name='detail'),
        path('register/', views.register_consortium, name='register'),
        path('registerClient/', views.register_client, name='registerClient'),
]
