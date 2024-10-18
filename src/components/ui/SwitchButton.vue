<template>
  <div class="switch-btn" @click="handleClick">
    <div class="switch-btn-inner-container" :class="{ checked: value }">
      <font-awesome-icon :icon="icon" />
    </div>
  </div>
</template>
<script lang="ts">
import { type PropType } from 'vue'
export default {
  name: 'SwitchButton',
  props: {
    callback: {
      type: Function as PropType<(value: boolean) => void>,
      required: true
    },
    defaultValue: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      value: false
    }
  },
  mounted() {
    this.value = this.defaultValue
  },
  methods: {
    handleClick() {
      this.value = !this.value
      this.callback(this.value)
    }
  },
  computed: {
    icon() {
      return this.value ? 'check' : 'xmark'
    }
  }
}
</script>
<style scoped>
@import '@/index.css';

.switch-btn {
  display: flex;
  align-items: center;
  height: 40px;
  width: 80px;
  padding: 4px;
  background-color: white;
  border: 1px solid var(--color-background-dark);
  border-radius: 20px;
  cursor: pointer;
}

.switch-btn-inner-container {
  height: 34px;
  width: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: var(--color-secondary);
  transform: translateX(100%);
  transition: transform 0.2s;
}

.checked {
  transform: translateX(0%);
}
</style>
