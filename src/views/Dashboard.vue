<template>
  <div class="wrapper">
    <!-- Information of server  -->
    <div class="info-container">
      <Skeleton class="server-img">
        <Image :src="appStore.serverInfo?.icon" />
      </Skeleton>
      <div class="server-info">
        <div class="status" :style="{ color: appStore.serverInfo?.online ? 'green' : 'red' }">
          <div
            class="dot"
            :style="{ backgroundColor: appStore.serverInfo?.online ? 'green' : 'red' }"
          ></div>
          <p class="subtitle2">Online</p>
        </div>
        <Skeleton :isLoading="isLoading">
          <div class="cation">
            {{ `${appStore.serverInfo?.ip}:${appStore.serverInfo?.port}` }}
          </div>
        </Skeleton>
        <Skeleton :isLoading="isLoading">
          <!-- v-html="appStore.serverInfo?.motd.html" -->
          <!-- v-if="appStore.serverInfo?.motd?.html" -->
          <div class="body2">
            egegegegegegegegeggegeegegegegegegegegeggegeegegegegegegegegeggegeegegegegegegegegeggege
          </div>
        </Skeleton>
        <div style="display: flex">
          <Skeleton :isLoading="isLoading">
            <div class="caption">
              {{ `version: ${appStore.serverInfo?.version ? appStore.serverInfo?.version : ''}` }}
            </div>
          </Skeleton>
        </div>
      </div>
    </div>

    <div class="right-side">
      <!-- Online Player List -->
      <div class="player-container">
        <div>
          <p class="subtitle2">Players</p>
          <Skeleton v-if="appStore.serverInfo?.players" :isLoading="isLoading">
            <p class="caption">
              {{ appStore.serverInfo?.players.online + ' / ' + appStore.serverInfo?.players.max }}
            </p>
          </Skeleton>
        </div>
        <ul v-if="appStore.serverInfo?.players?.list" class="player-list">
          <PlayerListTile
            v-for="player in appStore.serverInfo?.players.list"
            :key="player.uuid"
            :name="player.name"
          />
        </ul>
      </div>
      <!-- Activity of server or user -->
      <div class="activity-container"></div>
    </div>

    <!-- Logs from server  -->
    <div class="log-container">
      <Terminal />
    </div>
  </div>
</template>

<script lang="ts">
import { Skeleton, Image, PlayerListTile } from '@/component'
import type { ComponentData, ServerInfo } from '@/model'
import appStore from '@/store/appStore'
import { Logger } from '@/utils/logger'
import Terminal from '../components/Terminal.vue'

interface DashboardComponentData extends ComponentData {
  isLoading: boolean
}

export default {
  name: 'Dashboard',
  components: {
    PlayerListTile,
    Skeleton,
    Image,
    Terminal
  },
  data(): DashboardComponentData {
    return {
      appStore: appStore,
      logger: new Logger('Home'),
      isLoading: false
    }
  },
  methods: {
    async getMinecraftserverInfo() {
      this.isLoading = true
      if (!appStore.serverInfo) {
        try {
          const response = await fetch('https://api.mcsrvstat.us/3/1.65.137.238')
          const json: ServerInfo = await response.json()
          this.appStore.serverInfo = json
          this.logger.info(`Response from MinecraftAPI: ${JSON.stringify(json, null, 2)}`)
        } catch (error) {
          this.logger.error(`Error occurred: ${error}`)
        }
      }
      this.isLoading = false
    }
  },
  mounted() {
    this.getMinecraftserverInfo()
  },
  computed: {}
}
</script>
<style scoped>
@import '../index.css';

.wrapper {
  height: 100%;
  width: 100%;
  display: grid;
  gap: 14px;
  grid-template-columns: minmax(0, 2fr) 1fr;
  grid-template-rows: 160px 1fr;
}

.info-container {
  display: flex;
  gap: 10px;
  padding: 20px;
  border-radius: var(--card-border-radius);
  grid-area: 1 / 1 / 2 / 2;
  background-color: var(--color-container);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.server-img {
  width: 160px;
  height: 100%;
  display: flex;
  align-items: center;
}

.server-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.status {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dot {
  border-radius: 50%;
  height: 16px;
  width: 16px;
}

.right-side {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  grid-area: 1 / 2 / 3 / 3;
}

.activity-container {
  width: 100%;
  height: 50%;
  padding: 20px;
  background-color: var(--color-container);
  border-radius: var(--card-border-radius);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.player-container {
  width: 100%;
  height: 50%;
  padding: 20px;
  background-color: var(--color-container);
  border-radius: var(--card-border-radius);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.player-list {
  display: flex;
  padding: 20px 8px;
  gap: 20px;
  height: 100%;
}

.log-container {
  width: 100%;
  height: 100%;
  background-color: var(--color-container);
  border-radius: var(--card-border-radius);
  grid-area: 2 / 1 / 3 / 2;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

@media screen and (max-width: 1200px) {
  .wrapper {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 160px 1fr 2fr;
  }

  .info-container {
    grid-area: 1 / 1 / 2 / 2;
  }
  .player-container {
    grid-area: 2 / 1 / 3 / 2;
  }
  .log-container {
    grid-area: 3 / 1 / 4 / 2;
  }
}
</style>
