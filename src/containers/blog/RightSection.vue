<template>
    <div class="row">
        <div class="col-12"></div>
        <div class="col-12">
            <div class="jumbotron bg-none">
                <h2 className="title-h2">HUBUNGKAN DENGAN KAMI</h2>
                <h2 className="heading-title">Ikuti refactory</h2>
                <div class="list-group">
                    <li v-for="socmed in dataSocmeds" :key="socmed.link">
                        <a :href="socmed.link">
                            <i class="icon" :class="socmed.icon"></i>
                            <span class="list-text">{{socmed.name}}</span>
                        </a>
                    </li>
                </div>
            </div>
            <div class="jumbotron bg-own-light">
                <h5 className="text-center title">ARTIKEL POPULER</h5>
                <div class="card" v-for="article in articles" :key="article.id">
                    <div class="inner">
                        <img :src="article.imageUrl" :alt="article.category" class="card-img-top w-100">
                    </div>
                    <div class="card-body px-0">
                        <h6 class="card-subtitle">{{article.category}}</h6>
                        <h5 class="card-title">{{article.content}}</h5>
                        <p class="card-text">{{article.description}}</p>
                        <a href="javascript:void(0)">baca artikel</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RightSection",
        data: () => ({
            dataSocmeds: [
                {
                    link: "https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHP2fwlqQ6E-wAAAXZsvSmoSaPc5sXtqQZNV2UGpUSoyyC9C0NF6FYhOx7wb6N3rAiHF_BkiFnQNEbeHFGo28m3Mt-b9YoiqqyQWzgIZY3lvNaraX25uRQVNvxzmKwmp9C3wdM=&originalReferer=https://refactory.id/blog/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fschool%2F13270470%2F",
                    icon: "fab fa-linkedin-in",
                    name: "Linkedin"
                },{
                    link: "https://www.facebook.com/refactoryid",
                    icon: "fab fa-facebook-f",
                    name: "Facebook"
                },{
                    link: "https://www.instagram.com/refactory.id/",
                    icon: "fab fa-instagram",
                    name: "Instagram"
                },{
                    link: "https://www.youtube.com/c/refactory",
                    icon: "fab fa-youtube",
                    name: "Youtube"
                },
            ]
        }),
        props: ["articles"]
    }
</script>

<style lang="scss" scoped>
    @import "../../scss/right-section-blog";
</style>
