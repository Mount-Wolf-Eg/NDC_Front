import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: {
        title: "NDC",
      },
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutUs.vue"),
      meta: {
        title: "About us",
      },
    },
    {
      path: "/packages",
      name: "packages",
      component: () => import("@/views/Packages.vue"),
      meta: {
        title: "Packages",
      },
    },
    {
      path: "/join",
      name: "join",
      component: () => import("@/views/JoinUs.vue"),
      meta: {
        title: "Join Us",
      },
    },
    {
      path: "/join-form",
      name: "joinForm",
      component: () => import("@/components/join_team/JobForm.vue"),
      meta: {
        title: "Join Form",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("@/views/Blog.vue"),
      meta: {
        title: "Blogs",
      },
    },
    {
      path: "/blog-details",
      name: "blogDetails",
      component: () => import("@/components/blog/BlogText.vue"),
      meta: {
        title: "Blogs",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactUs.vue"),
      meta: {
        title: "Contact Us",
      },
    },
    {
      path: "/service",
      name: "service",
      component: () => import("@/views/Serviceview.vue"),
      meta: {
        title: "Services",
      },
    },
    {
      path: "/cards",
      name: "serviceCards",
      component: () => import("@/components/service/ServiceCards.vue"),
      meta: {
        title: "All Services",
      },
    },

    {
      path: "/:pathMatch(.*)*",
      name: "Not-found",
      component: () => import("@/views/NotFound.vue"),
      meta: {
        title: "Not Found",
      },
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "NDC";
  next();
});

export default router;
