import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import Login from "../page/login.vue";
import Personal from "../page/personal.vue";
import Undefind from "../page/undefind.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Login },
    {path:"/personal",component:Personal},
    {path:"/undefind",component:Undefind}
  ]
});
