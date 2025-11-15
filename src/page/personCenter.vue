<script setup>
import { useRouter } from 'vue-router';
import { useUser } from '../stone/user';

const router = useRouter();

function logout() {
    useUser.userName = '';
    useUser.account = '';
    useUser.isLogining = false;
    router.push('/login');
}
</script>
<template>
    <div class="user">
        <p>昵称: {{ useUser.userName }}</p>
        <p>身份: {{ useUser.account == 'admin' ? '教师' : '学生' }}</p>
        <button @click="logout()">退出登录</button>
    </div>
</template>

<style scoped>
.user {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

p {
    padding: 4px;
    margin: 0;
    border-style: dotted;
    box-sizing: border-box;
    font-style: italic;
    font-size: 2rem;
}

button {
    width: 104px;
    height: 32px;
    border: 1px dotted gray;
    border-radius: 4px;
    background-color: #fff;
}

button:hover {
    color: #9ca3af;
}
</style>