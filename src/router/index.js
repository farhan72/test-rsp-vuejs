import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../containers/Layout";
import {blogRoute, postRoute} from "./nested-routes-layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "/",
        meta: {
          title: "Home",
        },
        component: () => import("../views/Home"),
      },
      {
        path: "/courses",
        name: "courses",
        meta: {
          title: "Courses",
        },
        component: () => import("../views/Courses"),
      },
      blogRoute,
      postRoute
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title + " - Refactory" : "Refactory";
  next();
});

export default router;
