<template>
    <span>
        <div class="jumbotron jumbotron-fluid bg-own-light px-0 pb-5" v-if="materials.length > 0">
            <h2 class="title-h2 text-center">CASE STUDIES</h2>
            <VueSlickCarousel v-bind="settings">
                <card-project class="rounded bg-white" v-for="material in materials" :key="material.id">
                    <card-image v-bind:style="{ backgroundImage: 'url(' + material.image + ')' }">
                        <card-image-content>
                            <a href="!#">{{material.materialName}}</a>
                        </card-image-content>
                    </card-image>
                    <card-project-body>
                        <h6 class="card-title mt-2">{{material.materialName}}</h6>
                        <p class="card-text">{{material.descMaterial}}</p>
                    </card-project-body>
                </card-project>
            </VueSlickCarousel>
        </div>
        <div class="jumbotron jumbotron-fluid bg-none pt-0 pl-0">
            <title-line class="pl-0" style="width: 26rem">TAG</title-line>
            <tag>
                <span v-for="(tag, i) in tags" :key="i">
                    <a href="!#" target="_blank">{{tag}}</a>
                </span>
            </tag>
        </div>
    </span>
</template>

<script>
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    import VueSlickCarousel from 'vue-slick-carousel';
    import {CardImage, CardImageContent, CardProject, CardProjectBody} from "../styled-components/projects-card";
    import {getTrainingMaterials} from "../api/services/blog.service";
    import {Tag, TitleLine} from "../styled-components/post";

    export default {
        name: "PostSide",
        components: {
            VueSlickCarousel,
            'card-project': CardProject,
            'card-project-body': CardProjectBody,
            'card-image': CardImage,
            'card-image-content': CardImageContent,
            'title-line': TitleLine,
            'tag': Tag
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
            },
            materials: [],
            tags: [
                "DevOps",
                "Front end Developer",
                "Mobile Developer",
                "Otodidak",
                "Programmer",
            ]
        }),
        mounted() {
            this.callAPITrainingMaterials();
        },
        methods: {
            callAPITrainingMaterials() {
                getTrainingMaterials().then(result => this.materials = result.data.data)
                    .catch(err => alert(err.respond.data))
            }
        }
    }
</script>

<style scoped>

</style>
