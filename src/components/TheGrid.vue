<script setup lang="ts">
import { reactive } from 'vue'
import { GridLayout, GridItem } from 'grid-layout-plus'

const layout = reactive([
  { x: 0, y: 0, w: 1, h: 1, i: 'A1', },
  { x: 1, y: 0, w: 1, h: 1, i: 'A2', },
  { x: 2, y: 0, w: 1, h: 1, i: 'A3', },
  { x: 0, y: 1, w: 1, h: 1, i: 'B1', },
  { x: 1, y: 1, w: 1, h: 1, i: 'B2', },
  { x: 2, y: 1, w: 1, h: 1, i: 'B3', },
  { x: 0, y: 2, w: 1, h: 1, i: 'C1', },
  { x: 1, y: 2, w: 1, h: 1, i: 'C2', },
  { x: 2, y: 2, w: 1, h: 1, i: 'C3', },
])
</script>

<template>
  <GridLayout v-model:layout="layout" :col-num="3" :max-rows="3" use-css-transforms>
    <GridItem v-for="item in layout" :key="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :is-draggable="false">
      <span>card goes here, set draggable to true</span>
    </GridItem>
  </GridLayout>
</template>

<style scoped>
.vgl-layout {
  background-color: #eee;
}

:deep(.vgl-item:not(.vgl-item--placeholder)) {
  border: 1px solid black;
}

/* :deep(.vgl-item--resizing) {
  opacity: 90%;
}

:deep(.vgl-item--static) {
  background-color: #cce;
} */
</style>