import './assets/main.css' // 全域 css 

import { createApp } from 'vue' // main.js
import App from './App.vue'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')