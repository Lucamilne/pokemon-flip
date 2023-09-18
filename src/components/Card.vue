<template>
    <div class="relative card rounded-lg border border-[1.5rem] border-yellow-500 m-4 aspect-square">
        <div class="content-border-wrap w-full aspect-square p-1">
        <div class="content"></div>
        </div>
        <Stats class="absolute top-0 left-0" :values="[1, 2, 3, 4]" />
    </div>
</template>

<script setup>
import Stats from './Stats.vue';

const colorByElement = { //todo shades of each element
    'grass': 'lime',
    'fire': 'red',
    'water': 'sky',
    'lighting': 'yellow',
    'psychic': 'purple',
    'fighting': 'orange',
    'normal': 'neutral'
}
</script>

<style scoped>
.content-border-wrap {
   @apply bg-gradient-to-br from-yellow-600 to-yellow-500;
}
</style>