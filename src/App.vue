<script lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { SideMenu, Header } from '@/component'

export default {
  name: 'App',
  components: {
    SideMenu,
    Header
  }
}
</script>

<template>
  <div class="container">
    <aside>
      <SideMenu />
    </aside>
    <main>
      <Header />
      <div class="view-wrapper">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
@import '../src/assets/base.css';

.container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 280px 1fr;
  grid-template-rows: 1fr;
}

aside {
  grid-area: 1 / 1 / 1 / 2;
}

main {
  display: grid;
  grid-template-rows: 50px 1fr;
  gap: 20px;
  height: 100%;
  padding: 16px;
  background-color: whitesmoke;
}

.view-wrapper {
  height: 100%;
  width: 100%;
}
</style>
