<script setup>
import Aside from './components/aside.vue';
import Header from './components/header.vue';
import NavigationBar from './components/NavigationBar.vue';

</script>

<template>
  <div class="layout">


    <header>

      <Header />

    </header>
    <div class="content-wrapper">
      <aside>

        <Aside />
      </aside>

      <main>
        <div class="daohanglan">
          <NavigationBar />
        </div>
        <RouterView></RouterView>
      </main>
    </div>
  </div>

</template>

<style scoped>
header {
  background-color: #38bdf8;
  height: 60px;

}

aside {
  width: 200px;
  height: calc(100vh - 60px);
  background-color: #eff7fd;
  margin: 0px;
}

.daohanglan {
  height: 28px;
  background-color: #dbeafe;
  display: flex;
  justify-content: space-between;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
}
main{
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
