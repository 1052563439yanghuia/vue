<script setup>
import { RouterView } from 'vue-router';
import Header from './components/header.vue';
import Aside from './components/aside.vue';

</script>

<template>
  <Header></Header>
  <main>
    <Aside></Aside>
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
main {
  display: flex;
  height: calc(100vh - 60px);
}
</style>
