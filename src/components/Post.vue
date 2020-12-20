<template>
    <div class="jumbotron jumbotron-fluid my-0 bg-none">
        <div class="container">
            <title-line class="pl-md-0">artikel terkait</title-line>
            <card-good-article class="pt-3">
                <h5 className="mt-3">
                    Lihat lebih banyak artikel bagus dari kategori ini!
                </h5>

                <div class="row pt-4">
                    <div class="col-md-4 col-sm-6" v-for="(item, i) in relatedArticles" :key="i">
                        <div class="card">
                            <div class="inner">
                                <img :src="item.image" :alt="item.title" class="card-img-top w-100" loading="lazy">
                            </div>
                            <div class="card-body pl-0">
                                <h6 class="card-subtitle mb-2">{{item.type}}</h6>
                                <h5 class="card-title mt-3">{{item.title}}</h5>
                                <div className="mt-5">
                                    <router-link to="/" tag="button" class="link" :disabled="true">baca artikel</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </card-good-article>
        </div>
    </div>
</template>

<script>
    import {TitleLine, CardGoodArticle} from "../styled-components/post";

    export default {
        name: "Post",
        components: {
            "title-line": TitleLine,
            "card-good-article": CardGoodArticle
        },
        data: () => ({
            relatedArticles: [
                {
                    image:
                        "https://i0.wp.com/refactory.id/wp-content/uploads/2020/02/048-Refactory-ApaYangBaruDiLaravel5.5-011.png?fit=768%2C403&ssl=1",
                    type: "engineering",
                    title: "Apa Yang Baru Di Laravel 5.5",
                },
                {
                    image:
                        "https://i2.wp.com/refactory.id/wp-content/uploads/2020/02/054-Refactory-PenggunaanReduxUntukReactNative011-01.jpg?fit=768%2C403&ssl=1",
                    type: "engineering",
                    title: "Penggunaan Redux Untuk React Native",
                },
            ]
        })
    }
</script>

<style scoped>
    @import "../scss/card-blog.scss";

    .link {
        border: none;
        background-color: transparent;
        outline: none;
        color: #E89A01;
        font-weight: 600;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 12px;
        padding-left: 0;
    }
    .link:hover {
        transition: all 0.5s ease;
        color: #e48800;
    }

    @media only screen and (max-width: 768px) {
        .link {
            font-size: 14px;
        }
    }
</style>
