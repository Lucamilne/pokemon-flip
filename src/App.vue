<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="h-24 bg-theme-red" />
  <main class="h-[calc(100vh-192px)]">
    <RouterView />
  </main>
  <footer class="h-24 bg-theme-red" />
</template>



<style>
header {
  box-shadow: inset 0 -8px #901a22, inset 0 -16px #c20a0a;
  border-bottom: 8px solid #000;
}

footer {
  box-shadow: inset 0 8px #901a22, inset 0 16px #c20a0a;
  border-top: 8px solid #000;
}

.text-shadow {
  text-shadow: 1px 1px #000;
}

.simple-container {
  border-width: 24px; /* Fallback border style */
  border-image-source: url('./assets/textures/Frame_simple.png');
  border-image-slice: 16 16 16 16;
  background: url('./assets/textures/content_simple.png');
}
</style>