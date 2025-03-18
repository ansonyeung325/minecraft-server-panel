<template>
  <button class="action-button button-text" :disabled="disabled">
    <slot name="icon" />
    <p class="text">{{ text }}</p>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    disabled: {
      type: Boolean
    },
    text: {
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
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border: none;
  border-radius: var(--button-border-radius);
  cursor: pointer;
  color: white;
  background-color: var(--color-primary);
}

.text {
  margin-left: 8px;
}
</style>
