<template>
  <div class="home">
      <nav class="header">
          <router-link :to="{name:routeName.login}">登录</router-link>
          <router-link :to="{name:routeName.register}">注册</router-link>
          <router-link :to="{name:routeName.article_list}">文章列表</router-link>
      </nav>
      <main class="main">
          <router-view />
      </main>
  </div>
</template>

<script lang="ts" setup>
import { routeName } from '@/router/routes';
</script>
<style scoped>
.home {
  /* border: 1px solid #ddd; */
}
.header {
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  height: 50px;
  line-height: 50px;
  text-align: right;
}
.main {
  padding: 20px;
  margin-top: 30px;
}
</style>