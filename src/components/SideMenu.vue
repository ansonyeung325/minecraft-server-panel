<template>
  <div class="side-menu-container">
    <div class="brand">
      <img src="../assets/icon.png" alt="logo" class="logo" />
    </div>
    <div class="nav-items">
      <router-link class="link" to="/terminal">Terminal</router-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SideMenu'
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
}
.nav-items {
  width: auto;
}
.brand {
  width: 100%;
  margin-bottom: 30px;
}
.logo {
  width: 80px;
  height: 80px;
}
.link {
  display: block;
  width: 100%;
  padding: 8px;
  background-color: none;
  font-size: var(--font-title-size);
  color: black;
  outline: none;
  text-decoration: none;
  border-radius: 8px;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.link:hover {
  background-color: rgb(103, 70, 237);
  color: white;
}
</style>
