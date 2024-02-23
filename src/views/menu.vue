<template>
  <div class="nav-menu">
    <router-link v-for="menu in menus" :to="{ name: menu.name }">
      <div class="nav-item">
        <span>{{ menu.meta?.icon }}</span>
        <span>{{ menu.meta?.title }}</span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { routes } from '@/router/routes'
const menus = routes.filter(e => e.meta?.visible)
</script>

<style lang="less" scoped>
.nav-menu {
  width: 250px;
  .nav-item {
    padding: 10px 20px;
  }
}
</style>