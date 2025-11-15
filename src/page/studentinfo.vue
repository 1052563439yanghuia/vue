<script setup>
import axios from 'axios';
import { ref } from 'vue';

const Inof = ref([])

axios.get('http://114.55.2.211:9010/student/info_search_type').then(res=>{
    const info = res.data.data
    
     Inof.value = info 
})
</script>
<template>
    <div class="quanbu">
        <div class="shousuo">
            <div><input type="text" placeholder="支持学号、姓名和班级查询" class="shuru"></div>
            <select class="duoxuan">
                <option value="">全部</option>
                <option value="">学号</option>
                <option value="">姓名</option>
                <option value="">年级</option>
            </select>
            <div>
                <span>精确</span>
                <input type="checkbox" class="checkbox">
            </div>
            <button class="chaxun">查询</button>
        </div>
        <div class="xueshengxinxi">
            <h2>学生信息</h2>
            <div class="">
                <table>
                    <tr class="ming">
                        <th>学号</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>性别</th>
                        <th>年级</th>
                        <th>是否处分</th>
                        <th>处分原因</th>
                    </tr>

                    <tr v-for="i in Inof" :key="i.id">
                        <td>{{ i.id }}</td>
                        <td>{{ i.name }}</td>
                        <td>{{ i.age }}</td>
                        <td>{{ i.gender }}</td>
                        <td>{{ i.grade }}</td>
                        <td>{{ i.punishment }}</td>
                        <td>{{ i.punishment_reason || '空' }}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="fenye">
            <div class="zuo">&lt;</div>
            <div class="zuo">1</div>
            <div class="zuo">2</div>
            <div class="zuo">&gt;</div>
        </div>
    </div>

</template>
<style scoped>
    .quanbu{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .shousuo{
        display: flex;
        gap: 8px;
        align-items: center;
        margin-left: 30px;
        margin-top: 10px;
    }
    .shuru{
        width: 248px;
        height: 38px;
    }
    .duoxuan{
        width: 80px;
        height: 32px;
    }
    .checkbox{
        width: 16px;
        height: 16px;
    }
    .chaxun{
        width: 60px;
        height: 32px;
    }
    .xueshengxinxi{
        display: flex;
        text-align: center;
        flex-direction: column;
        width: 100%;

    }
    th{
        background-color: #f3f4f6;
    }
    table{
        width: 100%;
    }
    .zuo{
        width: 24px;
        height: 24px;
        background-color: white;
        border: 1px solid gray;
        color: #c5c5c5;
    }
    .fenye{
        display: flex;
        text-align: center;
        justify-content: end;
        margin-right: 50px;
        margin-top: 20px;
    }
</style>