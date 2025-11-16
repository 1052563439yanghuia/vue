<script setup>
import { ref } from 'vue';
import { q } from '../api/api';

// 搜索条件
const searchForm = ref({
    keyword: '',
    page: 1,
    pageSize: 10,
});
// 学生列表数据
const studentList = ref([]);
const a = ref()
// 总页数
const totalPages = ref(1);

// 获取学生信息
function getStudentInfo() {
    // const paramsStr = Object.entries(searchForm.value).map(([key, val]) => `${key}=${encodeURIComponent(val)}`).join('&');
    const paramsStr = 
        'keyword=' + searchForm.value.keyword +
        '&page=' + searchForm.value.page +
        '&pageSize=' + searchForm.value.pageSize;
    q.get(`/student/info_chufen_search?${paramsStr}`).then(res => {
        const { data } = res;
        a.value = data.data.row
        studentList.value = data.data.row;
        // // 取整
        // totalPages.value = Math.ceil(data.totalCount / searchForm.value.pageSize);
    });
}

function nextPage() {
    if (searchForm.value.page < totalPages.value) {
        searchForm.value.page += 1;
        getStudentInfo();
    }
}

function prevPage() {
    if (searchForm.value.page > 1) {
        searchForm.value.page -= 1;
        getStudentInfo();
    }
}

function goToPage(page) {
    if (page >= 1 && page <= totalPages.value) {
        searchForm.value.page = page;
        getStudentInfo();
    }
}

getStudentInfo()
</script>

<template>
    <div style="padding: 8px;">
        <!-- 学生信息搜索 -->
        <div class="search">
            <form @submit.prevent="getStudentInfo">
                <input v-model="searchForm.keyword" type="text" placeholder="支持学号、姓名和班级查询" />
                <button>搜索</button>
            </form>
        </div>
        <!-- 表格 -->
        <table>
            <caption>受处分学生信息</caption>
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
        <!-- 分页 -->
        <div class="pagination">
            <button @click="prevPage">&lt;</button>
            <button 
                v-for="value in totalPages" 
                :key="value" 
                @click="goToPage(value)"
            >{{ value }}</button>
            <button @click="nextPage">&gt;</button>
        </div>
    </div>
</template>

<style scoped>
.search button {
    width: 58px;
    height: 30px;
    border: 1px dotted gray;
    margin-left: .5rem;
    background-color: #fff;
}
.search input[type="text"],.search select {
    height: 30px;
    padding: 0;
    box-sizing: border-box;
}

caption {
    margin: 10px;
    font-size: 18px;
    font-weight: 700;
}

thead {
    font-size: 14px;
    color: #374151;
    background-color: #f3f4f6;
}

table {
    width: 100%;
    box-sizing: margin-box;
    border-collapse: collapse;
    text-align: center;
}

th,
td {
    padding: 8px;
}

tr:hover {
    background-color: #f9fafb;
}

.pagination{
    display: flex;
    justify-content: end;
    gap: 6px;
    margin: 12px 24px;
}

.pagination button{
    width: 24px;
    height: 24px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
}

.pagination button:hover {
    background-color: #f3f4f6;
}
</style>