<script setup>
import { router } from '../router';
import { useUser } from '../stone/user';


function logout() {
    useUser.token = ''
    router.push('/')
}
</script>

<template>
    <div class="quanbu">
        <div class="xinxi">昵称：{{ useUser.userName }}</div>
        <div class="xinxi">身份：教师</div>
        <button @click="logout">退出登录</button>
    </div>
</template>

<style scoped>
.quanbu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button {
    width: 80px;
    height: 40px;
    border: 1px dashed gray;
    background-color: white;
}

.xinxi {
    width: 180px;
    height: 50px;
    font-size: 32px;
    font-weight: bold;
    border: 1px dashed black;
}
</style>