<script setup>
import axios from 'axios';
import { ref } from 'vue';
const ChuFen = ref([])

axios.get('http://114.55.2.211:9010/student/info_chufen_search').then(res => {
    const chufen = res.data.data.rows
    ChuFen.value = chufen
})
</script>
<template>
    <div class="quanbu">
        <div class="sousuo">
            <input type="text" placeholder="支持学号、姓名和班级查询">
            <button class="chaxun">查询</button>
        </div>
        <div class="chufen">
            <h2>受处分学生信息</h2>
            <table>
                <thead>


                    <tr>
                        <th>学号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>年级</th>
                        <th>处分原因</th>
                    </tr>
                </thead>
                <tbody>


                    <tr v-for="i in ChuFen" :key="i.id">
                        <td>{{ i.id }}</td>
                        <td>{{ i.name }}</td>
                        <td>{{ i.age }}</td>
                        <td>{{ i.gender }}</td>
                        <td>{{ i.grade }}</td>
                        <td>{{ i.punishment_reason || '空' }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="fenye">
            <div class="zuo1">&lt;</div>
            <div class="zuo1">1</div>
            <div class="zuo1">&gt;</div>
        </div>
    </div>

</template>
<style>
input {
    width: 240px;
    height: 32px;
}

.chaxun {
    width: 58px;
    height: 30px;
    border: 1px dashed slategray;
}

.quanbu {
    display: flex;
    flex-direction: column;

}

.sousuo {
    margin-top: 15px;
    margin-left: 20px;
    display: flex;
    gap: 8px;
    align-items: center;

}

.chufen {
    text-align: center;
}

th {
    background-color: #f3f4f6;
}

table {
    width: 100%;
}

.fenye {
    display: flex;
    text-align: center;
    justify-content: end;
    margin-right: 50px;
    margin-top: 20px;
}

.zuo1 {
    width: 24px;
    height: 24px;
    border: 1px solid gray;
    text-align: center;
    color: #c5c5c5;
}
</style>