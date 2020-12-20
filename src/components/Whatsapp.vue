<template>
    <a class="wrapper-icon"
       href="https://web.whatsapp.com/send?phone=6281228203381&text=Halo team Refactory. Saya memiliki beberapa pertanyaan, apakah bisa di bantu?"
       target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>
</template>

<script>
    export default {
        name: "Whatsapp"
    }
</script>

<style scoped>
    .wrapper-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: fixed;
        right: 30px;
        bottom: 30px;
        width: 60px;
        height: 60px;
        background-color: #0eb540;
        padding: 6px 15px;
        text-align: center;
        color: #fff;
        font-size: 30px;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        text-decoration: none;
    }

    .wrapper-icon:hover {
        color: #fff;
    }
</style>
