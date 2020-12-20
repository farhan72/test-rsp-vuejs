<template>
  <div>
    <Navbar />
    <div class="jumbotron jumbotron-fluid bg-none">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-ipad-12">
            <div class="row">
              <router-view />
            </div>
          </div>
          <div class="col">
            <RightSection :articles="articleList" />
          </div>
        </div>
      </div>
    </div>
    <router-view name="bottom-component" />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import RightSection from "./RightSection";
import { getPopularArticles } from "../../api/services/blog.service";

export default {
  name: "index",
  components: {
    Navbar,
    RightSection,
  },
  data: () => ({
    articleList: [],
  }),
  props: ["element"],
  methods: {
    fetchPopularArticles() {
      getPopularArticles()
        .then((result) => (this.articleList = result.data.data))
        .catch((err) => alert(err.response.data));
    },
  },
  mounted() {
    this.fetchPopularArticles();
  },
};
</script>

<style scoped></style>
