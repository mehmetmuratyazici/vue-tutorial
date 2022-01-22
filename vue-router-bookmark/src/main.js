import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import {axiosGeneral} from '@/utils/axiosGeneral'


const app = createApp(App)
app.use(store)
app.config.globalProperties.$axiosGeneral = axiosGeneral
app.use(router)
app.mount('#app')
