import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { appAxios } from '@/utils/appAxios'

import router from './router'
import store from '@/store'
import AppHeader from '@/components/common/AppHeader'

const app = createApp(App)
app.use(router)
app.use(store)
app.component('app-header',AppHeader)
app.config.globalProperties.$appAxios = appAxios
app.mount('#app')
