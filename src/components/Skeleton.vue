<template>
  <div id="skeleton">
    <div v-if="contentReady" class="overlay"></div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    contentReady: Boolean
  },
  data() {
    return {}
  },
  mounted() {}
}
</script>

<style scoped>
@import url('../assets/base.css');

#skeleton {
  position: relative;
  width: fit-content;
  height: fit-content;
  padding: 0 6px;
  border-radius: 4px;
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
