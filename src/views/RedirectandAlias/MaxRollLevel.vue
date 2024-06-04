<template>
    <div>
        <p>Max Roll level</p>
        <p>build level: {{ level }} </p>
        <button @click="router.go(-1)">上一頁</button>
    </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
const route = useRoute()
const level = route.query.level;
</script>
<!-- <script> // op API
export default { 
    data() { return { level: '' }; },
    mounted() { this.level = this.$route.query.level; }
};
</script> -->
