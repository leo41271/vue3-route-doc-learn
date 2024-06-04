<template>
    <div class="user" style="border: 1px solid red">
        User.vue 部分
        <h2>User {{ $route.params.username }}</h2>
        <router-view></router-view>
    </div>
</template>