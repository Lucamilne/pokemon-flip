<template>
    <section>
        <div class="text-white text-xs md:text-sm text-shadow flex flex-col justify-between aspect-square text-center">
            <div>{{ formattedStats[1] }}</div>
            <div class="flex justify-between">
                <div class="w-6">{{ formattedStats[0] }}</div>
                <div class="w-6">{{ formattedStats[2] }}</div>
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
        originalStats: Array,
        element: String
    },
    computed: {
        formattedStats() {
            return this.stats.map(value => value > 9 ? 'A' : value);
        }
    }
}
</script>
