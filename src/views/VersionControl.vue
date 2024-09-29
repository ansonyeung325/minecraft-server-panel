<template></template>

<script lang="ts">
import type { ComponentData } from '@/model'
import appStore from '@/store/appStore'
import { Logger } from '@/utils/logger'

interface VersionControlData extends ComponentData {}

export default {
  name: 'Setting',
  data(): VersionControlData {
    return {
      appStore: appStore,
      logger: new Logger('Setting')
    }
  },
  mounted() {}
}
</script>

<style scoped></style>
