import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: { requiresGuest: true },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  await store.dispatch("auth/getCurrentUser");

  // Check for Guard
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Auth Check

    if (store.getters["auth/isAuth"]) {
      to("/dashboard");
    }

    next();
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (store.getters["auth/isAuth"]) {
      to("/dashboard");
    }
    next();
  } else {
    next();
  }
});

export default router;
