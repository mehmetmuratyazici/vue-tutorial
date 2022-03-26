import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"
import { appAxios } from '@/utils/appAxios'

import 'vue-toast-notification/dist/theme-sugar.css';
import router from './router'
import store from '@/store'
import AppHeader from '@/components/common/AppHeader'

import VueToast from 'vue-toast-notification'

import io from 'socket.io-client';

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueToast)
app.component('app-header',AppHeader)
app.config.globalProperties.$appAxios = appAxios

const socket = io(store.getters._getSocketAddress)
app.config.globalProperties.$socket = socket
app.mount('#app')
