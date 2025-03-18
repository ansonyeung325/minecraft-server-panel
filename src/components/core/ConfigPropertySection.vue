<template>
  <div class="section">
    <div class="control-item">
      <div class="item-title">
        <div class="body2">{{ title }}</div>
        <div class="caption key-name">{{ subTitle }}</div>
      </div>
      <slot name="input"></slot>
    </div>
    <div class="caption discription">{{ discription }}</div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ConfigPropertySection',
  props: {
    title: { type: String, default: '' },
    subTitle: { type: String, default: '' },
    discription: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped>
@import '@/styles/base.css';

.section {
  width: 100%;
  height: 100%;
  padding: 20px;
}

.control-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.item-title {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.discription {
  margin-top: 10px;
  color: grey;
}

.key-name {
  color: rgb(236, 166, 86);
}
</style>
