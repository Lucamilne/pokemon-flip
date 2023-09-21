<template>
    <section>
        <div class="grid grid-cols-1" ref="hand">
            <div v-for="(card, index) in cards" :key="index" :class="`border border-4 border-black aspect-square p-2 ${index + 1 === cards.length ? '' : 'border-b-0' }`">
                <Card :id="card.name" :pokemon-card="card" />
            </div>
        </div>
    </section>
</template>

<script>
import Card from './Card.vue'
import { Draggable, Droppable } from '@shopify/draggable';

export default {
    name: 'Hand',
    props: {
        cards: Array
    },
    components: {
        Card
    },
    data: () => ({
        //
    }),
    mounted() {
        const draggable = new Draggable(this.$refs.hand, {
            draggable: '.card',
            dropzone: '.dropzone',
            mirror: {
                constrainDimensions: true, // keeps the card aspect ratio
            },
        });
    }
}
</script>