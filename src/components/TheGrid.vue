<template>
  <div class="grid grid-cols-3 gap-4">
    <div v-for="(value, key) in cells" :key="key" class="border aspect-square border-gray-800" ref="gridCells">
      <div class="card block m-4 aspect-square bg-pink-300">{{ key }}</div>
    </div>
  </div>
</template>

<script setup>
import { Draggable } from '@shopify/draggable';
import { ref, onMounted } from 'vue';
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
  console.log(gridCells.value)
  const draggable = new Draggable(gridCells.value, {
    draggable: '.card'
  });
})
</script>