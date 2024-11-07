import pokebase as pb
from pokebase import cache
import os

# Ustawienie lokalizacji cache (np. wewnątrz katalogu cache projektu)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cache.API_CACHE = os.path.join(BASE_DIR, 'cache', 'pokebase_cache')

class Pokemon:
    def __init__(self, id):
        self.id = id
        self.name = pb.pokemon(id).name.title()
        self.sprite_url = pb.SpriteResource('pokemon', id).url

    def __repr__(self):
        return f'{self.name} has an ID:{self.id}'
#
#
# bulbasaur = Pokemon(1)
#
# print(bulbasaur)
# pokemons = [{'name': pb.pokemon(i), 'url': pb.SpriteResource('pokemon', i).url} for i in range(1, 20)]
#
# pokemons = [Pokemon(i) for i in range(1, 20)]
#
# print(pokemons)