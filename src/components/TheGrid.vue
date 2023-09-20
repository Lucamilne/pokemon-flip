<template>
  <section>
    {{ cellBeingDragged }}
    <div class="grid grid-cols-3" ref="gridCells">
      <div v-for="(value, key) in cells" :key="key" :class="`dropzone border border-4 border-zinc-400 aspect-square p-2 ${value.class}`">
        <Card v-if="value.hasValue" :id="key" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Draggable, Droppable } from '@shopify/draggable';
import { ref, onMounted } from 'vue';
import Card from './Card.vue'

const gridCells = ref([]);
const cellBeingDragged = ref(null);

const cells = {
  A1: {
    hasValue: true,
    class: 'border-r-0 border-b-0',
  },
  A2: {
    hasValue: true,
    class: 'border-r-0 border-b-0',
  },
  A3: {
    hasValue: true,
    class: 'border-b-0',
  },
  B1: {
    hasValue: true,
    class: 'border-b-0 border-r-0',
  },
  B2: {
    hasValue: false,
    class: 'border-b-0 border-r-0',
  },
  B3: {
    hasValue: false,
    class: 'border-b-0',
  },
  C1: {
    hasValue: false,
    class: 'border-r-0',
  },
  C2: {
    hasValue: false,
    class: 'border-r-0',
  },
  C3: {
    hasValue: false,
    class: '',
  },
}

onMounted(() => {
  const droppable = new Droppable(gridCells.value, {
    draggable: '.card',
    dropzone: '.dropzone',
    mirror: {
      constrainDimensions: true, // keeps the card aspect ratio
    },
  });

  droppable.on('drag:start', (event) => {
    //
  });

  droppable.on('drag:stop', (event) => {
    //
  });

  // manipulate mirror of dragged card
  droppable.on('mirror:create', (event) => {
    const mirror = event.data.source;
    mirror.classList.add('z-50'); 
  });

  droppable.on('droppable:dropped', (event) => {
    if (event.dropzone.children.length > 0) {
      event.cancel();
    }
  });
})
</script>

<style scoped>
.z-index-100 {
  z-index: 100 !important;
}
</style>