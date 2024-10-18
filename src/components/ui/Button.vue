<template>
  <button class="action-button button-text" :disabled="disabled">
    <slot></slot>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    disabled: {
      type: Boolean
    },
    styleClass: {
      type: String
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
@import '@/index.css';

.action-button {
  padding: 6px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  color: white;
  background-color: var(--color-primary);
}
</style>
