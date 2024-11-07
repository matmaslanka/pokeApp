from django.urls import path

from . import views

urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('pokedex', views.PokedexView.as_view(), name='pokedex')
]
