import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

const app = createApp(App)

const store = createStore({
    state() {
        return {
            src: "https://conix.ml"
        }
    },
    mutations: {
        change(state) {
            state.src = `https://conix.ml/?random=${Math.random()}`
        }
    }
})
app.use(store)
app.mount('#app')