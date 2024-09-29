<template>
  <div class="side-menu-container">
    <div class="brand">
      <h1>Panel</h1>
    </div>
    <router-link :to="'/'" :class="{ active: appStore.currentRoute === 'Dashboard' }" class="link">
      <font-awesome-icon icon="house" class="prefix" />Dashboard
    </router-link>
    <!-- <ul class="extend-button">
      <li class="extend-item" @click="toggleSettingList = !toggleSettingList">
        <font-awesome-icon icon="gears" class="prefix" />
        <div>Setting</div>
        <div class="arrow" :class="{ rotate: toggleSettingList }">
          <font-awesome-icon icon="angle-up" />
        </div>
      </li>
      Setting page list  -->
    <router-link
      :to="'properties'"
      :class="{ active: appStore.currentRoute === 'Properties' }"
      class="link"
    >
      <font-awesome-icon icon="gears" class="prefix" />Properties
    </router-link>
    <router-link
      :to="'version-control'"
      :class="{ active: appStore.currentRoute === 'VersionControl' }"
      class="link"
    >
      <font-awesome-icon icon="gears" class="prefix" />Version Control
    </router-link>
    <!-- </ul> -->
    <router-link
      :to="'terminal'"
      :class="{ active: appStore.currentRoute === 'Terminal' }"
      class="link"
    >
      <font-awesome-icon icon="terminal" class="prefix" />Terminal
    </router-link>
  </div>
</template>

<script lang="ts">
import type { ComponentData, AppStore } from '@/model'
import appStore from '@/store/appStore'
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
@import url(../assets/base.css);

.side-menu-container {
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.nav-items {
  width: auto;
}
.brand {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}

.prefix {
  margin-right: 20px;
}

.link {
  display: block;
  width: 100%;
  padding: 8px 20px;
  margin-bottom: 10px;
  background-color: none;
  color: black;
  outline: none;
  text-decoration: none;
  border-radius: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.link:hover,
.sublink:hover,
.active {
  background-color: var(--color-main);
  color: white !important;
}

.sublink {
  width: calc(100% - 38px);
  background-color: none;
  color: black;
  outline: none;
  text-decoration: none;
  border-radius: 8px;
  margin-left: auto;
  padding: 8px 20px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.extend-button {
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.extend-item {
  display: flex;
  width: 100%;
  padding: 8px 20px;
}

.arrow {
  margin-left: auto;
  transition: all 0.3s;
}

.rotate {
  transform: rotate(180deg);
}

@keyframes rotate {
  from {
    transform: rotate('0deg');
  }

  to {
    transform: rotate('180deg');
  }
}
</style>
