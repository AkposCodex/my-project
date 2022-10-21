import { createRouter, createWebHistory } from "vue-router";
import DefaultTable from "../views/defaultTable.vue";
import Dashboard from "../components/dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/table",
      name: "table",
      component: DefaultTable,
      beforeEnter: (to, from) => {
        // if (from.name == "signup") {
        //   setTimeout(() => {
        //     router.go();
        //   }, 200);
        // }
      },
      meta: {
        needsAuth: false,
      },
    },
    {
      path: "/",
      name: "home",
      component: Dashboard,
    },
  ],
});
export default router;
