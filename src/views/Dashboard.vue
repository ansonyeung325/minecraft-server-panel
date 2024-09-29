<template>
  <div class="wrapper">
    <!-- Information of server  -->
    <div class="info-container">
      <Skeleton :content-ready="isLoading">
        <Image :src="appStore.serverInfo?.icon" class="server-icon" />
      </Skeleton>
      <div class="info">
        <div v-if="appStore.serverInfo?.online" class="online">
          <div>
            <!-- Color dot -->
          </div>
          <p class="headline" style="font-weight: bold">Online</p>
        </div>
        <div v-else class="offline">
          <div>
            <!-- Color dot -->
          </div>
          <p class="headline" style="font-weight: bold">Online</p>
        </div>
        <Skeleton :content-ready="isLoading">
          <div class="textbody">
            {{ `${appStore.serverInfo?.ip}:${appStore.serverInfo?.port}` }}
          </div>
        </Skeleton>
        <Skeleton :content-ready="isLoading">
          <div v-html="appStore.serverInfo?.motd.html" class="headline"></div>
        </Skeleton>
        <Skeleton :content-ready="isLoading">
          <div class="caption">{{ `version: ${appStore.serverInfo?.version}` }}</div>
        </Skeleton>
      </div>
    </div>
    <!-- Online Player List -->
    <div class="players-container">
      <div style="display: flex; align-items: baseline">
        <p class="headline" style="margin: 0 auto 0 0">Players</p>
        <Skeleton :content-ready="isLoading">
          <p class="caption">
            {{ appStore.serverInfo?.players.online + ' / ' + appStore.serverInfo?.players.max }}
          </p>
        </Skeleton>
      </div>
      <ul v-if="appStore.serverInfo?.players.list != null" class="player-list">
        <PlayerListTile
          v-for="player in appStore.serverInfo?.players.list || []"
          :key="player.uuid"
          :name="player.name"
        />
      </ul>
    </div>
    <!-- Logs and activities from server  -->
    <div class="logs-container"></div>
  </div>
</template>
<script lang="ts">
import { Skeleton, Image, PlayerListTile } from '@/component'
import type { ComponentData, ServerInfo } from '@/model'
import appStore from '@/store/appStore'
import { Logger } from '@/utils/logger'

interface DashboardComponentData extends ComponentData {
  isLoading: boolean
}

export default {
  name: 'Dashboard',
  components: {
    PlayerListTile,
    Skeleton,
    Image
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
  }
}
</script>
<style scoped>
@import url(../assets/base.css);

.wrapper {
  height: 100%;
  width: 100%;
  padding: 10px;
  display: grid;
  gap: 14px;
  grid-template-columns: 1fr 40%;
  grid-template-rows: 200px 1fr;
}

.info-container {
  display: flex;
  width: 100%;
  padding: 20px;
  border-radius: var(--deco-card-border-radius);
  grid-area: 1 / 1 / 1 / 1;
  background-color: var(--color-card);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.server-icon {
  width: 160px;
  max-height: 200px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  height: 100%;
  padding: 10px;
}

.online {
  display: flex;
  align-items: center;
  gap: 12px;
}

.online div {
  border-radius: 50%;
  background-color: green;
  height: 16px;
  width: 16px;
}

.online p {
  color: green;
}

.offline {
  display: flex;
  align-items: center;
  gap: 12px;
}

.offline div {
  border-radius: 50%;
  background-color: red;
  height: 16px;
  width: 16px;
}

.offline p {
  color: red;
}

.players-container {
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  grid-area: 1 / 2 / 3 / 3;
  background-color: var(--color-card);
  border-radius: var(--deco-card-border-radius);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.player-list {
  display: flex;
  padding: 20px 8px;
  gap: 20px;
  height: 100%;
}

.logs-container {
  width: 100%;
  height: 100%;
  background-color: var(--color-card);
  border-radius: var(--deco-card-border-radius);
  grid-area: 2 / 1 / 3 / 1;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

@media screen and (max-width: 1356px) {
  .info-container {
    grid-area: 1/1/2/3;
  }

  .players-container {
    grid-area: 2/2/3/3;
  }
}
</style>
