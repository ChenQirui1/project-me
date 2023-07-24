<script setup lang="ts">
import BaseNavbar from "./components/BaseNavbar.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <BaseNavbar class="sticky top-0"></BaseNavbar>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
