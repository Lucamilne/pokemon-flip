<template>
  <section>
    <div class="grid grid-cols-3" ref="gridCells">
      <div v-for="(value, key) in cells" :key="key" class="dropzone border border-4 border-gray-400 aspect-square border-gray-800" >
        <Card />
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
  A1: {},
  A2: {},
  A3: {},
  B1: {},
  B2: {},
  B3: {},
  C1: {},
  C2: {},
  C3: {},
}

onMounted(() => {
  const droppable = new Droppable(gridCells.value, {
    draggable: '.card',
    dropzone: '.dropzone'
  });

  // get width/height of element on drag and fix
  
  droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
  droppable.on('droppable:returned', () => console.log('droppable:returned'));
})
</script>