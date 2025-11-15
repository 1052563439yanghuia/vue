import { createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import Login from "../page/login.vue";
import Personal from "../page/personal.vue";
import Studentinfo from "../page/studentinfo.vue";
import ChuFen from "../page/ChuFen.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Login },
    {path:"/personal",component:Personal},
    {path:"/student_info_search",component:Studentinfo},
    {path:"/student_info_chufen",component:ChuFen}
  ]
});
