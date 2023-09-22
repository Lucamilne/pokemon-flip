const pokemonList = Object.keys(pokemon.data);
const obj = pokemon.data;

for (const pokemon of pokemonList) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Extract the types from the response
            const types = data.types.map((typeData) => typeData.type.name);

            // Log or use the types as needed
            delete obj[pokemon].type
            obj[pokemon].types = types;
        })
}