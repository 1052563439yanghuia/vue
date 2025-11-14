<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isLogin = ref(false);
</script>
<template>
    <header>
        <div class="logo">
            <span style="font-size: 18px;">镜湖大学</span>
            <span>-</span>
            <span>教学管理系统</span>
        </div>
        <div class="userInfo">
            <div class="message">消息通知<span>(0)</span></div>
            <div v-if="!isLogin" class="user">
                <span>游客</span>
                <RouterLink to="/login">去登录</RouterLink>
            </div>
            <div v-else class="user">
                <span>{{ 'username' }}</span>
                <RouterLink to="/logout">退出</RouterLink>
            </div>
        </div>
    </header>

</template>
<style scoped>
header {
    padding-left: 24px;
    padding-right: 12px;
    background-color: #38bdf8;
    height: 60px;
    color: white;
    display: flex;
    align-content: center;
    justify-content: space-between;
}

.logo {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.userInfo{
    display: flex;
    align-self: center;
    gap:1rem;
}
.userInfo .message span{
    color: #f87171;
}
.userInfo .user{
    display: flex;
    align-items: center;
    gap: 16px;
}
.userInfo .user a{
    font-size: 12px;
    padding: 4px;
    background-color: white;
    border-radius: 4px;
    color: black;
    text-decoration: none;
}
</style>
