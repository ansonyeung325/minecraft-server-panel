<script lang="ts">
import { ref, type Ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import SideMenu from './components/SideMenu.vue'
import Header from './components/Header.vue'

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
    <header>
      <Header />
    </header>
    <aside>
      <SideMenu />
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
@import '../src/assets/base.css';

.container {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 50px 1fr;
}

header {
  grid-area: 1 / 2 / 2 / 6;
  background-color: #4669f5;
}

aside {
  grid-area: 1 / 1 / 6 / 2;
}

main {
  grid-area: 2 / 2 / 6 / 6;
  background-color: whitesmoke;
}
</style>
