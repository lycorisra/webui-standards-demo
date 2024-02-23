<template>
  <div class="home">
    <nav class="left">
      <nav-menu />
    </nav>
    <main class="right">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import NavMenu from '@/views/menu.vue'
import './app.css'


const router = useRouter()
const routes = router.getRoutes()
console.log(22222, routes)
</script>

<style lang="less" scoped>
.home {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .left {
    width: 250px;
    border-right: 1px solid #ddd;
  }
  .right{
    flex-grow: 1;
    padding: 20px 30px;
  }
}
</style>