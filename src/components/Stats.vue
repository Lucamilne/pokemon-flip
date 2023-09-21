<template>
    <section class="absolute top-0 left-0 w-full">
        <div class="font-start text-white flex flex-col justify-between aspect-square text-center select-none">
            <div>{{ formattedStats[1] }}</div>
            <div class="flex justify-between">
                <div class="w-10">{{ formattedStats[0] }}</div>
                <div class="w-10">{{ formattedStats[2] }}</div>
            </div>
            <div>{{ formattedStats[3] }}</div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Stats',
    props: {
        stats: Array,
        element: String
    },
    computed: {
        formattedStats() {
            return this.stats.map(value => value > 9 ? 'A' : value);
        }
    }
}
</script>
