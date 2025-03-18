<template>
  <div class="dropdown-button-container" :style="{ width: width }">
    <div class="dropdown-button" @click="toggleOpen">
      <div>{{ value }}</div>
      <font-awesome-icon icon="angle-down" />
    </div>
    <ul class="dropdown-menu" :class="{ 'onopen-dropdown': open }">
      <li v-for="option in options" @click="handleSelect(option)">{{ option }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'

export default {
  props: {
    options: {
      type: Array<string>,
      required: true
    },
    width: {
      type: String,
      default: '180px'
    },
    callback: {
      type: Function as PropType<(value: string) => void>,
      required: true
    },
    defaultValue: {
      type: String,
      default: 'Select a value'
    }
  },
  data() {
    return {
      open: false,
      value: ''
    }
  },
  mounted() {
    this.value = this.defaultValue
    document.addEventListener('click', (event) => this.closeByClickOutside(event))
  },
  methods: {
    toggleOpen() {
      this.open = !this.open
    },
    closeByClickOutside(event: MouseEvent) {
      if (!this.$el.contains(event.target)) {
        this.open = false
      }
    },
    handleSelect(value: string) {
      this.value = value
      this.callback(value)
      this.open = false
    }
  },
  unmounted() {
    document.removeEventListener('click', (event) => this.closeByClickOutside(event))
  }
}
</script>
<style scoped>
@import '@/index.css';
.dropdown-button-container {
  position: relative;
}

.dropdown-button {
  display: flex;
  gap: 6px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 12px;
  background-color: var(--color-container);
  border: 1px solid black;
  border-radius: var(--button-border-radius);
  cursor: pointer;
}

.dropdown-menu {
  display: none;
  width: 100%;
  position: absolute;
  margin-top: 4px;
  border-radius: var(--button-border-radius);
  background-color: var(--color-container);
  border: 1px solid var(--color-hover);
}

.dropdown-menu li {
  cursor: pointer;
  padding: 10px 12px;
}

.dropdown-menu li:last-child {
  border-bottom-left-radius: var(--button-border-radius);
  border-bottom-right-radius: var(--button-border-radius);
}
.dropdown-menu li:first-child {
  border-top-left-radius: var(--button-border-radius);
  border-top-right-radius: var(--button-border-radius);
}

.dropdown-menu li:hover {
  background-color: var(--color-hover);
}

.onopen-dropdown {
  display: block;
}
</style>
