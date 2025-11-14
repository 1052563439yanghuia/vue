<script setup>

import Aside from './components/aside.vue';
import Header from './components/header.vue';
import NavigationBar from './components/NavigationBar.vue';

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
    <div class="daohanglan"><NavigationBar/></div>
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
  height:100vh;
  background-color: #eff7fd;
}
.daohanglan{
    height: 28px;
    width: 100%;
    background-color: #dbeafe;
}
</style>
