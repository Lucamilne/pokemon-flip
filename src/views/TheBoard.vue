<template>
  <main class="h-screen flex justify-between items-center px-4 bg-[url('@/assets/textures/background.png')] bg-center bg-cover">
    <Hand :cards="cardsToDeal[0]" class="basis-44" :isPlayerHand="true" ref="player-one-hand" />
    <Grid class="basis-1/2" :cells="cells" ref="grid" />
    <Hand :cards="cardsToDeal[1]" class="basis-44" :isPlayerHand="false" ref="player-two-hand" />
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
    cardsToDeal: [],
    statModifier: 20,
    cells: {
      A1: {
        class: 'border-r-0 border-b-0',
        childRef: null,
        element: null,
        adjacentCells: ['A2', 'B2']
      },
      A2: {
        class: 'border-r-0 border-b-0',
        childRef: null,
        element: null,
        adjacentCells: ['A1', 'B2', 'A3']
      },
      A3: {
        class: 'border-b-0',
        childRef: null,
        element: null,
        adjacentCells: ['B2', 'C3']
      },
      B1: {
        class: 'border-b-0 border-r-0',
        childRef: null,
        element: null,
        adjacentCells: ['A1', 'B2', 'C1']
      },
      B2: {
        class: 'border-b-0 border-r-0',
        childRef: null,
        element: null,
        adjacentCells: ['B1', 'A2', 'B3', 'C2']
      },
      B3: {
        class: 'border-b-0',
        childRef: null,
        element: null,
        adjacentCells: ['B2', 'A3', 'C3']
      },
      C1: {
        class: 'border-r-0',
        childRef: null,
        element: null,
        adjacentCells: ['B1', 'C2']
      },
      C2: {
        class: 'border-r-0',
        childRef: null,
        element: null,
        adjacentCells: ['C1', 'B2', 'C3']
      },
      C3: {
        class: '',
        childRef: null,
        element: null,
        adjacentCells: ['C2', 'B3']
      },
    }
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
      let statSum = Math.round(currentPokemon.stats / this.statModifier);
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

      // manipulate mirror of dragged card
      droppable.on('mirror:create', (event) => {
        const mirror = event.data.source;
        mirror.classList.add('z-50');
      });

      let childRef;
      let cellTarget;

      droppable.on("droppable:dropped", (event) => {
        if (!event.data.dropzone.attributes['data-cell']) {
          return;
        }

        childRef = event.data.dragEvent.data.source.attributes['data-name'].value;
        cellTarget = event.data.dropzone.attributes['data-cell'].value;
      });

      droppable.on("drag:stop", (event) => {
        console.log(childRef, cellTarget)
      });

      // droppable.on('droppable:dropped', (event) => {

      //   if (event.data.dropzone.attributes['data-cell'] === undefined) {
      //     return;
      //   }

      //   // this is currently triggering before a user has dropped a card.
      //   // might have to debounce this using lodash
      //   const childRef = event.data.dragEvent.data.source.attributes['data-name'].value;
      //   const cellTarget = event.data.dropzone.attributes['data-cell'].value;

      //   this.cells[cellTarget].childRef = childRef;
      //   console.log(this.$refs)
      // });
    });

  }
}

</script>