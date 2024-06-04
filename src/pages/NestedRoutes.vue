<template><!-- NestedRoutes.vue -->
    <div style="border: 1px solid yellowgreen">
        <h1>NestedViews.vue</h1>
        <p>
            <router-link to="/users2/leo111">/users2/leo111</router-link><br />
            <router-link to="/users2/jack222/profile">/users2/jack222/profile</router-link><br />
            <router-link to="/users2/max666/posts">/users2/max666/posts</router-link>
            <hr>
            <router-link :to="{ name: 'userName', params: { username: 'Meta444' } }">/users2/Meta444</router-link><br />
            <router-link :to="{ name: 'nestShowParents', params: { username: '只看父組件' } }">/users2/只看父組件</router-link>
            點擊該網址後 重新整理將會顯示 NestUserHome 那個 <br />
        </p>
    </div>
    <router-view></router-view>
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