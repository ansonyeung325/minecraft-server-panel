<template>
  <div class="header-container">
    <div @click="appStore.openSidemenu = !appStore.openSidemenu">
      <font-awesome-icon icon="bars" class="sidemenu-toggle-button" />
    </div>
    <p class="page-name subtitle2">{{ appStore.currentRoute }}</p>
    <div class="avater"></div>
    <div class="body2">Anson Yeung</div>
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
@import '../index.css';

.header-container {
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: var(--color-container);
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-area: 1 / 2 / 2 / 3;
  border-bottom: 1px solid var(--color-disable);
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

.sidemenu-toggle-button {
  width: 0;
  height: 0;
  cursor: pointer;
  visibility: hidden;
}

@media screen and (max-width: 768px) {
  .sidemenu-toggle-button {
    width: 30px;
    height: 30px;
    margin-right: 20px;
    visibility: visible;
  }

  .header-container {
    grid-area: 1 / 1 / 2 / 1;
  }
}
</style>
