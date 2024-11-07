// Znajdź wszystkie elementy li z klasą .pokedex-bar
const pokemonItems = document.querySelectorAll('.pokedex-bar');

// Przypisz funkcję do każdego elementu
pokemonItems.forEach(item => {
    item.addEventListener('click', () => {
        // Pobierz nazwę Pokemona z atrybutu data-pokemon
        const pokemonName = item.getAttribute('data-pokemon');
        const pokemonImage = item.querySelector('img').src;

        // Wyświetl informacje o Pokemonie w sekcji .pokemon-info
        document.getElementById('pokemon-name').textContent = pokemonName;
        document.getElementById('pokemon-image').src = pokemonImage;
        document.getElementById('pokemon-image').alt = `${pokemonName} image`;
    });
});

// Ustaw domyślne wartości po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('pokemon-name').textContent = "Wybierz";
    document.getElementById('pokemon-image').src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    document.getElementById('pokemon-image').alt = "Pokemon image";
});