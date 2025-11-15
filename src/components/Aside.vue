<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { q } from '../api/api';

const leftNav = ref([])

q.get("/nav/left_nav").then(r => {
    /** @type{Array} **/
    const nav = r.data.data.left_nav_info
    nav.forEach(i => { i.show = false })
    leftNav.value = nav
})
</script>
<template>
    <aside>
        <div class="title">教学管理系统</div>
        <div class="menu" v-for="(i, index) in leftNav" :key="index">
            <div class="menuTitle" @click="i.show = !i.show">{{ i.text }}</div>
            <div v-if="i.show">
                <div class="menuItem" v-for="(j, index) in i.children" :key="index">{{ j.text }}</div>
            </div>
        </div>
    </aside>
</template>
<style scoped>
aside{
    width: 213px;
    padding: 5px;
    background-color: #eff7fd;
    box-sizing: border-box;
}
.title {
    width: 160px;
    height: 40px;
    padding: 8px;
    color: #178fe6;
    font-size: 16px;
    font-weight: 700;
    line-height: 18.4px;
    border-radius: 4px;
    outline: 1px solid #93c5fd;
    background: linear-gradient(to top, #d1ebff, #eff7fd);
    display: flex;
    align-items: center;
    box-sizing: border-box;
    transition: all 0.3s ease   ;
}

.title:hover {
    outline: 3px dashed #1167d8;
}

.menu {
    color: #551a8b;
}

.menu .menuTitle {
    padding: 12px;
    font-size: 14px;
}
.menu .menuTitle:hover {
    color: #f87171;
    cursor: pointer;
}

.menu .menuItem {
    margin-left: 8px;
    padding: 12px;
    font-size: 12px;
}

.menu .menuItem:hover {
    color: #f87171;
    cursor: pointer;
}
</style>
