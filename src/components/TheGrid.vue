<template>
  <section>
    <div class="grid grid-cols-3" ref="gridCells">
      <div v-for="(value, key) in cells" :key="key" class="dropzone border border-4 border-gray-400 aspect-square border-gray-800">
        <Card v-if="value.hasValue" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { Draggable, Droppable } from '@shopify/draggable';
import { ref, onMounted } from 'vue';
import Card from './Card.vue'

const gridCells = ref([]);

const cells = {
  A1: {
    hasValue: true
  },
  A2: {
    hasValue: true
  },
  A3: {
    hasValue: true
  },
  B1: {
    hasValue: true
  },
  B2: {
    hasValue: false
  },
  B3: {
    hasValue: false
  },
  C1: {
    hasValue: false
  },
  C2: {
    hasValue: false
  },
  C3: {
    hasValue: false
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

  // let droppableOrigin;

  // droppable.on('drag:start', (event) => {
  //   droppableOrigin = event.originalSource.parentNode;
  // });

  droppable.on('droppable:dropped', (event) => {
    if (event.dropzone.children.length > 0) {
      event.cancel();
    }
  });
})


</script>