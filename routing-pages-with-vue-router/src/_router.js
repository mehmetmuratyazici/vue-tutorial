import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
    {
        name: "HomePage",
        path: "/",
        component: import("@/views/Home")
    },
    {
        name: "AboutPage",
        path: "/about",
        component: import("@/views/About")
    },
    {
        name: "DetailPage",
        path: "/detail/:userId",
        component: import("@/views/Detail")
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: import("@/views/NotFound") },
]


const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router;