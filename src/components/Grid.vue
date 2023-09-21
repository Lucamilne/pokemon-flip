<template>
  <section>
    <div class="grid grid-cols-3 aspect-square" ref="gridCells">
      <div v-for="(value, key) in cells" :key="key" :class="`dropzone border border-4 border-black p-2 ${value.class}`">
      </div>
    </div>
  </section>
  <!-- 
  <div class="nes-table-responsive">
    <table class="nes-table is-bordered aspect-square">
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div> -->
</template>

<script setup>
import { Draggable, Droppable } from '@shopify/draggable';
import { ref, onMounted } from 'vue';

const gridCells = ref([]);

const cells = {
  A1: {
    hasValue: true,
    class: 'border-r-0 border-b-0',
  },
  A2: {
    hasValue: true,
    class: 'border-r-0 border-b-0',
  },
  A3: {
    hasValue: true,
    class: 'border-b-0',
  },
  B1: {
    hasValue: true,
    class: 'border-b-0 border-r-0',
  },
  B2: {
    hasValue: false,
    class: 'border-b-0 border-r-0',
  },
  B3: {
    hasValue: false,
    class: 'border-b-0',
  },
  C1: {
    hasValue: false,
    class: 'border-r-0',
  },
  C2: {
    hasValue: false,
    class: 'border-r-0',
  },
  C3: {
    hasValue: false,
    class: '',
  },
}

onMounted(() => {
  const droppable = new Droppable(gridCells.value, {
    draggable: '.card',
    dropzone: '.dropzone',
    mirror: {
      constrainDimensions: true, // keeps the card aspect ratio
    },
  });

  droppable.on('drag:start', (event) => {
    //
  });

  droppable.on('drag:stop', (event) => {
    //
  });

  // manipulate mirror of dragged card
  droppable.on('mirror:create', (event) => {
    const mirror = event.data.source;
    mirror.classList.add('z-50');
  });

  droppable.on('droppable:dropped', (event) => {
    if (event.dropzone.children.length > 0) {
      event.cancel();
    }
  });
})
</script>

<style scoped>
.z-index-100 {
  z-index: 100 !important;
}
</style>