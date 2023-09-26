<template>
  <div class="grid shadow grid-cols-3 cells" id="grid">
    <div v-for="(value, key) in cells" :key="key" :class="`dropzone bg-white/75 border border-2 border-black p-2 aspect-square ${value.class}`" :data-cell="key" :ref="key">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    cells: Object
  }
}
</script>