<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useUser } from '../stone/user';

const searchStudentId = ref('')    //输入的学号
const student = ref(null)   //后端返回的学生信息


function getStudentInfo() {    
    if (!searchStudentId.value) return

    const queryStr = `keyword=${searchStudentId.value}&page=1&pageSize=1&type=id&isExact=true`

    axios.get('http://localhost:3000/student/info_search_type?' + queryStr).then(res => {
        student.value = res.data.data[0]
    })
}

function postUpdate() {
    // 更新学生信息
    axios.request({
        method: 'POST',
        headers: { token: useUser.token },
        url: 'http://localhost:3000/student/info_update',
        data:
        {
            id: student.value.id,
            grade: student.value.grade,
            punishment: student.value.punishment,
            punishment_reason: student.value.punishment_reason
        }
    }).then((v)=>{
        const { data } = v
        alert(data.msg)
    })
}
</script>

<template>

    <div class="quanbu">

        <div class="sousuo1">
            <input type="text" placeholder="请输入学号" class="input1" v-model="searchStudentId">
            <button class="chaxun" @click="getStudentInfo">查询</button>
        </div>

        <!-- 成功展示 -->
        <div v-if="student" class="stu-info">
            <p>学号：{{ student.id }}</p>
            <p>姓名：{{ student.name }}</p>
            <p>年龄：{{ student.age }}</p>
            <p>性别：{{ student.gender }}</p>
            <div class="xiugai">
                <p>年级</p>
                <select v-model="student.grade" name="" id="">
                    <option>前端2201</option>
                    <option>前端2202</option>
                </select>
                <button @click="postUpdate">修改</button>
            </div>
            <div class="xiugai">
                <p>是否处分</p>
                <input type="checkbox" class="xuanzhong" v-model="student.punishment" true-value="1" false-value="0">
                <button @click="postUpdate">修改</button>
            </div>
            <div class="xiugai">
                <p>处分原因：</p>
                <input type="text" v-model="student.punishment_reason">
                <button @click="postUpdate">修改</button>
            </div>
            <div>
                <button @click="postUpdate">修改全部</button>
            </div>
        </div>
        <div v-else>请输入正确的学号</div>
    </div>
</template>
<style scoped>
.quanbu {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
}

.xuanzhong {
    width: 15px;
    height: 15px;
}

.sousuo1 {
    width: 400px;
    height: 24px;
    margin-top: 20px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.input1 {
    width: 250px;
    height: 30px;
    padding: 0;
}

.chaxun {
    width: 40px;
    height: 24px;
    font-size: 13px;
}

.zhanshi {
    width: 400px;
}

.stu-info {
    width: 400px;
    line-height: 28px;
}

.xiugai {
    display: flex;
    align-items: center;
    gap: 10px;
}

button {
    height: 25px;
}
</style>