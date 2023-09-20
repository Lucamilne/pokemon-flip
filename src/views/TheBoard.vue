<template>
  <main class="mx-auto sm:w-full md:w-1/2">
    <TheGrid />
  </main>
</template>

<script>
import TheGrid from '../components/TheGrid.vue'

export default {
  name: 'TheBoard',
  components: {
    TheGrid
  },
  data: () => ({
    pokemonSpecies: []
  }),
  mounted() {
    fetch('https://pokeapi.co/api/v2/generation/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
      })
      .then(data => {
        console.log(data.pokemon_species.map(p => p.name))
        this.pokemonSpecies = data.pokemon_species;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }
}

</script>
