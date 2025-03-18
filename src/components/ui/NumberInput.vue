<template>
  <div class="number-input-container">
    <font-awesome-icon icon="plus" @click="increase" class="number-input-button" />
    <input type="number" class="number-input" v-model="value" />
    <font-awesome-icon icon="minus" @click="decrease" class="number-input-button" />
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue'

export default {
  props: {
    defaultValue: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    callback: {
      type: Function as PropType<(value: number) => void>,
      required: true
    }
  },
  data() {
    return {
      value: 0
    }
  },
  mounted() {
    this.value = this.defaultValue
  },
  methods: {
    increase() {
      this.value++
    },
    decrease() {
      this.value--
    }
  },
  watch: {
    value(newValue: number) {
      if (newValue > this.max) {
        this.value = this.max
        this.callback(this.value)
        return
      } else if (newValue < this.min) {
        this.value = this.min
        this.callback(this.value)
        return
      }
      this.callback(newValue)
    }
  }
}
</script>
<style scoped>
@import '@/index.css';
.number-input {
  height: 100%;
  width: 30px;
  outline: none;
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 16px;
}

.number-input-container {
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: var(--button-border-radius);
  background-color: var(--color-container);
  border: 1px solid var(--color-background-dark);
}

.number-input-button {
  margin: 10px 12px;
  cursor: pointer;
}
</style>
