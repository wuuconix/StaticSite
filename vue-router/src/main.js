import { createApp } from 'vue'
import App from './App.vue'
import SonA from './components/SonA.vue'
import SonB from './components/SonB.vue'
import SonC from './components/SonC.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: "/favicon", component: SonA },
    { path: "/avatar", component: SonB },
    { path: "/setu", component: SonC }
]

const router = createRouter({
    history: createWebHistory(window.location.pathname),
    routes
})
const app = createApp(App)
app.use(router)
app.mount('#app')