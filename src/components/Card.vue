<template>
    <div class="card">
        <div class="card-body">
            <img class="card-img-top" :src="data.user.photo_url" :alt="data.user.name" />
        </div>
        <div class="card-body flex-fill">
            <h5 class="card-title name">
                {{data.user.name}}
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
                {{data.user.from}}
            </h6>
            <h5 class="card-title py-3" style="color: #e48800">
                <i class="fa fa-star" v-for="star in stars" :key="star"></i>
            </h5>
            <div class="mt-4">
                <h6 class="card-subtitle mb-4 font-weight-bold">
                    {{data.title}}
                </h6>
                <p class="card-text">{{data.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['data'],
        data: () => ({
            stars: [1, 2, 3, 4, 5]
        })
    }
</script>

<style scoped>
    .card {
        box-shadow: 0px 12px 20px 0px rgba(223, 223, 223, 0.8);
        transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
        border: none;
    }
</style>
