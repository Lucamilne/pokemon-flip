<script setup lang="ts">
import { reactive } from 'vue'
import { GridLayout, GridItem } from 'grid-layout-plus'

const layout = reactive([
  { x: 0, y: 0, w: 2, h: 2, i: 'A1', static: false },
  { x: 2, y: 0, w: 2, h: 4, i: 'A2', static: true },
  { x: 4, y: 0, w: 2, h: 5, i: 'A3', static: false },
  { x: 6, y: 0, w: 2, h: 3, i: 'B1', static: false },
  { x: 8, y: 0, w: 2, h: 3, i: 'B2', static: false },
  { x: 10, y: 0, w: 2, h: 3, i: 'B3', static: false },
  { x: 0, y: 5, w: 2, h: 5, i: 'C1', static: false },
  { x: 2, y: 5, w: 2, h: 5, i: 'C2', static: false },
  { x: 2, y: 5, w: 2, h: 5, i: 'C3', static: false },
])
</script>

<template>
  <GridLayout v-model:layout="layout" :col-num="12" :row-height="30" is-draggable is-resizable vertical-compact use-css-transforms>
    <GridItem v-for="item in layout" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" class="bg-red-500">
      <span class="bg-blue-500">{{ item.i }}</span>
    </GridItem>
  </GridLayout>
</template>

<style scoped>
.vgl-layout {
  background-color: #eee;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  background-color: #ccc;
  border: 1px solid black;
}

:deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
}
</style>