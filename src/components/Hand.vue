<template>
    <section>
        <div class="grid grid-cols-1 gap-2 cells">
            <div class="dropzone aspect-square" v-for="(card, index) in cards">
                <Card :id="card.name" :pokemon-card="card" :isPlayerCard="isPlayerHand" />
            </div>
        </div>
    </section>
</template>

<script>
import Card from './Card.vue'

export default {
    name: 'Hand',
    props: {
        cards: Array,
        isPlayerHand: Boolean
    },
    components: {
        Card
    },
    data: () => ({
        //
    }),
}
</script>

<style scoped>
.z-index-100 {
    z-index: 100 !important;
}
</style>