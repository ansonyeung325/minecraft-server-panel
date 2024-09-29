<template>
  <div class="properties-container">
    <div class="general">
      <div></div>
    </div>
  </div>
</template>
<script lang="ts">
import type { ComponentData } from '@/model'
import appStore from '@/store/appStore'
import { Logger } from '@/utils/logger'

interface PropertiesData extends ComponentData {}

export default {
  data(): PropertiesData {
    return {
      appStore: appStore,
      logger: new Logger('Properties')
    }
  }
}
</script>
<style scoped>
.properties-container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
