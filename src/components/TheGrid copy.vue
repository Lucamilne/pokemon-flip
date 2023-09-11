<template>
  <div class="grid grid-cols-3 gap-4">
    <draggable v-for="(content, cell) of grid" :key="cell" :list="grid[cell]" group="people" @change="handleDragChange" itemKey="name" class="aspect-square border border-red-200">
      <template #item="{ element, index }">
        <div class="bg-green-800">{{ element.name }} {{ index }}</div>
      </template>
    </draggable>
  </div>
</template>

<script>
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
      },
      maxDraggableItems: 3,
      draggedItemCount: 0,
    };
  },
  methods: {
    handleDragChange() {
      for (const cell in this.grid) {
        if (this.grid[cell].length > 1) {
          // If a cell contains more than one item, keep only the first item (remove the rest).
          this.grid[cell] = [this.grid[cell][0]]; //to do 
        }
      }
    }
  }
};
</script>