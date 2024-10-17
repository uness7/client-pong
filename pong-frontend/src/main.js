import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/assets/styles/global.css"
import {createPinia} from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const   app = createApp(App)
const   pinia = createPinia();

pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)

// General Errors Handler
app.config.errorHandler = (err) => {
    console.log("Oops something weird happened? Check it out: " + err);
}

app.mount('#app')
