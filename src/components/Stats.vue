<template>
    <section>
        <div class="text-xs md:text-sm text-shadow flex flex-col justify-between aspect-square text-center">
            <div :class="conditionalClass(1)">{{ formattedStats[1] }}</div>
            <div class="flex justify-between">
                <div :class="`w-6 ${conditionalClass(0)}`">{{ formattedStats[0] }}</div>
                <div :class="`w-6 ${conditionalClass(2)}`">{{ formattedStats[2] }}</div>
            </div>
            <div :class="conditionalClass(3)">{{ formattedStats[3] }}</div>
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
    },
    methods: {
        conditionalClass(index) {
            const stat = this.stats[index];
            const originalStat = this.originalStats[index];

            if (stat > 9) {
                return 'text-yellow-500';
            } else if (stat > originalStat) {
                return 'text-green-500';
            } else if (stat < originalStat) {
                return 'text-red-500';
            } else {
                return 'text-white';
            }
        }
    }
}
</script>
