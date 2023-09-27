<template>
    <div class="relative card" :data-is-player-card="internalIsPlayerCard" ref="card">
        <div ref="cardFront" class="border-front rounded-md p-3 select-none aspect-square shadow" :class="{ 'card-shown': isFlipped, 'card-hidden': !isFlipped }">
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
        <div ref="cardBack" class="border-back absolute top-0 left-0 w-full h-full rounded-md p-3 select-none aspect-square shadow" :class="{ 'card-shown': !isFlipped, 'card-hidden': isFlipped }">
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
        isPlayerCard: Boolean,
        index: Number
    },
    components: {
        Stats,
        ElementalTypes
    },
    data: () => ({
        internalIsPlayerCard: null,
        isFlipped: false,
    }),
    watch: {
        isPlayerCard: {
            handler(newValue) {
                this.internalIsPlayerCard = newValue;
            },
            immediate: true
        }
    },
    computed: {
        bgGradient() {
            return this.internalIsPlayerCard ? 'bg-gradient-to-br from-water to-water-dark' : 'bg-gradient-to-br from-fighting to-fighting-dark';
        },
    },
    methods: {
        toggleIsPlayerCard() {
            // this.$refs.card.classList.add('rotate');

            // setTimeout(() => {
            //     this.$refs.card.classList.remove('rotate');
            // }, 500);

            this.internalIsPlayerCard = !this.internalIsPlayerCard;
        },
        flipCard() {
            this.isFlipped = !this.isFlipped;
        },
    },
    mounted() {
        const animationDelay = 150;

        setTimeout(() => {
            this.flipCard()
        }, this.index * animationDelay + (this.isPlayerCard ? 0 : animationDelay * 5));
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

.card-hidden {
    transform: rotateY(-180deg);
    opacity: 0;
}

.card-shown {
    transform: rotateY(0deg);
    opacity: 1;
}

.card-hidden,
.card-shown {
    transition-property: transform, opacity;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.27);
}
</style>