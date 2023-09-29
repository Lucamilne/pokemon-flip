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
body {
  background:
    conic-gradient(from 90deg at 4px 4px, #0000 90deg, #a1a1aa 0) 0 0/250px 250px;
}

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
</style>