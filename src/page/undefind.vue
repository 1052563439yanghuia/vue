<script setup></script>
<template>
    <div>
        <div>
            <div><input type="text" placeholder="支持学号、姓名和班级查询"></div>
            <div><select>
                <option value="">全部</option>
                <option value="">学号</option>
                <option value="">姓名</option>
                <option value="">年级</option>
            </select></div>
            <div>
                <span>精确</span>
                <input type="checkbox">
            </div>
            <button class="">查询</button>
        </div>
        <div></div>
    </div>

</template>
<style scoped>
    .quanbu{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

</style>