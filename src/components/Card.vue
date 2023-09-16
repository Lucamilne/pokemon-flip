<template>
    <div class="card bg-green-200 rounded-lg border border-[1.5rem] border-yellow-500 block m-4 aspect-square">
        <Stats :values="[1, 2, 3, 4]" />
    </div>
</template>

<script setup>
import Stats from './Stats.vue';

</script>