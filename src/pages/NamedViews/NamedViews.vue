<template><!-- NamedViews.vue -->
    <router-link to="/nestView">http://localhost:5173/nestView</router-link>
    <ul>
        <li><router-link to="/nestView">First page</router-link></li>
        <li><router-link to="/nestView/other">Second page</router-link></li>
    </ul>
    <router-view class="view one"></router-view><!-- 這行是 default 的使用-->
    <hr>
    <router-view class="view two" name="a"></router-view>
    <hr>
    <router-view class="view three" name="b"></router-view>
</template>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

.router-link-active {
    color: orange;
}

.router-link-exact-active {
    color: crimson;
}
</style>
<style scoped>
ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

li:not(:last-of-type) {
    margin-right: 1rem;
}
</style>