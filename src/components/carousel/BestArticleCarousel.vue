<template>
    <div class="col-md-10 slider" v-if="articles.length > 0">
        <VueSlickCarousel v-bind="settings">
            <card-article class="px-3" v-for="article in articles" :key="article.id" v-bind:style="{ backgroundImage: 'url(' + article.image + ')' }">
                <card-content class="card-body">
                    <h3 class="card-text px-3">
                        <router-link to="/" :disabled="true">{{article.description}}</router-link>
                    </h3>
                </card-content>
            </card-article>

            <template #nextArrow="arrowOption">
                <i class="fas fa-chevron-right">
                    {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                </i>
            </template>

            <template #prevArrow="arrowOption">
                <i class="fa fa-chevron-left">
                    {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
                </i>
            </template>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import {CardBaseArticle, CardContent} from "../../styled-components/card";

    export default {
        name: "BestArticleCarousel",
        components: {
            VueSlickCarousel,
            "card-article": CardBaseArticle,
            "card-content": CardContent,
        },
        props: {
            articles: Array
        },
        data: () => ({
            settings: {
                arrows: true,
                dots: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                speed: 1000,
                autoplaySpeed: 3000,
                waitForAnimate: true,
                pauseOnHover: true,
                lazyLoad: "true",
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ],
            }
        })
    }
</script>

<style lang="scss">
    @import "../../scss/slick.scss";
</style>
