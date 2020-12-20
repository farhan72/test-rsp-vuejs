<template>
    <div class="col-md-12 col-ipad-12">
        <div class="row">
            <div class="mt-3 pt-3" v-for="(category, i) in categoryList" :key="category.id" :class="i == 0 ? 'col-md-12' : 'col-md-6'">
                <div class="card">
                    <div class="inner">
                        <img :src="category.imageUrl" :alt="category.category" class="card-img">
                    </div>
                    <div class="card-body pl-0">
                        <h6 class="card-subtitle mb-2">{{category.category}}</h6>
                        <h2 class="card-title">{{category.content}}</h2>
                        <p class="card-text text-muted">{{category.description}}</p>
                        <span>
                    <router-link :to="'/post/' + category.content.replace(/ /g, '-').toLowerCase()">
                        baca artikel
                    </router-link>
                </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {getCategoryList} from "../api/services/blog.service";
    export default {
        name: "Blog",
        data() {
            return {
                categoryList: []
            }
        },
        mounted() {
            this.getCategories();
        },
        methods: {
            getCategories() {
                getCategoryList().then(result => this.categoryList = result.data.data)
                    .catch(err => alert(err.response.data));
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../scss/card-category.scss";
</style>
