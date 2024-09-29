<template>
  <div class="header-container">
    <h2 class="page-name title2">{{ appStore.currentRoute }}</h2>
    <div class="avater"></div>
    <div>Anson Yeung</div>
  </div>
</template>

<script lang="ts">
import type { ComponentData } from '@/model'
import appStore from '@/store/appStore'
import { Logger } from '@/utils/logger'

interface HeaderComponentData extends ComponentData {}

export default {
  name: 'Header',
  data(): HeaderComponentData {
    return {
      logger: new Logger('Header'),
      appStore: appStore
    }
  }
}
</script>

<style scoped>
.header-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-area: 1 / 2 / 1 / 1;
}
.avater {
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
  background-color: grey;
}

.page-name {
  margin: 0 auto 0 0;
}
</style>
