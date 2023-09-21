<template>
  <main class="h-screen flex justify-between items-center mx-4">
    <Hand :cards="cardsToDeal[0]" class="basis-44"/>
    <Grid class="basis-1/2" />
    <Hand :cards="cardsToDeal[1]"  class="basis-44" />
  </main>
</template>

<script>
import Grid from '../components/Grid.vue';
import Hand from '../components/Hand.vue';
import pokemon from "@/assets/data/pokemon-species.js";

export default {
  name: 'TheBoard',
  components: {
    Grid,
    Hand
  },
  data: () => ({
    cardsToDeal: []
  }),
  methods: {
    setRandomCards() {
      const arrayOfPokemon = Object.keys(pokemon.data);
      const shuffledArray = arrayOfPokemon.slice().sort(() => Math.random() - 0.5);
      const firstArray = shuffledArray.slice(0, 5).map(pokemonName => ({ name: pokemonName, type: pokemon.data[pokemonName].type, id: pokemon.data[pokemonName].id, stats: this.allocateStatsByPokemon(pokemonName) }));
      const secondArray = shuffledArray.slice(5, 10).map(pokemonName => ({ name: pokemonName, type: pokemon.data[pokemonName].type, id: pokemon.data[pokemonName].id, stats: this.allocateStatsByPokemon(pokemonName) }));
      this.cardsToDeal = [firstArray, secondArray];
    },
    randomVariance(variance) {
      if (variance === 0) {
        return 0;
      }

      return Math.floor(Math.random() * (2 * variance + 1)) - variance;
    },
    decrementRandomStat(stats) {
      const randomIndex = Math.floor(Math.random() * stats.length);

      if (stats[randomIndex] > 1) {
        stats[randomIndex] -= 1;
      } else {
        // If it's 1 or less, recursively call the function again
        this.decrementRandomStat(stats);
      }
    },
    allocateStatsByPokemon(pokemonName) {
      const pokemonTierIndex = pokemon.data[pokemonName].tier - 1;
      const statSum = pokemon.statAllocations[pokemonTierIndex] + pokemon.data[pokemonName].handicap + this.randomVariance(pokemon.data[pokemonName].variance);
      let statsToReturn = [10, 10, 10, 10];
      let numberOfIterations = statsToReturn.reduce((total, value) => total + value, 0) - statSum;

      for (let i = 0; i < numberOfIterations; i++) {
        this.decrementRandomStat(statsToReturn);
      }

      return statsToReturn;
    }
  },
  mounted() {
    this.setRandomCards();
  }
}

</script>
