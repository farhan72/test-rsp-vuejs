<template>
  <div>
    <div class="jumbotron jumbotron-fluid my-0">
      <wrapper-best-article class="text-center">
        <h2>Artikel Unggulan</h2>
        <card-article
          class="card"
          v-for="article in articles"
          :key="article.id"
          imageurl="article.image"
        >
          <card-content>
            <h3 class="card-text">
              <router-link to="/" :disabled="true">{{
                article.description
              }}</router-link>
            </h3>
          </card-content>
        </card-article>
      </wrapper-best-article>
    </div>
    <div class="jumbotron jumbotron-fluid bg-none pb-0 mt-0">
      <wrapper-best-article class="text-center">
        <div class="row">
          <div class="col-md-8 col-sm-12 mt-md-4 col-ipad-12">
            <div class="row justify-content-center">
              <div
                class="col-md-5 col-sm-12"
                v-for="item in postList"
                :key="item.id"
              >
                <div class="card rounded text-left">
                  <div class="inner">
                    <img
                      class="card-img-top w-100"
                      :src="item.image"
                      :alt="item.content"
                    />
                  </div>
                  <div class="card-body pl-0">
                    <h6 class="card-subtitle mb-2">{{ item.category }}</h6>
                    <h2 class="card-title">{{ item.content }}</h2>
                    <p class="card-text text-muted">{{ item.description }}</p>
                    <span>
                      <router-link to="/" :disabled="true"
                        >baca artikel</router-link
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 col-sm-auto col-ipad-12">
            <div class="jumbotron jumbotron-fluid h-100 px-0">
              <div class="pb-4">
                <h2 class="text-center" style="color: #e48800; font-size: 16px">
                  CASE STUDIES
                </h2>
              </div>
              <div id="slider">
                <card-project
                  class="card rounded bg-white"
                  v-for="project in projectList"
                  :key="project.id"
                >
                  <card-image :image="project.image">
                    <card-image-content>
                      <router-link to="/" :disabled="true">{{
                        project.productName
                      }}</router-link>
                    </card-image-content>
                  </card-image>
                  <card-project-body>
                    <h6 class="card-title mt-2">{{ project.productName }}</h6>
                    <p class="card-text">{{ project.productDesc }}</p>
                  </card-project-body>
                </card-project>
              </div>

              <div class="d-flex justify-content-center bg-none">
                <button type="button" class="btn-load-more">
                  Load More <i class="fa fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </wrapper-best-article>
    </div>
  </div>
</template>

<script>
import { WrapperBestArticle } from "../styled-components/wrapper";
import { getBestArticles, getPostData } from "../api/services/blog.service";
import { CardBaseArticle, CardContent } from "../styled-components/card";
import {
  CardImage,
  CardImageContent,
  CardProject,
  CardProjectBody,
} from "../styled-components/projects-card";

export default {
  name: "index",
  components: {
    "wrapper-best-article": WrapperBestArticle,
    "card-article": CardBaseArticle,
    "card-content": CardContent,
    "card-project": CardProject,
    "card-image-content": CardImageContent,
    "card-image": CardImage,
    "card-project-body": CardProjectBody,
  },
  data: () => ({
    articles: [],
    postList: [],
    projectList: [],
    slickOptions: {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    },
  }),
  mounted() {
    this.callAPIBestArticles();
    this.callAPIPostList();
  },
  methods: {
    callAPIBestArticles() {
      getBestArticles()
        .then((result) => (this.articles = result.data.data))
        .catch((err) => alert(err.response.data.message));
    },
    callAPIPostList() {
      getPostData()
        .then((result) => {
          this.postList = result.data.postList;
          this.projectList = result.data.caseStudies;
        })
        .catch((err) => alert(err.response.data));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/card-category";

.btn-load-more {
  outline: none;
  border: none;
  color: #e48800;
  margin-top: 10px;
  margin-left: 0;
  border-radius: 20px;
  padding: 6px 40px;
  background-color: transparent;
  border: 1px solid #e48800;
  position: relative;
  top: 35px;
  transform: translateX(6%);

  &:hover {
    transition: all 0.5s ease;
    background-color: #e48800;
    color: #fff;
  }
}
</style>
