<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <nav class="nav">
      <RouterLink class="nav__link" to="/login">Login</RouterLink>
      <RouterLink class="nav__link" to="/signup">Signup</RouterLink>
    </nav>


    <RouterView />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
}

.nav {
  position: fixed;
  top: 16px;
  right: 20px;
  display: flex;
  gap: 12px;
  z-index: 10;
}

.nav__link {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(30, 26, 20, 0.72);
  color: #fef6ee;
  text-decoration: none;
  font-size: 0.9rem;
}

.nav__link.router-link-active {
  background: rgba(171, 120, 72, 0.88);
}
</style>
