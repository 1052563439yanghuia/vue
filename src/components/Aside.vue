<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { router } from '../router';

const leftNav = ref([])
// const leftNav = ref([
//     {
//         "text": "学生管理",
//         "children": [
//             {
//                 "text": "学生信息查询",
//                 "name": "student_info_search",
//                 "need": true
//             },
//             {
//                 "text": "管理受处分学生",
//                 "name": "student_info_chufen",
//                 "need": true
//             },
//             {
//                 "text": "学生信息修改",
//                 "name": "student_info_update",
//                 "need": true
//             }
//         ],
//         "need": true
//     },
//     {
//         "text": "成绩管理",
//         "children": [
//             {
//                 "text": "成绩录入",
//                 "name": "score_entry"
//             },
//             {
//                 "text": "成绩分布分析",
//                 "name": "score_distribution"
//             },
//             {
//                 "text": "补考名单生成",
//                 "name": "makeup_list_generate"
//             }
//         ]
//     },
//     {
//         "text": "教师管理",
//         "children": [
//             {
//                 "text": "教师信息查询",
//                 "name": "teacher_info_search"
//             },
//             {
//                 "text": "添加新教师",
//                 "name": "teacher_info_search"
//             },
//             {
//                 "text": "教师课时统计",
//                 "name": "teacher_hours_statistics"
//             }
//         ]
//     },
//     {
//         "text": "事务管理",
//         "children": [
//             {
//                 "text": "查看本周事务安排",
//                 "name": "affair_info_search"
//             },
//             {
//                 "text": "申请调整事务",
//                 "name": "affair_info_apply"
//             },
//             {
//                 "text": "查看申请进度",
//                 "name": "affair_process_search"
//             }
//         ]
//     },
//     {
//         "text": "实验室管理",
//         "children": [
//             {
//                 "text": "实验室预约",
//                 "name": "lab_reservation"
//             },
//             {
//                 "text": "设备借用记录",
//                 "name": "equipment_borrow_log"
//             },
//             {
//                 "text": "安全巡检登记",
//                 "name": "safety_inspection"
//             }
//         ]
//     }
// ])

// leftNav.value.forEach(i => { i.show = false })

function unTO(pageName){
    router.push('./'+pageName)
}

axios.get("http://114.55.2.211:9010/nav/left_nav").then(r => {
    /** @type{Array} **/
    const nav = r.data.data.left_nav_info

    nav.forEach(i => { i.show = false })

    leftNav.value = nav
})
</script>
<template>
    <div class="biaoti">教学管理系统</div>
    <div v-for="(i, index) in leftNav" :key="index" class="">
        <div style="" @click="i.show = !i.show" class="zhucaidan">
            <span>{{ i.text }}</span>
            <img src="./images/xia.svg" alt="" class="tubiao" :class="{'arrowTransform':i.show}">
            </div>
        <div v-show="i.show">
            <div v-for="(j, index) in i.children" :key="index" class="zicaidan" @click="unTO(j.name)">{{ j.text }}</div>
        </div>
    </div>
</template>
<style scoped>
.biaoti {
    width: 150px;
    height: 40px;
    margin: 5px;
    padding: 8px;
    font-size: 16px;
    color: #178fe6;
    text-align: center;
    font-weight: bold;
    background: linear-gradient(to, #d1ebff, #eff7fd);
    border: 1px solid #95B8E7;
    line-height: 40px;
}

.biaoti :hover {
    border: 3px dashed #1167d8;
}

.zhucaidan {
    font-weight: bold;
    padding: 12px;
    color: #551A8B;
    display: flex;
    justify-content: space-between;

}
.zhucaidan:hover{
    color: #F87171;
}
.zicaidan{
    height: 40px;
    color: #551A8B;
    line-height: 40px;
    margin-left: 20px;
    
}
.zicaidan:hover{
    color: #F87171;
}
.tubiao{
    width: 15px;
    height: 15px;
}
.arrowTransform{
    transition: 0.2s;
    transform: rotateZ(180deg);

}
.arrowTransformReturn{
    transform: rotateZ(0deg);
}
</style>
