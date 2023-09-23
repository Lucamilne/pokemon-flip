<template>
  <section>
    <div class="grid shadow grid-cols-3 cells">
      <div v-for="(value, key) in cells" :key="key" :class="`dropzone bg-white/75 border border-2 border-black p-2 aspect-square ${value.class}`" >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Grid',
  data: () => ({
    cells: {
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
  }),
}
</script>