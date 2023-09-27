<template>
  <main class="h-screen flex justify-between items-center px-4 bg-[url('@/assets/textures/background.png')] bg-center bg-cover">
    <div class="grid grid-cols-1 gap-2 cells">
      <div class="dropzone aspect-square w-40" v-for="(pokemonCard, index) in cardsToDeal[0]">
        <Card :pokemon-card="pokemonCard" :isPlayerCard="true" :index="index" :data-stats="pokemonCard.stats" :data-types="pokemonCard.types" :data-name="pokemonCard.name" :ref="pokemonCard.name" />
      </div>
    </div>
    <Grid class="basis-1/2" :cells="cells" ref="grid" />
    <div class="grid grid-cols-1 gap-2 cells">
      <div class="dropzone aspect-square  w-40" v-for="(pokemonCard, index) in cardsToDeal[1]">
        <Card :pokemon-card="pokemonCard" :isPlayerCard="false" :index="index" :data-stats="pokemonCard.stats" :data-types="pokemonCard.types" :data-name="pokemonCard.name" :ref="pokemonCard.name" />
      </div>
    </div>
  </main>
</template>

<script>
import Grid from '../components/Grid.vue';
import pokemon from "@/assets/data/pokemon-species.js";
import { Plugins, Droppable } from '@shopify/draggable';
import Card from '../components/Card.vue'

export default {
  name: 'TheBoard',
  components: {
    Grid,
    Card
  },
  data: () => ({
    cardsToDeal: [],
    statModifier: 20,
    cells: {
      A1: {
        class: 'border-r-0 border-b-0',
        pokemonCardRef: null,
        element: null,
        adjacentCells: [null, null, 'A2', 'B1']
      },
      A2: {
        class: 'border-r-0 border-b-0',
        pokemonCardRef: null,
        element: null,
        adjacentCells: ['A1', null, 'A3', 'B2']
      },
      A3: {
        class: 'border-b-0',
        pokemonCardRef: null,
        element: null,
        adjacentCells: ['A2', null, null, 'B3']
      },
      B1: {
        class: 'border-b-0 border-r-0',
        pokemonCardRef: null,
        element: null,
        adjacentCells: [null, 'A1', 'B2', 'C1']
      },
      B2: {
        class: 'border-b-0 border-r-0',
        pokemonCardRef: null,
        element: null,
        adjacentCells: ['B1', 'A2', 'B3', 'C2']
      },
      B3: {
        class: 'border-b-0',
        pokemonCardRef: null,
        element: null,
        adjacentCells: ['B2', 'A3', null, 'C3']
      },
      C1: {
        class: 'border-r-0',
        pokemonCardRef: null,
        element: null,
        adjacentCells: [null, 'B1', 'C2', null]
      },
      C2: {
        class: 'border-r-0',
        pokemonCardRef: null,
        element: null,
        adjacentCells: ['C1', 'B2', 'C3', null]
      },
      C3: {
        class: '',
        pokemonCardRef: null,
        element: null,
        adjacentCells: ['C2', 'B3', null, null]
      },
    }
  }),
  methods: {
    setRandomCards() {
      const shuffledArray = Object.keys(pokemon.data)
        .sort(() => Math.random() - 0.5);

      const createCard = (pokemonName) => {
        const stats = this.allocateStatsByPokemon(pokemonName);
        return {
          name: pokemonName,
          types: pokemon.data[pokemonName].types,
          id: pokemon.data[pokemonName].id,
          stats: stats,
          originalStats: stats, // A copy of stats is kept to track modifications
        };
      };

      const firstArray = shuffledArray.slice(0, 5).map(createCard);
      const secondArray = shuffledArray.slice(5, 10).map(createCard);

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

      let attackingPokemonCardAttributes;
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

        attackingPokemonCardAttributes = event.data.dragEvent.data.source.attributes;
        cellTarget = event.data.dropzone.attributes['data-cell'].value;
      });

      droppable.on("drag:stop", () => {
        // most of the calculations on card placement are done here
        const attackingPokemonName = attackingPokemonCardAttributes['data-name'].value
        this.cells[cellTarget].pokemonCardRef = attackingPokemonName; // declare the attacking card

        this.cells[cellTarget].adjacentCells.forEach((cell, index) => {
          if (!cell || !this.cells[cell].pokemonCardRef) {
            return;
          }

          const defendingCardRef = this.$refs[this.cells[cell].pokemonCardRef]
          const defendingStatIndex = this.cells[cell].adjacentCells.indexOf(cellTarget);
          const defendingStat = defendingCardRef[0].pokemonCard.stats[defendingStatIndex];
          const attackingStat = parseInt(attackingPokemonCardAttributes['data-stats'].value.split(',')[index], 10);
          const isPlayerCardAttacking = JSON.parse(attackingPokemonCardAttributes['data-is-player-card'].value)

          if (attackingStat > defendingStat && defendingCardRef[0].internalIsPlayerCard !== isPlayerCardAttacking) {
            defendingCardRef[0].toggleIsPlayerCard();
          }
        })
      });
    });

  }
}

</script>