<template>
    <div class="relative card">
        <div ref="cardFront" class="card-front-hiding border-front rounded-md p-3 select-none aspect-square shadow">
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
        <div ref="cardBack" class="card-back-showing border-back absolute top-0 left-0 w-full h-full rounded-md p-3 select-none aspect-square shadow">
            <div class="bg-[url('@/assets/textures/card-back.png')] bg-center bg-cover aspect-square">
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
        },
    },
    methods: {
        test() {
            console.log('hello')
        },
        flipCard() {
            const cardBackClassList = this.$refs.cardBack.classList;
            const cardFrontClassList = this.$refs.cardFront.classList;

            if (
                cardBackClassList.contains('card-back-showing') &&
                cardFrontClassList.contains('card-front-hiding')
            ) {
                cardBackClassList.remove('card-back-showing');
                cardFrontClassList.remove('card-front-hiding');
                cardBackClassList.add('card-back-hiding');
                cardFrontClassList.add('card-front-showing');
            } else {
                cardBackClassList.remove('card-back-hiding');
                cardFrontClassList.remove('card-front-showing');
                cardBackClassList.add('card-back-showing');
                cardFrontClassList.add('card-front-hiding');
            }
        },
    },
    mounted() {
        this.flipCard();
    }
}
</script>

<style scoped>
.border-front {
    @apply bg-gradient-to-br from-yellow-500 to-yellow-600;
}

.border-back {
    @apply bg-gradient-to-br from-blue-500 to-blue-600;
}

.card-back-showing {
    transform: rotateY(0deg);
    opacity: 1;
}

.card-back-hiding {
    transform: rotateY(180deg);
    opacity: 0;
}

.card-front-showing {
    transform: rotateY(0deg);
    opacity: 1;
}

.card-front-hiding {
    transform: rotateY(180deg);
    opacity: 1;
}

.card-front-showing,
.card-back-showing,
.card-front-hiding,
.card-back-hiding {
    transition-property: transform, opacity;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.27);
}
</style>