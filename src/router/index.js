import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import { useUser } from "../stone/user";
import Login from "../page/login.vue";
import personCenter from "../page/personCenter.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Login },
    { path: "/login", component: Login },
    { path: "/personCenter", component: personCenter },
  ]
});


router.beforeEach((to, from) => {
  if (!useUser.isLogining && to.path !== "/login") return '/login';

  return true
});