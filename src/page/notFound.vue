<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
<div>404 Not Found, 你当前访问的页面/组件不存在, 可能是你写错了路由或者意外的修改导致了跳转, 页面: {{ route.fullPath }}</div>
</template>

<style scoped>

</style>