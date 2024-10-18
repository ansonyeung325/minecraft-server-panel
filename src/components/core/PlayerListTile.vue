<template>
  <div class="player-list-tile">
    <img v-if="name" :src="avatarUrl" alt="player avatar" />
    <div class="caption">{{ name }}</div>
  </div>
</template>

<script lang="ts">
import type { ComponentData } from '@/model'
import appStore from '@/store'
import { Logger } from '@/utils/logger'

interface PlayerListTileData extends ComponentData {
  avatarUrl: string
  isLoading: boolean
}

export default {
  props: ['name'],
  data(): PlayerListTileData {
    return {
      logger: new Logger('PLayerListTile'),
      appStore: appStore,
      avatarUrl: '',
      isLoading: false
    }
  },
  methods: {
    async getPlayerAvatarUrl(name: string) {
      this.isLoading = true
      try {
        const apiurl = `https://minotar.net/avatar/${name}/40`
        const response = await fetch(apiurl)
        if (response) {
          this.avatarUrl = apiurl
        }
      } catch (error) {
        this.logger.error(`Error occurred: ${error}`)
      }
      this.isLoading = false
    }
  },
  mounted() {
    this.getPlayerAvatarUrl(this.name)
  }
}
</script>

<style scoped>
.player-list-tile {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 40px;
  width: 100%;
}
</style>
