import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#app')

setTimeout(() => {
    if (window.confirm("要unmount页面吗？")) {
        app.unmount()
    }
}, 5000)