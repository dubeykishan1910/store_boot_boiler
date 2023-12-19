import { createRouter, createWebHistory } from "vue-router";
// import DefaultCom from "../components/DefaultCom.vue";
import HomeC from "../components/HomeC.vue";
import SideBar from "../components/SideBar.vue";

const routes = [
  { path: "/", name: "HomeC", component: HomeC },
  { path: "/sidebar", name: "SideBar", component: SideBar },

//   {
//     name: "/NotFound",
//     path: "/:pathMatch(.*)*",
//     component: DefaultCom,
//   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;