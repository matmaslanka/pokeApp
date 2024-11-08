// Znajdź wszystkie elementy li z klasą .pokedex-bar
const pokemonItems = document.querySelectorAll('.pokedex-bar');

// Przypisz funkcję do każdego elementu
pokemonItems.forEach(item => {
    item.addEventListener('click', () => {
        // Pobierz nazwę Pokemona z atrybutu data-pokemon
        const pokemonName = item.getAttribute('data-pokemon-name');
        const pokemonOrder = item.getAttribute('data-pokemon-order');
        const pokemonImage = item.querySelector('img').src;
        const pokemonHp = item.getAttribute('data-pokemon-hp');
        const pokemonAttack = item.getAttribute('data-pokemon-attack');
        const pokemonDefense = item.getAttribute('data-pokemon-defense');
        const pokemonSpecialAttack = item.getAttribute('data-pokemon-special_attack');
        const pokemonSpecialDefense = item.getAttribute('data-pokemon-special_defense');
        const pokemonSpeed = item.getAttribute('data-pokemon-speed');

        const pokemonTypeImage =item.getAttribute('data-pokemon-type-image');

        const cleanPokemonTypeImage = pokemonTypeImage
            .replace('[', '')        // Usuwamy znak '['
            .replace(']', '')        // Usuwamy znak ']'
            .replace(/'/g, '')       // Usuwamy wszystkie pojedyncze cudzysłowy
            .split(',');             // Rozdzielamy po przecinkach

        const pokemonWeaknessesImage =item.getAttribute('data-pokemon-weaknesses-image');

        const cleanPokemonWeaknessesImage = pokemonWeaknessesImage
                .replace('[', '')        // Usuwamy znak '['
                .replace(']', '')        // Usuwamy znak ']'
                .replace(/'/g, '')       // Usuwamy wszystkie pojedyncze cudzysłowy
                .split(',');             // Rozdzielamy po przecinkach

        // Wyświetl informacje o Pokemonie w sekcji .pokemon-info
        document.getElementById('pokemon-name').textContent = pokemonName;
        document.getElementById('pokemon-order').textContent = pokemonOrder;
        document.getElementById('pokemon-image').src = pokemonImage;
        document.getElementById('pokemon-image').alt = `${pokemonName} image`;
        document.getElementById('pokemon-type').textContent = 'Type';
        document.getElementById('pokemon-weaknesses').textContent = 'Weaknesses';
        document.getElementById('pokemon-hp-desc').textContent = 'hp: ';
        document.getElementById('pokemon-hp').textContent = pokemonHp;
        document.getElementById('pokemon-attack').textContent = pokemonAttack;
        document.getElementById('pokemon-attack-desc').textContent = 'attack: ';
        document.getElementById('pokemon-defense').textContent = pokemonDefense;
        document.getElementById('pokemon-defense-desc').textContent = 'defense: ';
        document.getElementById('pokemon-special_attack').textContent = pokemonSpecialAttack;
        document.getElementById('pokemon-special_attack-desc').textContent = 'special_attack: ';
        document.getElementById('pokemon-special_defense').textContent = pokemonSpecialDefense;
        document.getElementById('pokemon-special_defense-desc').textContent = 'special_defense: ';
        document.getElementById('pokemon-speed').textContent = pokemonSpeed;
        document.getElementById('pokemon-speed-desc').textContent = 'speed: ';

        const pokemonTypeImageList = document.getElementById('pokemon-type-img-list');
        pokemonTypeImageList.innerHTML = '';

        cleanPokemonTypeImage.forEach(typeImg => {
            const li = document.createElement('li');
            const img = document.createElement('img');

            img.src = typeImg.trim();
            img.alt = 'Type image';

            li.appendChild(img);
            pokemonTypeImageList.appendChild(li);

        });

        const pokemonWeaknessesImageList = document.getElementById('pokemon-weaknesses-img-list');
        pokemonWeaknessesImageList.innerHTML = '';

        cleanPokemonWeaknessesImage.forEach(weaknessImg => {
            const li = document.createElement('li');
            const img = document.createElement('img');

            img.src = weaknessImg.trim();
            img.alt = 'Weaknesses image';

            li.appendChild(img);
            pokemonWeaknessesImageList.appendChild(li);

        });

    });
});