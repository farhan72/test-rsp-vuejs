<template>
  <nav-blogs>
    <div class="container text-center">
      <navbar-blogs>
        <div class="container text-center">
          <navbar-blogs>
            <navblogs-brand>POST CATEGORIES</navblogs-brand>
            <navblogs-menu :open="isOpenMenu">
              <navblogs-link class="d-md-none d-sm-block text-right icon">
                <button @click="isOpenMenu = false">
                  <i class="fa fa-times"></i>
                </button>
              </navblogs-link>
              <navblogs-link
                href="javascript:void(0)"
                v-bind:class="currentPage('blog')"
              >
                <router-link to="/blog">Blog</router-link>
              </navblogs-link>
              <navblogs-link href="javascript:void(0)"
                >Engineering
              </navblogs-link>
              <navblogs-link href="javascript:void(0)">Profile </navblogs-link>
              <navblogs-link href="javascript:void(0)">Tutorial </navblogs-link>
              <navblogs-link href="javascript:void(0)"
                >Tips & Trick</navblogs-link
              >
              <navblogs-link href="javascript:void(0)"
                >Grow & Culture</navblogs-link
              >
              <navblogs-link href="javascript:void(0)">Newsroom</navblogs-link>
              <navblogs-link href="javascript:void(0)">Promo</navblogs-link>
            </navblogs-menu>
            <nav-toggler-blogs @click="toggle()">
              <i class="fa" :class="isOpenMenu ? 'fa-times' : 'fa-bars'"></i>
            </nav-toggler-blogs>
          </navbar-blogs>
        </div>
      </navbar-blogs>
    </div>
  </nav-blogs>
</template>

<script>
import {
  NavbarBlogs,
  NavBlogs,
  NavBlogsBrand,
  NavBlogsLink,
  NavBlogsMenu,
  NavTogglerBlogs,
} from "../../styled-components/navbar-blog";

export default {
  name: "Navbar",
  components: {
    "nav-blogs": NavBlogs,
    "navbar-blogs": NavbarBlogs,
    "navblogs-brand": NavBlogsBrand,
    "navblogs-menu": NavBlogsMenu,
    "navblogs-link": NavBlogsLink,
    "nav-toggler-blogs": NavTogglerBlogs,
  },
  data: () => ({
    isOpenMenu: false,
  }),
  methods: {
    toggle() {
      this.isOpenMenu = !this.isOpenMenu;
    },
    currentPage(page) {
      return this.$route.path.includes(page) ? "menu-active" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  cursor: pointer;
  button {
    border: none;
    background-color: transparent;
    color: #ffffff;
    outline: none;
  }
}

.menu-active {
  color: #ffffff;
  background-color: #008cbd;
}
</style>
