import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import Login from "../page/login.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Login }],
});
