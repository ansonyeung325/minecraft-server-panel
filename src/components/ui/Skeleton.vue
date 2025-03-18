<template>
  <div id="skeleton">
    <div v-if="isLoading" class="overlay"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    isLoading: Boolean
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<style scoped>
@import '@/index.css';

#skeleton {
  width: fit-content;
  height: fit-content;
  position: relative;
  padding: 1px;
  border-radius: var(--button-border-radius);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: var(--color-disable);
  z-index: 1;
}
</style>
