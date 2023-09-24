<template>
    <section>
        <div class="grid grid-cols-1 gap-2 cells">
            <div :class="`dropzone aspect-square ${isPlayerHand ? 'slide-in' : 'slide-in-reversed'} slide-in-delay`" v-for="(card, index) in cards">
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
@keyframes slideInX {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}

@keyframes slideInXReversed {
    0% {
        transform: translateX(100%);
    }

    100% {
        transform: translateX(0);
    }
}

.slide-in {
    animation: slideInX 200ms ease-out forwards;
}

.slide-in-reversed {
    animation: slideInXReversed 300ms ease-out forwards;
}

.slide-in-delay:nth-child(2) {
    animation-delay: 50ms;
    /* 0.5s delay for the second element */
}

.slide-in-delay:nth-child(3) {
    animation-delay: 100ms;
    /* 1s delay for the third element */
}

.slide-in-delay:nth-child(4) {
    animation-delay: 150ms;
    /* 1s delay for the third element */
}

.slide-in-delay:nth-child(5) {
    animation-delay: 200ms;
    /* 1s delay for the third element */
}
</style>