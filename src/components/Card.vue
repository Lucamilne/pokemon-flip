<template>
    <div class="relative card">
        <div class="card-front rounded-md p-3 content-border-wrap select-none aspect-square shadow">
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
        <div class="card-back rounded-md p-3 content-border-wrap select-none aspect-square shadow">
            <div :class="`${bgGradient} relative w-full aspect-square border border-1 border-default`">
                <div class="bg-[url('@/assets/textures/card-back.png')] bg-center bg-cover aspect-square">
                </div>
            </div>
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

.card-front {
    transform: rotateY(0deg);
}

.card-back {
    transform: rotateY(-180deg);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}

.card:hover>.card-front {
    transform: rotateY(180deg);
}

.card:hover>.card-back {
    transform: rotateY(0deg);
    opacity: 1;
}

.card-front,
.card-back {
    transition-property: opacity, transform;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.27);
}
</style>