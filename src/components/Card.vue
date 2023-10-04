<template>
    <div class="relative select-none card" :data-is-player-card="internalIsPlayerCard" ref="card">
        <div ref="cardFront" class="p-3 border-front rounded-md aspect-square" :class="{ 'card-shown': isFlipped, 'card-hidden': !isFlipped }">
            <div :class="`${bgGradient} relative w-full aspect-square border border-1 border-black`">
                <div class="relative h-full flex flex-col items-center justify-center shadow-inner">
                    <ElementalTypes class="absolute top-1 right-1" :types="pokemonCard.types" />
                    <img class="mt-4" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCard.id}.png`" />
                    <div :class="`rounded-full text-xs truncate text-white text-center w-full py-0.5 absolute bottom-0 uppercase text-shadow`">
                        <!-- <div v-if="pokemonCard.types.length > 1" :class="`absolute top-0 left-0 w-full h-full dual-type-accent-a ${bgColorByType[pokemonCard.types[0]]}`" />
                        <div v-if="pokemonCard.types.length > 1" :class="`absolute top-0 left-0 w-full h-full dual-type-accent-b ${bgColorByType[pokemonCard.types[1]]}`" />
                        <div v-else :class="`absolute top-0 left-0 w-full h-full ${bgColorByType[pokemonCard.types[0]]}`" /> -->
                        <span :class="rarity">{{ pokemonCard.name }}</span>
                    </div>
                    <!-- <img src="../assets/icons/tiers/Bag_Poké_Ball_Sprite.png" /> -->
                </div>
                <Stats class="absolute top-0 left-0 mt-0.5" :stats="pokemonCard.stats" :original-stats="pokemonCard.originalStats" />
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
        ElementalTypes,
    },
    data: () => ({
        internalIsPlayerCard: null,
        isFlipped: false,
        bgColorByType: {
            bug: 'bg-bug',
            dragon: 'bg-dragon',
            electric: 'bg-electric',
            fairy: 'bg-fairy',
            fighting: 'bg-fighting',
            fire: 'bg-fire',
            flying: 'bg-flying',
            ghost: 'bg-ghost',
            grass: 'bg-grass',
            ground: 'bg-ground',
            ice: 'bg-ice',
            normal: 'bg-normal',
            poison: 'bg-poison',
            psychic: 'bg-psychic',
            rock: 'bg-rock',
            steel: 'bg-steel',
            water: 'bg-water',
        }
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
            return this.internalIsPlayerCard ? 'bg-gradient-to-br from-theme-blue to-theme-blue-100' : 'bg-gradient-to-br from-theme-red to-theme-red-100';
        },
        typeColor() {
            return `bg-${this.pokemonCard.types[0]}`
        },
        rarity() {
            const stats = this.pokemonCard.stats;
            const statsSum = stats.reduce((acc, cur) => acc + cur, 0);

            if (stats.some((stat) => stat === 10)) {
                return 'text-yellow-500';
            }

            if (statsSum > 26) {
                return 'text-voilet-500 text-highlight';
            }

            if (statsSum > 22) {
                return 'text-blue-500 text-highlight';

            }
            if (statsSum > 18) {
                return 'text-green-500';
            }

            return 'text-white';
        }
    },
    methods: {
        toggleIsPlayerCard() {
            this.internalIsPlayerCard = !this.internalIsPlayerCard;
        },
        dropCard() {
            this.$refs.card.classList.add('slide-in-bck-top');
        },
        weakenCard() {
            this.$refs.card.classList.add('wobble-hor-bottom');
        },
        strengthenCard() {
            this.$refs.card.classList.add('jello-horizontal');
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
    @apply bg-gradient-to-br from-yellow-400 to-yellow-600;
}

.border-back {
    @apply bg-gradient-to-br from-blue-400 to-blue-600;
}

.dual-type-accent-a {
    clip-path: polygon(0 0, 62% 0, 38% 100%, 0% 100%);
}

.dual-type-accent-b {
    clip-path: polygon(62% 0, 100% 0, 100% 100%, 38% 100%);
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

.slide-in-bck-top {
    -webkit-animation: slide-in-bck-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    animation: slide-in-bck-top 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

.wobble-hor-bottom {
    -webkit-animation: wobble-hor-bottom 0.5s both;
    animation: wobble-hor-bottom 0.5s both;
}

.jello-horizontal {
    -webkit-animation: jello-horizontal 0.9s both;
    animation: jello-horizontal 0.9s both;
}

.rotate-diagonal-1 {
    -webkit-animation: rotate-diagonal-1 0.4s linear both;
    animation: rotate-diagonal-1 0.4s linear both;
}

/* slide in */
@-webkit-keyframes slide-in-bck-top {
    0% {
        -webkit-transform: translateZ(700px) translateY(-150px);
        transform: translateZ(700px) translateY(-150px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
    }
}

@keyframes slide-in-bck-top {
    0% {
        -webkit-transform: translateZ(700px) translateY(-150px);
        transform: translateZ(700px) translateY(-150px);
        opacity: 0;
    }

    100% {
        -webkit-transform: translateZ(0) translateY(0);
        transform: translateZ(0) translateY(0);
        opacity: 1;
    }
}

/* defeated */
@-webkit-keyframes rotate-diagonal-1 {
    0% {
        -webkit-transform: rotate3d(1, 1, 0, 0deg);
        transform: rotate3d(1, 1, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(1, 1, 0, -180deg);
        transform: rotate3d(1, 1, 0, -180deg);
    }

    100% {
        -webkit-transform: rotate3d(1, 1, 0, -360deg);
        transform: rotate3d(1, 1, 0, -360deg);
    }
}

@keyframes rotate-diagonal-1 {
    0% {
        -webkit-transform: rotate3d(1, 1, 0, 0deg);
        transform: rotate3d(1, 1, 0, 0deg);
    }

    50% {
        -webkit-transform: rotate3d(1, 1, 0, -180deg);
        transform: rotate3d(1, 1, 0, -180deg);
    }

    100% {
        -webkit-transform: rotate3d(1, 1, 0, -360deg);
        transform: rotate3d(1, 1, 0, -360deg);
    }
}

/* weaken */
@keyframes wobble-hor-bottom {

    0%,
    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }

    15% {
        -webkit-transform: translateX(-30px) rotate(-6deg);
        transform: translateX(-30px) rotate(-6deg);
    }

    30% {
        -webkit-transform: translateX(15px) rotate(6deg);
        transform: translateX(15px) rotate(6deg);
    }

    45% {
        -webkit-transform: translateX(-15px) rotate(-3.6deg);
        transform: translateX(-15px) rotate(-3.6deg);
    }

    60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
        transform: translateX(9px) rotate(2.4deg);
    }

    75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
        transform: translateX(-6px) rotate(-1.2deg);
    }
}

/* strengthen */
@-webkit-keyframes jello-horizontal {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }

    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }

    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }

    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}

@keyframes jello-horizontal {
    0% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }

    30% {
        -webkit-transform: scale3d(1.25, 0.75, 1);
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        -webkit-transform: scale3d(0.75, 1.25, 1);
        transform: scale3d(0.75, 1.25, 1);
    }

    50% {
        -webkit-transform: scale3d(1.15, 0.85, 1);
        transform: scale3d(1.15, 0.85, 1);
    }

    65% {
        -webkit-transform: scale3d(0.95, 1.05, 1);
        transform: scale3d(0.95, 1.05, 1);
    }

    75% {
        -webkit-transform: scale3d(1.05, 0.95, 1);
        transform: scale3d(1.05, 0.95, 1);
    }

    100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
    }
}
</style>