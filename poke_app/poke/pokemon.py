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
        self.sprite_url = pb.SpriteResource('pokemon', id, other=True, official_artwork=True).url
        self.order = f'#{id:04}'
        self.types = [pb.pokemon(id).types[i].type.name for i in range(len(pb.pokemon(id).types))]

        weaknesses_all = [
            pb.type_(pokemon_type).damage_relations.double_damage_from[i].name
            for pokemon_type in self.types
            for i in range(len(pb.type_(pokemon_type).damage_relations.double_damage_from))
        ]

        resistances = [
            pb.type_(pokemon_type).damage_relations.half_damage_from[i].name
            for pokemon_type in self.types
            for i in range(len(pb.type_(pokemon_type).damage_relations.half_damage_from))]

        self.weaknesses = set(weaknesses_all).difference(set(resistances))

        self.sprite_type_url = []

        for pokemon_type in self.types:
            generation_viii = getattr(pb.type_(pokemon_type).sprites, 'generation-viii')
            brilliant_diamond_and_shining_pearl = getattr(generation_viii, 'brilliant-diamond-and-shining-pearl')
            self.sprite_type_url.append(brilliant_diamond_and_shining_pearl.name_icon)

        self.sprite_weaknesses_url = []

        for pokemon_weaknesses in self.weaknesses:
            generation_viii = getattr(pb.type_(pokemon_weaknesses).sprites, 'generation-viii')
            brilliant_diamond_and_shining_pearl = getattr(generation_viii, 'brilliant-diamond-and-shining-pearl')
            self.sprite_weaknesses_url.append(brilliant_diamond_and_shining_pearl.name_icon)

        self.hp = pb.pokemon(id).stats[0].base_stat
        self.attack = pb.pokemon(id).stats[1].base_stat
        self.defense = pb.pokemon(id).stats[2].base_stat
        self.special_attack = pb.pokemon(id).stats[3].base_stat
        self.special_defense = pb.pokemon(id).stats[4].base_stat
        self.speed = pb.pokemon(id).stats[5].base_stat

    def __repr__(self):
        return f'{self.name} has an ID:{self.id}'


bulba = Pokemon(1)
bylbasa = {
    'name': bulba.name,
    'types': bulba.types,
    'weaknesses': bulba.weaknesses,
    'sprites': bulba.sprite_type_url,
    'sprites_weaknesses': bulba.sprite_weaknesses_url,
    'hp': bulba.hp
}
print(bylbasa)

