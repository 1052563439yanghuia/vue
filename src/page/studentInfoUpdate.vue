<script setup>
import { ref } from 'vue';
import { q } from '../api/api';
import { useUser } from '../stone/user';

const searchId = ref('');
const userInfo = ref();

// 获取学生信息
function getStudentInfo() {
    const paramsStr = 
        'keyword=' + searchId.value +
        '&page=' + 1 +
        '&pageSize=' + 1 +
        '&type=' + 'id' +
        '&isExact=' + 'true';

    q.get(`student/info_search_type?${paramsStr}`).then(res => {
        const { data } = res;
        userInfo.value = data.data[0];
    });
}

// 修改学生信息
function updateStudentInfo() {
    q.post(`student/info_update`, userInfo.value, { headers: { token: useUser.token } }).then(res => {
        alert(res.data.msg);
    });
}
</script>

<template>
    <div>
        <div>
            <input v-model="searchId" type="text" name="" id="">
            <button @click="getStudentInfo">查询</button>
        </div>
        <div v-if="!userInfo">
            请输入正确的学号
        </div>
        <div v-else>
            <div>学号：{{ userInfo.id }}</div>
            <div>姓名：{{ userInfo.name }}</div>
            <div>年龄：{{ userInfo.age }}</div>
            <div>性别：{{ userInfo.gender === 0 ? '男' : '女' }}</div>
            <div>年级：
                <select v-model="userInfo.grade">
                    <option value="前端2201">前端2201</option>
                    <option value="前端2202">前端2202</option>
                    <option value="前端2203">前端2203</option>
                    <option value="前端2204">前端2204</option>
                </select>
                <button @click="updateStudentInfo">更新</button>
            </div>
            <div>处分情况：
                <input type="checkbox" v-model="userInfo.punishment" true-value="1" false-value="0">
                <button @click="updateStudentInfo">更新</button>
            </div>
            <div v-if="userInfo.punishment === 1">处分原因：
                <textarea v-model="userInfo.punishment_reason" name="" id=""></textarea>
                <button @click="updateStudentInfo">更新</button>
            </div>
            <button @click="updateStudentInfo">更新</button>
        </div>
        
    </div>
</template>

<style scoped>
/* 懒得写样式了 */
</style>