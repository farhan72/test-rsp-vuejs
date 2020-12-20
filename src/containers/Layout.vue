<template>
  <div id="layout">
    <Navbar />
    <router-view />
    <Footer />
    <Whatsapp />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
export default {
  name: "Layout",
  components: { Footer, Navbar, Whatsapp },
};
</script>

<style></style>
