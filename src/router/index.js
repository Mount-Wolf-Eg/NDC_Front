import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutUs.vue"),
    },
    {
      path: "/packages",
      name: "packages",
      component: () => import("@/views/Packages.vue"),
    },
    {
      path: "/join",
      name: "join",
      component: () => import("@/views/JoinUs.vue"),
    },
  ],
});

export default router;
