from .pokemon import Pokemon
from django.core.cache import cache

from django.shortcuts import render
from django.views import View
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView


# Create your views here.
class HomeView(TemplateView):
    template_name = "poke/home.html"


class PokedexView(TemplateView):
    template_name = "poke/pokedex.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        # Pobranie listy Pokémonów z cache, jeśli jest dostępna
        pokemons = cache.get('pokemons_list')
        if not pokemons:
            # Jeśli cache jest pusty, pobierz dane z API i zapisz w cache na 1 godzinę (3600 sekund)
            pokemons = [Pokemon(i) for i in range(1, 13)]
            cache.set('pokemons_list', pokemons, 3600)

        # Przekazanie listy Pokémonów do kontekstu
        context['pokemons'] = pokemons
        return context
