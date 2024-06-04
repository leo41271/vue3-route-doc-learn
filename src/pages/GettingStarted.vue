<template>
    <h1>App.vue 檔案</h1>
    <p>
        <strong>Current route path:</strong> {{ $route.fullPath }}
    </p>
    <nav>
        <!-- 使用 router-link 組件進行導覽導航 -->
        <!-- 透過傳遞 `to` 來指定連結 -->
        <!-- `<router-link>` 將呈現一個帶有正確 `href` 屬性的 `<a>` 標籤 -->
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
    </nav>
    <main>
        <!-- 路由出口 -->
        <!-- 路由匹配到的元件將渲染在這裡 -->
        <RouterView />
    </main>
</template>