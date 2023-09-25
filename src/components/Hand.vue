<template>
    <section>
        <div class="grid grid-cols-1 gap-2 cells">
            <div :class="`dropzone aspect-square ${isPlayerHand ? 'slide-in' : 'slide-in-reversed'} slide-in-delay`" v-for="pokemonCard in cards">
                <Card :id="pokemonCard.name" :pokemon-card="pokemonCard" :isPlayerCard="isPlayerHand" :data-stats="pokemonCard.stats" />
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