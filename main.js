// Function to fetch data from the PokeAPI
async function fetchPokemonData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();

        const pokemonList = data.results;

        const cards = document.querySelectorAll('.card');
        for (let i = 0; i < pokemonList.length; i++) {
            const name = pokemonList[i].name;
            const card = cards[i];
            const paragraph = card.querySelector('p');
            paragraph.textContent = name.charAt(0).toUpperCase() + name.slice(1);

            // Add an event listener to the "Detail" button
            const detailButton = card.querySelector('.button');
            detailButton.addEventListener('click', () => {
                // Construct the URL for the Pokemon detail page
                const detailUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
                // Open the URL in a new tab
                window.open(detailUrl, '_blank');
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchPokemonData();
