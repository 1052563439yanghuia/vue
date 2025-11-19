<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { router } from '../router';
import { navBarAdd } from '../stone/narBar';

const leftNav = ref([])


function unTO(item){
    router.push(item.name)
    navBarAdd({ text:item.text, name:item.name })
}

axios.get("http://114.55.2.211:9010/nav/left_nav").then(r => {
    /** @type{Array} **/
    const nav = r.data.data.left_nav_info

    nav.forEach(i => { i.show = false })

    leftNav.value = nav
})
</script>
<template>
    <div class="biaoti">教学管理系统</div>
    <div v-for="(i, index) in leftNav" :key="index" class="">
        <div style="" @click="i.show = !i.show" class="zhucaidan">
            <span>{{ i.text }}</span>
            <img src="./images/xia.svg" alt="" class="tubiao" :class="{'arrowTransform':i.show}">
            </div>
        <div v-show="i.show">
            <div v-for="(j, index) in i.children" :key="index" class="zicaidan" @click="unTO(j)">{{ j.text }}</div>
        </div>
    </div>
</template>
<style scoped>
.biaoti {
    width: 150px;
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

.biaoti :hover {
    border: 3px dashed #1167d8;
}

.zhucaidan {
    font-weight: bold;
    padding: 12px;
    color: #551A8B;
    display: flex;
    justify-content: space-between;

}
.zhucaidan:hover{
    color: #F87171;
}
.zicaidan{
    height: 40px;
    color: #551A8B;
    line-height: 40px;
    margin-left: 20px;
    
}
.zicaidan:hover{
    color: #F87171;
}
.tubiao{
    width: 15px;
    height: 15px;
}
.arrowTransform{
    transition: 0.2s;
    transform: rotateZ(180deg);

}
</style>
