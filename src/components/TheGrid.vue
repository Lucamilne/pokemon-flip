<template>
  <ul class="grid grid-cols-3 gap-4" ref="dragThis">
    <li>THIS</li>
  </ul>
</template>

<script setup>
import { Draggable } from '@shopify/draggable';
import { ref, onMounted } from 'vue'
const list = [1, 2, 3, 4, 5, 6, 7, 8];
const dragThis = ref(null);

onMounted(() => {
  const draggable = new Draggable(dragThis.value, {
    draggable: 'li'
  });
})
</script>