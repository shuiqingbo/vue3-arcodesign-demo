import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/list",
      name: "List",
      component: () => import("@/views/List.vue"),
    },
    {
      path: "/Form",
      name: "Form",
      component: () => import("@/views/Form.vue"),
    },
  ],
});

export default router;
