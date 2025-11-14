<script setup>
import { RouterView } from 'vue-router';
import Aside from './components/aside.vue';
import Header from './components/header.vue';


</script>

<template>
  <header>
    <div>
      <Header/>
    </div>
  </header>
  <aside>
    
    <Aside/>
  </aside>
  <main>
    
    <RouterView></RouterView>
  </main>
</template>

<style scoped>
header{
  background-color: #38bdf8;
  height: 60px;
  
}
aside{
  width:200px;
  height: 100%;
}
</style>
