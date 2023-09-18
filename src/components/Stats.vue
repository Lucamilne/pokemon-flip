<template>
    <section class="w-1/4 text-6xl text-white">
        <div class="text-center">{{ values[1] }}</div>
        <div class="flex justify-center">
            <div>{{ values[0] }}</div>
            <div>{{ values[2] }}</div>
        </div>
        <div class="text-center">{{ values[3] }}</div>
    </section>
</template>

<script setup>
const props = defineProps({
    values: Array,
    element: String
})
</script>