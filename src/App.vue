<script lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { SideMenu, Header } from '@/component'
import appStore from './store/appStore'

export default {
  name: 'App',
  components: {
    SideMenu,
    Header
  },
  data() {
    return {
      appStore: appStore
    }
  }
}
</script>

<template>
  <div class="base">
    <SideMenu />
    <Header />
    <div class="view-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
@import './index.css';

.base {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: var(--sidemenu-width) 1fr;
  grid-template-rows: var(--header-height) 1fr;
  transition: all 0.2s;
}

.view-wrapper {
  height: 100%;
  width: 100%;
  padding: 20px;
  justify-content: center;
  grid-area: 2 / 2 /3 / 3;
  background-color: whitesmoke;
}

@media screen and (max-width: 1024px) {
  .base {
    grid-template-columns: 80px 1fr;
  }
}

@media screen and (max-width: 768px) {
  .base {
    grid-template-columns: 1fr;
  }

  .view-wrapper {
    grid-area: 2 / 1 / 3 / 1;
  }
}
</style>
