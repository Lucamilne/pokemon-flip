<template>
    <section class="absolute top-0 left-0 w-full">
        <div class="text-4xl text-white flex flex-col justify-between aspect-square text-center select-none">
            <div>{{ values[1] }}</div>
            <div class="flex justify-between">
                <div class="w-10">{{ values[0] }}</div>
                <div class="w-10">{{ values[2] }}</div>
            </div>
            <div>{{ values[3] }}</div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    values: Array,
    element: String
})
</script>