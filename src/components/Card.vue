<template>
    <div class="card rounded-md p-3 content-border-wrap aspect-square shadow-md">
        <div :class="`bg-yellow-600 relative w-full aspect-square p-1 shadow-inner`">
            <div class="content"></div>
            <Stats :values="[1, 2, 3, 4]" />
        </div>
    </div>
</template>

<script setup>
import Stats from './Stats.vue';
import { ref } from 'vue';

const colorByElement = { //todo shades of each element
    'grass': 'lime',
    'fire': 'red',
    'water': 'sky',
    'lighting': 'yellow',
    'psychic': 'purple',
    'fighting': 'orange',
    'normal': 'neutral'
}

const chosenColor = ref(colorByElement['grass']);
</script>

<style scoped>
.content-border-wrap {
    @apply bg-gradient-to-br from-yellow-500 to-yellow-600;
}
</style>