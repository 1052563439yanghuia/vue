<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="header">
        <div class="zuo">
            <span class="wenzi1">镜湖大学——</span>
            <span class="wenzi2">教学管理系统</span>
        </div>
        <div class="you">
            <div>
                <span class="wenzi3">消息通知</span>
                <span class="wenzi4">（0）</span>
            </div>
            <div><span class="wenzi3">游客</span></div>
            <RouterLink to="./" class="denglu">去登录</RouterLink>
        </div>
    </div>

</template>
<style scoped>
    .header{
        display: flex;
        align-content: center;
        justify-content: space-between;

    }
    .you{
        display: flex;
        align-content: center;
        line-height: 60px;
        height: 60px;
    }
    .wenzi1{
        color: white;
        font-weight: 18px;
        line-height: 60px;
        margin-left: 30px;
    }
    .wenzi2{
        color: white;
        font-weight: 14px;

    }
    .wenzi3{
        color: white;
        font-size: 16px;
    }
    .wenzi4{
        color: brown;
        font-size: 16px;
    }
    .denglu{
        background-color: white;
        color: black;
        width: 60px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        margin-top: 15px;
        margin-left: 15px;
        margin-right: 30px;
        border: 1px solid #121212;
        text-align: center;
        text-decoration: none;
    }

</style>
