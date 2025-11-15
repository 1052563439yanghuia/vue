<script setup>
import { ref } from 'vue';
import { q } from '../api/api';
import { useUser } from '../stone/user';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref('admin');
const password = ref('admin');

function handleSubmit() {
    q.post('/login', {
        account: username.value,
        password: password.value
    }).then(r => {
        /** @type{Object} **/
        const res = r.data;
        if (res.code === 200) {
            alert('登录成功');
            useUser.userName = res.data.userName;
            useUser.account = res.data.account;
            useUser.isLogining = true;
            useUser.token = res.data.token;

            router.push('/');
        } else {
            alert('登录失败：' + res.message);
        }
    })
}
</script>
<template>
    <div class="login">
        <form @submit.prevent="handleSubmit">
            <div>
                <h3>请登录</h3>
            </div>
            <div>
                <label for="username">账号:</label>
                <input type="text" id="username" name="username" v-model="username" />
            </div>
            <div>
                <label for="password">密码:</label>
                <input type="password" id="password" name="password" v-model="password" />
            </div>
            <div style="display: flex;justify-content: center;">
                <button type="submit">登录</button>
            </div>
        </form>
    </div>
</template>

<style scoped>
.login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

h3 {
    margin: 0;
    text-align: center;
}

input {
    width: 320px;
    height: 32px;
    margin: 8px;
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