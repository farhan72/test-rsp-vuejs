<template>
  <nav class="navbar navbar-expand-lg" v-bind:class="navBlue()">
    <div class="container">
      <span class="navbar-brand" href="#">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Refactory Logo">
        </router-link>
      </span>
      <button class="button-toggler d-lg-none" @click.prevent="toggleMenu">
        <i :class="'fa ' + (isShowMenu ? 'fa-times' : 'fa-bars')"></i>
      </button>
      <div class="collapse navbar-collapse" :class="{'show' : isShowMenu}">
        <ul class="navbar-nav ml-md-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact-active-class="active-nav">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="courses" class="nav-link" exact-active-class="active-nav">Courses</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link" disabled="true">Custom Trainings</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link" disabled="true">Case Studies</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/blog" class="nav-link" active-class="active-nav">Blog</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    isShowMenu: false,
    notBlogPage: ["/", "courses"]
  }),
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu
    },
    navBlue() {
      return this.notBlogPage.indexOf(this.$route.name) < 0 ? 'navbar-blue ' : '';
    }
  }
};
</script>

<style lang="scss">
  @import "../scss/navbar.scss";

  .navbar-blue {
    background: #003547 !important;
  }
</style>
