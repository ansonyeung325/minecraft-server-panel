<template>
  <div class="wrapper">
    <!-- Information of server  -->
    <div class="info-container">
      <div class="server-img">
        <Image :isLoading="isLoading" :src="appStore.serverInfo?.icon" :class="'server-img'" />
      </div>
      <div class="server-info">
        <div class="status" :style="{ color: statusColor }">
          <div class="dot" :style="{ backgroundColor: statusColor }"></div>
          <p class="body2">{{ statusText }}</p>
          <div class="action-buttons">
            <IconButton @click="runServer" :text="'Start'">
              <template v-slot:icon>
                <font-awesome-icon icon="power-off" />
              </template>
            </IconButton>
            <IconButton :text="'Restart'">
              <template v-slot:icon>
                <font-awesome-icon icon="power-off" />
              </template>
            </IconButton>
          </div>
        </div>
        <Skeleton :isLoading="isLoading">
          <p class="caption">
            {{ `${appStore.serverInfo?.ip}:${appStore.serverInfo?.port}` }}
          </p>
        </Skeleton>
        <Skeleton :isLoading="isLoading">
          <!-- v-html="appStore.serverInfo?.motd.html" -->
          <!-- v-if="appStore.serverInfo?.motd?.html" -->
          <p class="caption"></p>
        </Skeleton>
        <div style="display: flex">
          <Skeleton :isLoading="isLoading">
            <p class="caption">
              {{ `version: ${appStore.serverInfo?.version ? appStore.serverInfo?.version : ''}` }}
            </p>
          </Skeleton>
        </div>
      </div>
    </div>

    <div class="right-side">
      <!-- Online Player List -->
      <div class="player-container">
        <div>
          <p class="body2">Players</p>
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
import { Skeleton, Image, PlayerListTile, Button, IconButton } from '@/component'
import type { ComponentData, ServerInfo } from '@/model'
import appStore from '@/store'
import { Logger } from '@/utils/logger'
import Terminal from '../components/core/Terminal.vue'
import SwitchButton from '@/components/ui/SwitchButton.vue'

interface DashboardComponentData extends ComponentData {
  isLoading: boolean
}

export default {
  name: 'Dashboard',
  components: {
    PlayerListTile,
    Skeleton,
    Image,
    Terminal,
    Button,
    SwitchButton,
    IconButton
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
    },
    runServer() {
      this.logger.info('Start the minecraft server')
    }
  },
  mounted() {
    this.getMinecraftserverInfo()
  },
  computed: {
    statusColor() {
      if (this.appStore.serverInfo?.online) {
        return 'green'
      }
      return 'red'
    },
    statusText() {
      if (this.appStore.serverInfo?.online) {
        return 'Online'
      }
      return 'Offline'
    }
  }
}
</script>
<style scoped>
@import '@/index.css';

.wrapper {
  height: 100%;
  width: 100%;
  padding: 20px;
  display: grid;
  gap: 14px;
  grid-template-columns: minmax(0, 2fr) 1fr;
  grid-template-rows: 160px 1fr;
}

.info-container {
  display: flex;
  gap: 10px;
  padding: 14px;
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

.action-buttons {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
}

.status {
  display: flex;
  align-items: center;
  gap: 12px;
}

.dot {
  border-radius: 50%;
  width: 22px;
  height: 16px;
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
  padding: 14px;
  background-color: var(--color-container);
  border-radius: var(--card-border-radius);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.player-container {
  width: 100%;
  height: 50%;
  padding: 14px;
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

@media screen and (max-width: 960px) {
  .wrapper {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: 160px 400px 400px;
  }

  .info-container {
    grid-area: 1 / 1 / 2 / 2;
  }

  .right-side {
    grid-area: 2 / 1 / 3 / 2;
  }

  .log-container {
    grid-area: 3 / 1 / 4 / 2;
  }
}
</style>
