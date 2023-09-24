<template>
  <main class="h-screen flex justify-between items-center px-4 bg-[url('@/assets/textures/background.png')] bg-center bg-cover">
    <Hand :cards="cardsToDeal[0]" class="basis-44" :isPlayerHand="true" />
    <Grid class="basis-1/2" />
    <Hand :cards="cardsToDeal[1]" class="basis-44" :isPlayerHand="false" />
  </main>
</template>

<script>
import Grid from '../components/Grid.vue';
import Hand from '../components/Hand.vue';
import pokemon from "@/assets/data/pokemon-species.js";
import { Plugins, Droppable } from '@shopify/draggable';

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
      const firstArray = shuffledArray.slice(0, 5).map(pokemonName => ({ name: pokemonName, types: pokemon.data[pokemonName].types, id: pokemon.data[pokemonName].id, stats: this.allocateStatsByPokemon(pokemonName) }));
      const secondArray = shuffledArray.slice(5, 10).map(pokemonName => ({ name: pokemonName, types: pokemon.data[pokemonName].types, id: pokemon.data[pokemonName].id, stats: this.allocateStatsByPokemon(pokemonName) }));
      this.cardsToDeal = [firstArray, secondArray];
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
      const currentPokemon = pokemon.data[pokemonName];
      let statSum = Math.round(currentPokemon.stats / 17);
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

    this.$nextTick(() => {
      const cells = document.querySelectorAll('.cells');

      const droppable = new Droppable(cells, {
        draggable: '.card',
        dropzone: '.dropzone',
        mirror: {
          constrainDimensions: true, // keeps the card aspect ratio
          appendTo: 'body',
        },
        plugins: [Plugins.ResizeMirror],
      });

      droppable.on('drag:start', (event) => {
        //
      });

      droppable.on('drag:stop', (event) => {
        //
      });

      // manipulate mirror of dragged card
      droppable.on('mirror:create', (event) => {
        const mirror = event.data.source;
        mirror.classList.add('z-50');
      });

      droppable.on('droppable:dropped', (event) => {
        if (event.dropzone.children.length > 0) {
          event.cancel();
        }
      });
    });

  }
}

</script>