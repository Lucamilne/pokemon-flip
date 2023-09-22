<template>
    <div class="card rounded-md p-3 content-border-wrap select-none aspect-square shadow">
        <div :class="`${bgGradient} relative w-full aspect-square border border-1 border-default`">
            <div class="relative h-full flex flex-col items-center justify-center shadow-inner">
                <ElementalTypes class="m-1.5 absolute top-0 right-0" :types="pokemonCard.types" />
                <img class="mt-4" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCard.id}.png`" />
                <div :class="`text-xs truncate text-white text-center w-full py-0.5 absolute bottom-0 uppercase text-shadow`">
                    {{ pokemonCard.name }}
                </div>
            </div>
            <Stats class="absolute top-0 left-0 mt-0.5" :stats="pokemonCard.stats" />
        </div>
    </div>
</template>

<script>
import Stats from './Stats.vue';
import ElementalTypes from './icons/ElementalTypes.vue';

export default {
    name: 'Card',
    props: {
        pokemonCard: Object,
        isPlayerCard: Boolean
    },
    components: {
        Stats,
        ElementalTypes
    },
    data: () => ({
        //
    }),
    computed: {
        bgGradient() {
            return this.isPlayerCard ? 'bg-gradient-to-br from-water to-water-dark' : 'bg-gradient-to-br from-fighting to-fighting-dark';
            // switch (this.pokemonCard.types[0]) {
            //     case 'fire':
            //         return 'bg-gradient-to-br from-fire to-fire-dark';
            //     case 'water':
            //         return 'bg-gradient-to-br from-water to-water-dark';
            //     case 'grass':
            //         return 'bg-gradient-to-br from-grass to-grass-dark';
            //     case 'electric':
            //         return 'bg-gradient-to-br from-electric to-electric-dark';
            //     case 'fighting':
            //         return 'bg-gradient-to-br from-fighting to-fighting-dark';
            //     case 'psychic':
            //         return 'bg-gradient-to-br from-psychic to-psychic-dark';
            //     default:
            //         return 'bg-gradient-to-br from-normal to-normal-dark';
            // }
        },
    },
}
</script>

<style scoped>
.content-border-wrap {
    @apply bg-gradient-to-br from-yellow-500 to-yellow-600;
}
</style>