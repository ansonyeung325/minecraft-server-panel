<template>
  <div class="sidemenu-container" :class="{ 'open-sidemenu-container': appStore.openSidemenu }">
    <div class="brand headline6">Panel</div>
    <div class="nav-list">
      <router-link
        :to="'/'"
        :class="{ active: appStore.currentRoute === 'Dashboard' }"
        class="link"
      >
        <font-awesome-icon icon="house" class="prefix" />
        <div class="nav-item-name caption">Dashboard</div>
      </router-link>
      <router-link
        :to="'/configuration'"
        :class="{ active: appStore.currentRoute === 'Configuration' }"
        class="link"
      >
        <font-awesome-icon icon="gears" class="prefix" />
        <div class="nav-item-name caption">Configuration</div>
      </router-link>
      <!-- <router-link
      :to="'version-control'"
      :class="{ active: appStore.currentRoute === 'VersionControl' }"
      class="link"
    >
      <font-awesome-icon icon="gears" class="nav-item-prefix" />Version Control
    </router-link>
    <router-link
      :to="'terminal'"
      :class="{ active: appStore.currentRoute === 'Terminal' }"
      class="link"
    >
      <font-awesome-icon icon="terminal" class="nav-item-prefix" />Terminal
    </router-link> -->
      <div class="switch-server">
        <font-awesome-icon icon="arrow-right-arrow-left" />
        <div class="caption">Switch Server</div>
      </div>
      <div class="logout-button">
        <font-awesome-icon icon="right-from-bracket" />
        <div class="caption">Logout</div>
      </div>
    </div>
  </div>
  <div
    @click="appStore.openSidemenu = !appStore.openSidemenu"
    class="sidemenu-overlay"
    :class="{ 'open-sidemenu-overlay': appStore.openSidemenu }"
  ></div>
</template>

<script lang="ts">
import type { ComponentData, AppStore } from '@/model'
import appStore from '@/store'
import { Logger } from '@/utils/logger'

interface SideMenuComponentData extends ComponentData {
  appStore: AppStore
}

export default {
  name: 'SideMenu',
  data(): SideMenuComponentData {
    return {
      logger: new Logger('SideMenu'),
      appStore: appStore
    }
  },
  mounted() {}
}
</script>

<style scoped>
@import '@/index.css';

.sidemenu-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  grid-area: 1 / 1 / 3 / 2;
  background-color: var(--color-primary-light);
  border-right: 1px solid var(--color-disable);
}

.brand {
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  height: 80px;
}

.nav-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.link {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  padding: 14px;
  background-color: none;
  color: black;
  outline: none;
  text-decoration: none;
  border-radius: var(--button-border-radius);
  transition:
    background-color 0.3s,
    color 0.3s;
  overflow: hidden;
  text-overflow: clip;
}

.link:hover,
.active {
  background-color: var(--color-secondary);
  color: var(--color-primary) !important;
}

.switch-server {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  margin-top: auto;
  margin-bottom: 0;
  padding: 14px;
  color: black;
  outline: none;
  text-decoration: none;
  border-radius: var(--button-border-radius);
  overflow: hidden;
  text-overflow: clip;
  height: 40px;
  background-color: var(--color-secondary);
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;
}

.logout-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 40px;
  margin-top: 4px;
  padding: 14px;
  color: black;
  outline: none;
  text-decoration: none;
  border-radius: var(--button-border-radius);
  overflow: hidden;
  text-overflow: clip;
  height: 40px;
  background-color: var(--color-disable);
  transition:
    background-color 0.3s,
    color 0.3s;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .sidemenu-container {
    width: 280px;
    left: -280px;
    height: 100%;
    position: absolute;
    z-index: 3;
    grid-area: none;
    transition: left 0.2s;
  }

  .open-sidemenu-container {
    left: 0;
  }

  .open-sidemenu-overlay {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .nav-item-name {
    display: block !important;
  }

  .link {
    justify-content: start !important;
  }
}

@media screen and (max-width: 1024px) {
  .nav-item-name {
    display: none;
  }

  .nav-list {
    padding: 20px 18px;
  }

  .link {
    justify-content: center;
  }
}
</style>
