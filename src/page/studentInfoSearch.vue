<script setup>
import { ref } from 'vue';
import { q } from '../api/api';

const studentList = ref([{
            "id": 1,
            "name": "张明哲",
            "age": 21,
            "gender": 0,
            "grade": "前端2202",
            "punishment": 1,
            "punishment_reason": "炸撤离点"
        }]);

q.get('student/info_search_type').then(res => {
  const { data } = res;
  studentList.value = data.data;
});
</script>

<template>
  <div style="padding: 8px;">
    <!-- 学生信息搜索 -->
    <div></div>
    <!-- 表格 -->
    <table>
        <caption>学生信息查询</caption>
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>性别</th>
                <th>班级</th>
                <th>处分</th>
                <th>处分原因</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="student in studentList" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.age }}</td>
                <td>{{ student.gender ? '女' : '男' }}</td>
                <td>{{ student.grade }}</td>
                <td v-if="student.punishment" style="color: red;">处分中</td>
                <td v-else>无处分</td>
                <td>{{ student.punishment_reason || '无' }}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<style scoped>
caption{
    margin: 10px;
    font-size: 18px;
    font-weight: 700;
}
thead{
    font-size:14px;
    color: #374151;
    background-color: #f3f4f6;
}
table {
    width: 100%;
    box-sizing: margin-box;
    border-collapse: collapse;
    text-align: center;
}
th, td {
    padding: 8px;
}

tr:hover {
    background-color: #f9fafb;
}
</style>