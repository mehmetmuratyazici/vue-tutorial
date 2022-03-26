import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
const routes = [
  {
    name: "HomePage",
    path: "/homepage",
    component: import("@/views/HomePage"),
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: import("@/views/RegisterPage"),
  },
  {
    name: "LoginPage",
    path: "/login",
    component: import("@/views/LoginPage"),
  },
  {
    name: "NewBookmarkPage",
    path: "/new",
    component: import("@/components/home/NewBookmarkPage"),
  },
  {
    name: "AccountPage",
    path: "/account",
    component: import("@/components/account/AccountPage"),
  },
  {
    name: "FavoritesPage",
    path: "/fav",
    component: import("@/components/account/AccountPage"),
  },
  {
    name: "LikesPage",
    path: "/likes",
    component: import("@/components/account/AccountPage"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  const _isAuthenticated = store.getters._isAuthenticated;
  const authRequires = [undefined, "HomePage"];
  const authNotRequires = ["LoginPage", "RegisterPage"];
  const hideMenu = ["NewBookmarkPage"];
  if (authNotRequires.indexOf(to.name) > -1 && _isAuthenticated) next(false);
  if (!_isAuthenticated && authRequires.indexOf(to.name) > -1)
    next({ name: "LoginPage" });

  store.commit("setHideMenuBar", hideMenu.indexOf(to.name) < 0) // sidebar menu icon u görünüp görünmemesini ayarlıyor
  // console.log("from : ", from)
  // console.log("to : ", to)

  next();
});

export default router;
