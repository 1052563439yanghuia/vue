import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import { useUser } from "../stone/user";
import Login from "../page/login.vue";
import personCenter from "../page/personCenter.vue";
import notFound from "../page/notFound.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: personCenter },
    { path: "/login", name: "login", component: Login },
    { path: "/personCenter", name: "personCenter", component: personCenter },
    { path: "/:pathMatch(.*)*", name: "notFound", component: notFound },
  ]
});


router.beforeEach((to, from) => {
  if (!useUser.isLogining && to.path !== "/login") return '/login';

  return true
});