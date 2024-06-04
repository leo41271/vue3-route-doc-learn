<template>
    UserGeneric.vue {{ $route.params.afterUser }}
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route); 
</script>