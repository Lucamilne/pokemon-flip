<template>
  <main class="mx-auto sm:w-full md:w-1/2">
    <TheGrid :cards-to-deal="cardsToDeal" />
  </main>
</template>

<script>
import TheGrid from '../components/TheGrid.vue';
import pokemon from "@/assets/data/pokemon-species.js";

export default {
  name: 'TheBoard',
  components: {
    TheGrid
  },
  data: () => ({
    cardsToDeal: []
  }),
  mounted() {
    const arrayOfPokemon = Object.keys(pokemon.data);
    const shuffledArray = arrayOfPokemon.slice().sort(() => Math.random() - 0.5).map(pokemonName => ({ name: pokemonName, ...pokemon.data[pokemonName] }));
    const firstArray = shuffledArray.slice(0, 5);
    const secondArray = shuffledArray.slice(5, 10);
    this.cardsToDeal = [firstArray, secondArray];
  }
}

</script>
