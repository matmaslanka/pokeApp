# Cache
Dodałem cache w settings.py żeby nie pobierać pokemonów za każdym razem:

### Caches to avoid downloading data every time
`CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
        'LOCATION': 'unique-snowflake',
    }
}`

## do pokemon.py dodałem obsługę:

### Ustawienie lokalizacji cache (np. wewnątrz katalogu cache projektu)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
cache.API_CACHE = os.path.join(BASE_DIR, 'cache', 'pokebase_cache')

### Tutaj jeszcze można dodać obsługę wyjątków

Trzeba zaimportować w views.py:
- from django.core.cache import cache
