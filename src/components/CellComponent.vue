<template>
  <div class="cell"></div>
</template>

<script>
export default {
  name: "CellComponent",
  props: {
    index: {
      type: Number,
      default: 0,
    }
  },
}
</script>

<style scoped>
.cell {
  width: 100%;
  height: 100%;
  border: 1px solid #fff1;
  z-index: 2;
}
</style>