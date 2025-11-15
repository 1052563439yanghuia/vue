<script setup>
    function yanShe(){

    }
</script>

<template>
    <div class="daohanglan">
        <div class="jiantou">&lt;&lt;</div>
        <div class="geren" @click="yanShe"><span class="span">个人中心</span></div>
    </div>
    <div>
        <div class="jiantou">&gt;&gt;</div>
    </div>
</template>

<style>
.daohanglan{
    display: flex;
    justify-content: space-between;
    padding: 0 2px;
}
.jiantou{
    color:#1c95e7 ;
    width: 22px;
    height: 28px;
}
.geren{
    width: 72px;
    height: 25px;
    background-color: #dbeafe;
    text-align: center;
    margin-top: auto;
    border: 1px solid #95B8E7;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
}
.span{
    font-size: 12px;
    color: #4f79ec;
    
}
</style>