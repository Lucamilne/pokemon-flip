<template>
  <div class="grid grid-cols-3 gap-4">
    <draggable v-for="(content, cell) of grid" :key="cell" :list="grid[cell]" group="people" @change="log" itemKey="name" class="aspect-square border border-red-200">
      <template #item="{ element, index }">
        <div class="list-group-item">{{ element.name }} {{ index }}</div>
      </template>
    </draggable>
  </div>
</template>
<script lang="ts">
import draggable from "vuedraggable";

export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      grid: {
        A1: [
          { name: "Pikachu", id: 1 },
        ],
        A2: [],
        A3: [],
        B1: [],
        B2: [],
        B3: [],
        C1: [],
        C2: [
          { name: "Raichu", id: 2 },
        ],
        C3: []
      }

    };
  },
  methods: {
    // add: function () {
    //   this.list.push({ name: "Juan" });
    // },
    // replace: function () {
    //   this.list = [{ name: "Edgard" }];
    // },
    // clone: function (el) {
    //   return {
    //     name: el.name + " cloned"
    //   };
    // },
    log(event) {
      console.log(event);
    }
  }
};
</script>