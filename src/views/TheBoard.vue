<template>
  <section class="p-8 border border-8 border-zinc-300 h-full md:flex justify-between items-center">
    <div class="grid grid-cols-2 gap-4 cells simple-container p-2">
      <div class="dropzone aspect-square bg-zinc-300 rounded-md md:w-44" v-for="(pokemonCard, index) in dealCards[0]" data-dropzone="playerHand">
        <Card :pokemon-card="pokemonCard" :isPlayerCard="true" :index="index" :data-stats="pokemonCard.stats" :data-types="pokemonCard.types" :data-name="pokemonCard.name" :ref="pokemonCard.name" />
      </div>
      <div class="aspect-square bg-zinc-300 rounded-md md:w-44">
      </div>
    </div>
    <Grid class="md:basis-1/3 aspect-square mx-8" :cells="cells" ref="grid" />
    <div class="grid grid-cols-2 gap-4 cells simple-container p-2">
      <div class="dropzone aspect-square bg-zinc-300 rounded-md md:w-44" v-for="(pokemonCard, index) in dealCards[1]" data-dropzone="opponentHand">
        <Card :pokemon-card="pokemonCard" :isPlayerCard="false" :index="index" :data-stats="pokemonCard.stats" :data-types="pokemonCard.types" :data-name="pokemonCard.name" :ref="pokemonCard.name" />
      </div>
      <div class="aspect-square bg-zinc-300 rounded-md md:w-44">
      </div>
    </div>
    <Reveal />
  </section>
</template>

<script>
import pokemon from "@/assets/data/pokemon-species.js";
import { Plugins, Droppable } from "@shopify/draggable";
import Grid from "../components/Grid.vue";
import Card from "../components/Card.vue";
import Reveal from "../components/Reveal.vue";

export default {
  name: "TheBoard",
  components: {
    Grid,
    Card,
    Reveal
  },
  data: () => ({
    cardsToDeal: [],
    cellsOccupied: 0,
    statModifier: 20,
    cells: {
      A1: {
        class: "border-r-0 border-b-0",
        pokemonCardRef: null,
        element: null,
        adjacentCells: [null, null, "A2", "B1"],
      },
      A2: {
        class: "border-r-0 border-b-0",
        pokemonCardRef: null,
        element: null,
        adjacentCells: ["A1", null, "A3", "B2"],
      },
      A3: {
        class: "border-b-0",
        pokemonCardRef: null,
        element: null,
        adjacentCells: ["A2", null, null, "B3"],
      },
      B1: {
        class: "border-b-0 border-r-0",
        pokemonCardRef: null,
        element: null,
        adjacentCells: [null, "A1", "B2", "C1"],
      },
      B2: {
        class: "border-b-0 border-r-0",
        pokemonCardRef: null,
        element: null,
        adjacentCells: ["B1", "A2", "B3", "C2"],
      },
      B3: {
        class: "border-b-0",
        pokemonCardRef: null,
        element: null,
        adjacentCells: ["B2", "A3", null, "C3"],
      },
      C1: {
        class: "border-r-0",
        pokemonCardRef: null,
        element: null,
        adjacentCells: [null, "B1", "C2", null],
      },
      C2: {
        class: "border-r-0",
        pokemonCardRef: null,
        element: null,
        adjacentCells: ["C1", "B2", "C3", null],
      },
      C3: {
        class: "",
        pokemonCardRef: null,
        element: null,
        adjacentCells: ["C2", "B3", null, null],
      },
    },
  }),
  computed: {
    dealCards() {
      return [this.cardsToDeal.slice(0, 5), this.cardsToDeal.slice(5, 10)];
    },
  },
  methods: {
    setRandomCards() {
      const shuffledArray = Object.keys(pokemon.data).sort(() => Math.random() - 0.5);

      const createCard = (pokemonName) => {
        const stats = this.allocateStatsByPokemon(pokemonName);
        const statsSum = stats.reduce((acc, cur) => acc + cur, 0);
        let rarity = 'common';

        if (statsSum >= 30) {
          rarity = 'legendary';
        } else if (statsSum >= 26) {
          rarity = 'epic';
        } else if (statsSum >= 22) {
          rarity = 'rare';
        } else if (statsSum >= 18) {
          rarity = 'uncommon';
        }

        return {
          name: pokemonName,
          types: pokemon.data[pokemonName].types,
          id: pokemon.data[pokemonName].id,
          stats: stats,
          originalStats: stats, // A copy of stats is kept to track modifications
          rarity: rarity,
          playerOwned: false // this is an unimplemented feature as of writing
        };
      };

      this.cardsToDeal = shuffledArray.slice(0, 10).map(createCard);
    },
    setRandomElementalTiles() {
      const gridCells = Object.keys(this.cells);
      const arrayOfPokemonTypes = pokemon.types.filter((type) => type !== "normal");

      gridCells.forEach((cell) => {
        if (Math.random() < 0.25 && arrayOfPokemonTypes.length > 0) {
          const randomIndex = Math.floor(Math.random() * arrayOfPokemonTypes.length);
          const randomElement = arrayOfPokemonTypes[randomIndex];
          this.cells[cell].element = randomElement;
          arrayOfPokemonTypes.splice(randomIndex, 1); // Remove the element at the randomIndex
        }
      });
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

      let numberOfIterations =
        statsToReturn.reduce((total, value) => total + value, 0) - statSum;

      for (let i = 0; i < numberOfIterations; i++) {
        this.decrementRandomStat(statsToReturn);
      }

      return statsToReturn;
    },
    commaSeparatedStringToArray(input) {
      return typeof input === "string" ? input.split(",").map(item => item.trim()) : [input];
    },
    determineElementalTileStatModifiers(attackingPokemon, indexOfAttackingPokemon, cell) {
      if (attackingPokemon.types.some((type) => type === "normal")) {
        return; // normal pokemon are not effected by elemental tiles
      }
      const { stats } = attackingPokemon;

      const updateStatOnElementalTile = (stat) => {
        if (attackingPokemon.types.includes(cell.element) && stat < 10) {
          // stat cannot be increased above 10
          return stat + 1;
        } else if (cell.element && stat > 1) {
          // stat cannot be decreased below 1
          return stat - 1;
        }
        return stat; // No change
      };

      this.cardsToDeal[indexOfAttackingPokemon].stats = stats.map(
        updateStatOnElementalTile
      );
    },
    sumUpNumbersInArray(array) {
      return array.reduce((acc, val) => acc + val, 0);
    },
  },
  mounted() {
    this.setRandomCards();
    this.setRandomElementalTiles();

    this.$nextTick(() => {
      const cells = document.querySelectorAll(".cells");

      const droppable = new Droppable(cells, {
        draggable: ".card",
        dropzone: ".dropzone",
        mirror: {
          constrainDimensions: true, // keeps the card aspect ratio
          appendTo: "body",
        },
        plugins: [Plugins.ResizeMirror],
      });

      // manipulate mirror of dragged card
      droppable.on("mirror:create", (event) => {
        const mirror = event.data.source;
        mirror.classList.add("z-50");
      });

      let attackingPokemonCardAttributes;
      let cellTarget;

      droppable.on("drag:start", (event) => {
        if (event.data.sourceContainer.id === "grid") {
          event.cancel();
          return
        }
      });

      droppable.on("droppable:dropped", (event) => {
        if (event.dropzone.dataset.dropzone === 'playerHand' || event.dropzone.dataset.dropzone === 'opponentHand') {
          event.cancel(); // direct user to the grid
          return;
        }

        if (event.data.dropzone.attributes["data-cell"] === undefined) {
          return; // dragging over a cell outside of the grid
        }

        cellTarget = event.data.dropzone.attributes["data-cell"].value;
        attackingPokemonCardAttributes = event.data.dragEvent.data.source.attributes;
      });

      droppable.on("drag:stop", () => {
        const htmlCollection = this.$refs.grid.$refs[cellTarget][0].children;
        const arrayOfElements = Array.from(htmlCollection);
        const hasCardClass = arrayOfElements.some(element => element.className.includes('card'));

        if (!hasCardClass) {
          return; // prevents a bug that causes a cellTarget to be defined on droppable:dropped, but a user returns their card to hand
        }

        const attackingPokemonName = attackingPokemonCardAttributes["data-name"].value;
        const attackingCardRef = this.$refs[attackingPokemonName][0];
        this.cells[cellTarget].pokemonCardRef = attackingPokemonName; // declare the attacking card
        const indexOfAttackingPokemon = this.cardsToDeal.findIndex(
          (pokemon) => pokemon.name === attackingPokemonName
        );
        const attackingPokemon = this.cardsToDeal[indexOfAttackingPokemon];

        if (this.cells[cellTarget].element) {
          this.determineElementalTileStatModifiers(
            attackingPokemon,
            indexOfAttackingPokemon,
            this.cells[cellTarget]
          ); // add or remove stats on placement of attacking card on elemental tile

          const totalStats = this.sumUpNumbersInArray(attackingCardRef.pokemonCard.stats);
          const totalOriginalStats = this.sumUpNumbersInArray(
            attackingCardRef.pokemonCard.originalStats
          );

          if (totalStats < totalOriginalStats) {
            attackingCardRef.weakenCard();
          } else if (totalStats > totalOriginalStats) {
            attackingCardRef.strengthenCard();
          }
        }

        this.cells[cellTarget].adjacentCells.forEach((cell, index) => {
          if (!cell || !this.cells[cell].pokemonCardRef) {
            return;
          }

          const defendingCardRef = this.$refs[this.cells[cell].pokemonCardRef];
          const defendingStatIndex = this.cells[cell].adjacentCells.indexOf(cellTarget);
          const defendingStat = defendingCardRef[0].pokemonCard.stats[defendingStatIndex];
          const attackingStat = attackingPokemon.stats[index];
          const isPlayerCardAttacking = JSON.parse(
            attackingPokemonCardAttributes["data-is-player-card"].value
          );

          if (
            attackingStat > defendingStat &&
            defendingCardRef[0].internalIsPlayerCard !== isPlayerCardAttacking
          ) {
            defendingCardRef[0].toggleIsPlayerCard();
          }
        });

        this.cellsOccupied++ // tracking game progress
      });
    });
  },
};
</script>