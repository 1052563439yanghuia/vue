<script setup>
import { useRouter } from 'vue-router';
import { navBarCheck, navBarRemove, useNavBar } from '../stone/narBar';

const router = useRouter()

function toPage(i) {
    navBarCheck(i)
    router.push(i.name)
}

function deletePage(i, index){
    navBarRemove(i, index)
}

</script>

<template>
    <div class="navbar">
        <div class="jiantou">&lt;&lt;</div>
        <div class="daohanglan">
            <div 
                v-for="(i, index) in useNavBar" 
                :key="i.name" 
                class="geren" 
                :class="{c:i.isCheck}" 
                @click="toPage(i)"
            >
                <span class="span">{{ i.text }}</span>
                <img src="../assets/shanchu.svg" alt="" class="shanchu" @click="deletePage(i, index)">
            </div>
        </div>
        <div class="jiantou">&gt;&gt;</div>
    </div>
</template>

<style>
.navbar {
    display: flex;
    width: 100%;
}

.daohanglan {
    flex: 1;
    display: flex;
    gap: 8px;
    padding: 0 2px;
}

.jiantou {
    color: #1c95e7;
    width: 22px;
    height: 28px;
}

.geren {
    width: 90px;
    height: 25px;
    background-color: #dbeafe;
    text-align: center;
    margin-top: auto;
    border: 1px solid #95B8E7;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}

.geren.c {
    background-color: #fff;
}

.span {
    font-size: 12px;
    color: #4f79ec;

}
.shanchu{
    width: 5px;
    height: 5px;
}
</style>