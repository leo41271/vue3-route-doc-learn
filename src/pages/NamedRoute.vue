<template>
    <h1>NamedRoute.vue</h1>
    <p>Current route name: {{ $route.name }}</p>
    <p>Current route path: {{ $route.path }}</p>
    <ul>
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'about' }">About</router-link></li>
        <li><router-link :to="{ name: 'profile', params: { username: 'erina' } }">User profile</router-link></li>
    </ul>
    <router-view />
</template>