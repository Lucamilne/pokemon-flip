<template>
  <section>
    <div class="grid grid-cols-3 gap-4" ref="gridCells">
      <div v-for="(value, key) in cells" :key="key" class="dropzone border aspect-square border-gray-800" >
        <div class="card bg-green-200 block m-4 aspect-square">{{ key }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Draggable, Droppable } from '@shopify/draggable';
import { ref, onMounted } from 'vue';
const gridCells = ref([]);
const card = ref(null);

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
  
  droppable.on('droppable:dropped', () => console.log('droppable:dropped'));
  droppable.on('droppable:returned', () => console.log('droppable:returned'));
})
</script>