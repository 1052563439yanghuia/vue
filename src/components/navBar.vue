<script setup>
import { useNavBar } from '../stone/navBar';
import { useRouter } from 'vue-router';

const router = useRouter();

function toPath(item) {
    useNavBar.forEach(i => i.isCheck = false);
    item.isCheck = true;
    router.push(item.path);
}

function deletePath(item, index) {
    useNavBar.splice(index, 1);
    if (item.isCheck) {
    useNavBar[index-1].isCheck = true;
    router.push(useNavBar[index-1].path);
    }
}
</script>
<template>
    <div class="navbar">
        <img class="left" src="/download.png" alt="">
        <div class="bar1">
            <div 
                class="item"
                v-for="(item, index) in useNavBar" 
                :key="item.path" 
                :class="{ checked: item.isCheck }"
            >
                <span
                    @click="toPath(item)"
                >{{ item.text }}</span>
                <img 
                    @click="deletePath(item, index)" 
                    v-if="item.path !== '/personCenter'" 
                    class="delete" 
                    src="/download.png" 
                    alt=""
                >
            </div>
        </div>
        <img class="right" src="/download.png" alt="">
    </div>
</template>

<style scoped>
.navbar {
    width: 100%;
    height: 28px;
    background-color: #dbeafe;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    border-bottom: 1px solid #3b82f6;
}

.navbar .bar1 {
    flex: 1;
    height: 104%;
    display: flex;
    align-items: end;
    gap: 12px;
}

.navbar .item {
    padding: 0 14px;
    border: 1px solid #3b82f6;
    border-radius: 6px 6px 0 0;
    position: relative;
}

.navbar .item.checked {
    color: #3b82f6;
    border-bottom: 1px solid #fff;
    background-color: #fff;
}
.navbar .item span {
    user-select: none;
}

img {
    width: 16px;
    height: 16px;
    object-fit: cover;
}

.left {
    object-position: 0;
}

.right {
    object-position: -16px;
}

.delete {
    position: absolute;
    object-position: -32px;
}
</style>