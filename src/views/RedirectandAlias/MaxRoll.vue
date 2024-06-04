<template>
    <SameLink></SameLink>
    <div style="border: 1px solid skyblue">
        <div>^^ MaxRoll page</div>
        <div>^^ MaxRoll build</div>
        <div>^^ MaxRoll page</div>
    </div>
    <hr>
    <input v-model="message" placeholder="請輸入 S A B 三種其一級別" />
    <button @click="console.log(message); router.push('/maxroll-build/' + message)">搜尋對應頁面</button>
</template>
<script setup>
import SameLink from './SameLink.vue';
import { useRouter } from 'vue-router';
const router = useRouter()
</script>