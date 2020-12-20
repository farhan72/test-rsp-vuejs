<template>
    <div v-if="caseStudies.length > 0">
        <VueSlickCarousel v-bind="settings">
                <card-project
                        class="card rounded bg-white"
                        v-for="project in caseStudies"
                        :key="project.id">
                    <card-image v-bind:style="{ backgroundImage: 'url(' + project.image + ')' }">
                        <card-image-content class="card-content">
                            <router-link to="/" tag="button" :disabled="true">{{project.productName}}</router-link>
                        </card-image-content>
                    </card-image>
                    <card-project-body>
                        <h6 class="card-title mt-2">{{ project.productName }}</h6>
                        <p class="card-text">{{ project.productDesc }}</p>
                    </card-project-body>
                </card-project>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import {
        CardImage,
        CardImageContent,
        CardProject,
        CardProjectBody,
    } from "../../styled-components/projects-card";

    export default {
        name: "CardCaseStudies",
        components: {
            VueSlickCarousel,
            "card-project": CardProject,
            "card-image-content": CardImageContent,
            "card-image": CardImage,
            "card-project-body": CardProjectBody,
        },
        props: {
            caseStudies: Array
        },
        data: () => ({
            settings: {
                arrows: false,
                dots: true,
                infinite: true,
                slidesToShow: 1,
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

<style scoped>

</style>
