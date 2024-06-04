<template><!-- SameLink.vue -->
    <router-link to='/leo'>/leo </router-link><br>
    <router-link to='/leo-home'>/leo-home 實際頁面</router-link> <br>
    <router-link to='/d2r-build'>/d2r-build</router-link><br>
    <router-link :to="{ name: 'maxroll' }">/d2r-build name重導</router-link><br>
    <router-link to='/maxroll-build'>/maxroll-build 實際頁面</router-link><br>
</template>