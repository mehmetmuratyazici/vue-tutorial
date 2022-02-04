import {createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
const routes = [
    {
        name : "HomePage",
        path: "/homepage",
        component : import("@/views/HomePage")
    },
    {
        name : "RegisterPage",
        path: "/register",
        component : import("@/views/RegisterPage")
    },
    {
        name : "LoginPage",
        path: "/login",
        component : import("@/views/LoginPage")
    }
]

const router = createRouter({
    routes,
    history : createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    const _isAuthenticated = store.getters._isAuthenticated
    const authRequires = [undefined, "HomePage"]
    const authNotRequires = ["LoginPage", "RegisterPage"]
    if(authNotRequires.indexOf(to.name) > -1  && _isAuthenticated) next(false) 
    if(!_isAuthenticated && authRequires.indexOf(to.name) > -1 )
        next({name : "LoginPage"})

    // console.log("from : ", from)
    // console.log("to : ", to)

    next()
    
})

export default router