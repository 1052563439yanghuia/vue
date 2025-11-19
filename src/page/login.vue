<script setup>
import axios from 'axios';
import { router } from '../router';
import { reactive, ref } from 'vue';
import { useUser } from '../stone/user';

const user = reactive({
    account:'admin',
    password: 'admin'
})

function goToPage(){
    axios.post('http://localhost:3000/login',user).then(res =>{
        if(res.status == 200){
            alert(res.data.msg)

            useUser.id = res.data.data.id
            useUser.account = res.data.data.account
            useUser.userName = res.data.data.userName
            useUser.token = res.data.data.token

            router.push('./personal')
        }else{
            alert('登录失败')
        }
    })    
}

    

</script>
<template>
    <div class="quanbu">
        <h3>请登录</h3>
        
        <label for="account">
            <span>账号:</span>
            <input v-model="user.account" type="text" placeholder="请输入你的账号" id="account">
        </label>
            
        <label for="password">
            <span>密码:</span>
            <input v-model="user.password" type="password" placeholder="请输入你的密码" id="password">
        </label>
        <button @click="goToPage">登录</button>
    </div>
</template>
    
<style  scoped>
.quanbu{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
#account{
    width: 320px;
    height: 32px;
    padding: 0;
}
#password{
    width: 320px;
    height: 32px;
    padding: 0;
}
h3{
    margin: 0 ;
}
span{
    font-size: 16px;
    color: #000000;
}
label{
    width: 368px;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 5px;
}
button{
    width: 104px;
    height: 32px;
    color: black;
    background-color: white;
    border: 1px dashed gray;
}
</style>