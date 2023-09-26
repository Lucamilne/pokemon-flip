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
        pokemonCardId: null,
        element: null,
        adjacentCells: [null, null, 'A2', 'B1']
      },
      A2: {
        class: 'border-r-0 border-b-0',
        pokemonCardId: null,
        element: null,
        adjacentCells: ['A1', null, 'A3', 'B2']
      },
      A3: {
        class: 'border-b-0',
        pokemonCardId: null,
        element: null,
        adjacentCells: ['A2', null, null, 'B3']
      },
      B1: {
        class: 'border-b-0 border-r-0',
        pokemonCardId: null,
        element: null,
        adjacentCells: [null, 'A1', 'B2', 'C1']
      },
      B2: {
        class: 'border-b-0 border-r-0',
        pokemonCardId: null,
        element: null,
        adjacentCells: ['B1', 'A2', 'B3', 'C2']
      },
      B3: {
        class: 'border-b-0',
        pokemonCardId: null,
        element: null,
        adjacentCells: ['B2', 'A3', null, 'C3']
      },
      C1: {
        class: 'border-r-0',
        pokemonCardId: null,
        element: null,
        adjacentCells: [null, 'B1', 'C2', null]
      },
      C2: {
        class: 'border-r-0',
        pokemonCardId: null,
        element: null,
        adjacentCells: ['C1', 'B2', 'C3', null]
      },
      C3: {
        class: '',
        pokemonCardId: null,
        element: null,
        adjacentCells: ['C2', 'B3', null, null]
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

      let cardName;
      let cellTarget;

      droppable.on('drag:start', (event) => {
        if (event.data.sourceContainer.id === 'grid') {
          event.cancel();
        }
      })

      droppable.on("droppable:dropped", (event) => {
        if (!event.data.dropzone.attributes['data-cell']) {
          event.cancel();
          return;
        }

        cardName = event.data.dragEvent.data.source.attributes['data-name'].value;
        cellTarget = event.data.dropzone.attributes['data-cell'].value;
      });

      droppable.on("drag:stop", () => {
        this.cells[cellTarget].pokemonCardId = cardName; // declare the occupying card

        this.cells[cellTarget].adjacentCells.forEach(cell => {
          if (!cell || !this.cells[cell].pokemonCardId) {
            return;
          }

          const defendingCard = document.getElementById(this.cells[cell].pokemonCardId);
          const defendingStatIndex = this.cells[cell].adjacentCells.indexOf(cellTarget);
          const defendingStat = defendingCard.getAttribute("data-stats").split(',')[defendingStatIndex];

          console.log(defendingStat)
        })
      });
    });

  }
}

</script>