<template>
    <div class="card rounded-md p-3 content-border-wrap aspect-square shadow-md">
        <div :class="`dropzone bg-yellow-600 relative w-full aspect-square p-1 shadow-inner`">
            <div class="relative h-full flex items-center justify-center">
                <ElementalType :type="pokemonCard.type" :color="colorByElement[pokemonCard.type]" />
                <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCard.id}.png`" />
            </div>
            <Stats :stats="pokemonCard.stats" />
        </div>
    </div>
</template>

<script>
import Stats from './Stats.vue';
import ElementalType from './icons/ElementalType.vue';

export default {
    name: 'Card',
    props: {
        pokemonCard: Object
    },
    components: {
        Stats,
        ElementalType
    },
    data: () => ({
        colorByElement: { //todo shades of each element
            'grass': 'lime',
            'fire': 'red',
            'water': 'sky',
            'lighting': 'yellow',
            'psychic': 'purple',
            'fighting': 'orange',
            'normal': 'neutral'
        }
    }),
    methods: {
        generateRandomArray(sum) {
            const arr = [];
            let remainingSum = sum;

            for (let i = 0; i < 3; i++) {
                const randomNum = Math.floor(Math.random() * remainingSum);
                arr.push(randomNum);
                remainingSum -= randomNum;
            }

            arr.push(remainingSum);
            return arr;
        }
    }
}
</script>

<style scoped>
.content-border-wrap {
    @apply bg-gradient-to-br from-yellow-500 to-yellow-600;
}
</style>