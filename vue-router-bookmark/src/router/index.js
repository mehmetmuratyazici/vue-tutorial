import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        name : "BookmarkPage",
        path : "/bookmark",
        component : import("@/views/Bookmark")
    },
    {
        name : "HomePage",
        path : "/",
        component : import("@/views/HomePage")
    },
    {
        name : "BookmarkAddPage",
        path : "/bookmarkAdd",
        component : import("@/views/BookmarkAddItem")
    }
]

const router = createRouter({
    routes,
    history : createWebHashHistory()
})

export default router;