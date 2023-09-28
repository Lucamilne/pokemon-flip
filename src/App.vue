<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="h-24 bg-theme" />
  <main class="h-[calc(100vh-192px)]">
    <RouterView />
  </main>
  <footer class="h-24 bg-theme" />
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

.fire {
  @apply bg-fire;
}

.water {
  @apply bg-water;
}

.grass {
  @apply bg-grass;
}

.electric {
  @apply bg-electric;
}

.psychic {
  @apply bg-psychic;
}

.fighting {
  @apply bg-fighting;
}

.normal {
  @apply bg-normal;
}

.fire-light {
  @apply bg-fire-light;
}

.water-light {
  @apply bg-water-light;
}

.grass-light {
  @apply bg-grass-light;
}

.electric-light {
  @apply bg-electric-light;
}

.psychic-light {
  @apply bg-psychic-light;
}

.fighting-light {
  @apply bg-fighting-light;
}

.normal-light {
  @apply bg-normal-light;
}

.fire-dark {
  @apply bg-fire-dark;
}

.water-dark {
  @apply bg-water-dark;
}

.grass-dark {
  @apply bg-grass-dark;
}

.electric-dark {
  @apply bg-electric-dark;
}

.psychic-dark {
  @apply bg-psychic-dark;
}

.fighting-dark {
  @apply bg-fighting-dark;
}

.normal-dark {
  @apply bg-normal-dark;
}

.text-shadow {
  text-shadow: 1px 1px #000;
}
</style>