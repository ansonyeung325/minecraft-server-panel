<template>
  <input type="text" class="text-input" :style="{ width: width }" v-model="value" />
</template>
<script lang="ts">
import type { PropType } from 'vue'

export default {
  props: {
    width: {
      type: String,
      default: '120px'
    },
    defaultValue: {
      type: String,
      required: true
    },
    callback: {
      type: Function as PropType<(value: string) => void>,
      required: true
    }
  },
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    this.value = this.defaultValue
  },
  watch: {
    value(newValue: string) {
      this.callback(newValue)
    }
  }
}
</script>
<style scoped>
@import '@/index.css';
.text-input {
  height: 40px;
  outline: none;
  font-size: 16px;
  padding: 10px 12px;
  border-radius: var(--button-border-radius);
  border: 1px solid var(--color-background-dark);
}
</style>
