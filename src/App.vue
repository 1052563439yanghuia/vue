<script setup>
import { RouterView } from 'vue-router';
import Header from './components/header.vue';
import Aside from './components/aside.vue';
import NavBar from './components/navBar.vue'

</script>

<template>
  <Header></Header>
  <main>
    <Aside></Aside>
    <div style="flex: 1;">
      <NavBar />
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  height: calc(100vh - 60px);
}
</style>
