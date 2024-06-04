<template><!-- UserPost.vue -->
    <div>
        User {{ $route.params.username }} with post {{ $route.params.postId }}
    </div>
</template>
<script setup>
import { onMounted, watch } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
const route =useRoute()
onMounted(() => {
    console.log('使用路由不會重載頁面，但同時生命週期較前面者將不會被呼叫', route.params.postId);
})
watch(() => route.params.postId, (newId, oldId) => { // 透過監聽 追蹤 id
    console.log("newId", newId, "oldId", oldId);
})
onBeforeRouteUpdate(async (to, from) => {
    console.log(to, from);
    // XXX.value = await fetchUser(to.params.id) // 其他你的一些操作 拿資料...之類
})
</script>