import BlogContainer from "../containers/blog";

const nestedRoutes = {
  path: "/blog",
  name: "blog",
  meta: {
    title: "Blog",
  },
  component: BlogContainer,
  children: [
    {
      path: "",
      name: "blog",
      meta: {
        title: "Blog",
      },
      components: {
        default: () => import("../views/Blog"),
        "bottom-component": () => import("../components/Blog"),
      },
    },
  ],
};

export default nestedRoutes;
