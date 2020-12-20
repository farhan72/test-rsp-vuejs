<template>
  <div
    class="jumbotron jumbotron-fluid"
    :style="{ background: `${gradient}, url(${imageUrl})` }"
  >
    <div
      class="intro text-sm-center text-md-left"
      :class="{ 'intro-center': currentPage().includes('courses') }"
    >
      <h1 v-html="slogan"></h1>
      <p>{{ text }}</p>
      <div class="container pl-0">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroImage",
  props: ["imageUrl", "altName", "slogan", "text"],
  data: () => ({
    gradient:
      "linear-gradient(110deg,rgba(0, 37, 108, 0.6250875350140056) 0%, rgba(4, 172, 164, 0.5914740896358543) 100%)",
    page: "",
  }),
  methods: {
    currentPage() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.jumbotron {
  height: 635px;
  margin-top: -78px;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  position: relative;
  margin-bottom: 0;
}

.intro {
  padding-top: 100px;
  padding-left: 160px;
  width: 60%;
  h1 {
    font-family: "Raleway", sans-serif !important;
    font-weight: 400;
    line-height: 1.5;
    font-size: 48px;
    color: #fff;
  }
  h1 >>> span,
  h1 >>> b {
    color: #e48800;
  }
  p {
    color: #fff;
    font-size: 16px;
    font-family: "Montserrat", sans-serif !important;
    line-height: 30px;
    margin-top: 20px;
  }
}

.intro.intro-center {
  text-align: center !important;
  width: 55% !important;
  margin: auto;
  padding-left: 0;
}

@media only screen and (max-width: 1000px) {
  .jumbotron {
    height: 535px;
  }

  .intro {
    width: 100%;
    padding-top: 150px;
    padding-left: 10px;
    text-align: center !important;

    h1 {
      line-height: 1;
      font-size: 30px;
    }

    p {
      font-size: 16px;
      line-height: 1.3;
    }
  }
}
</style>
