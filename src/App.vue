<script setup>
import { RouterView } from 'vue-router';
import Header from './components/header.vue';
import Aside from './components/aside.vue';

</script>

<template>
<Header></Header>
<div>
    <Aside></Aside>
    <RouterView></RouterView>
</div>
</template>

<style scoped>
aside{
  width:200px;
  height: 100%;
}
</style>
