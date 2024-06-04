<template><!-- NotFound.vue -->
    您的網址沒有匹配到任何頁面 <br>
    $route. 此物件內容<br>
    fullPath {{ $route.fullPath }} <br>
    匹配到的 path {{ $route.matched[0].path }}, 組件名稱 {{ $route.matched[0].name }}<br>
    {{ $route.params.pathMatch }}
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
console.log("route", route); // 請透過 console 觀察 兩個物件route router
console.log("router", router, router.currentRoute);
</script>