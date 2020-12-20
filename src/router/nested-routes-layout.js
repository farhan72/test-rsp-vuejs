import BlogContainer from "../containers/blog";

const blogRoute = {
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

const postRoute = {
  path: "/post/:material",
  name: "post",
  component: BlogContainer,
  children: [
    {
      path: "",
      name: "post",
      components: {
        default: () => import("../views/Post"),
        "bottom-component": () => import("../components/Post"),
      },
    },
  ],
};

export {blogRoute, postRoute}
