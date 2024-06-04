<template><!-- UserSettingsNav.vue -->
    <div class="us__nav">
        <router-link :to="{ name: 'nestEmail' }">emails(使用name)</router-link> <br>
        <router-link to="/emails">emails</router-link><br />
        <router-link to="/profile2">profile</router-link>
    </div>
</template>