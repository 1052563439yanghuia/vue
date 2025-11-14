<script setup>
import { ref } from 'vue';
import axios from 'axios';

const leftNav = ref([])

axios.get("http://114.55.2.211:9010/nav/left_nav").then(r => {
    /** @type{Array} **/
    const nav = r.data.data.left_nav_info

    nav.forEach(i => { i.show = false })

    leftNav.value = nav
})
</script>
<template>
    <div class="title">教学管理系统</div>
    <div v-for="(i, index) in leftNav" :key="index">
        <div @click="i.show = !i.show">{{ i.text }}</div>
        <div v-if="i.show">
            <div v-for="(j, index) in i.children" :key="index">{{ j.text }}</div>
        </div>
    </div>
</template>
<style scoped>
.title {
    width: 190px;
    height: 40px;
    margin: 5px;
    padding: 8px;
    font-size: 16px;
    color: #178fe6;
    text-align: center;
    font-weight: bold;
    background: linear-gradient(to, #d1ebff, #eff7fd);
    border: 1px solid #95B8E7;
    line-height: 40px;
}

.title :hover {
    border: 3px dashed #1167d8;
}
</style>
