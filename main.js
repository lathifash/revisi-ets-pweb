// Function to fetch data from the PokeAPI
async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const pokemonList = data.results;

        // Display Pokemon names on the respective cards
        const cards = document.querySelectorAll('.card');
        for (let i = 0; i < pokemonList.length; i++) {
            const name = pokemonList[i].name.charAt(0).toUpperCase() + pokemonList[i].name.slice(1);
            const card = cards[i];
            const paragraph = card.querySelector('p');
            paragraph.textContent = name;
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function to fetch and display Pokemon data
fetchPokemonData();
