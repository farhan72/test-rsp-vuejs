<template>
  <div>
    <HeroImage
      image-url="https://refactory.id/wp-content/uploads/2020/01/hero-homepage.jpg"
      slogan="Empowering <span>People</span> Through Programming"
      text="Refactory adalah perusahaan edukasi dan teknologi yang menyediakan layanan lengkap berupa course maupun custom training yang materinya dapat disesuaikan dengan kebutuhan teknologi dan bisnis perusahaan Anda."
    >
      <button-wrapper>
        <tag-button>Temukan Solusi Anda</tag-button>
        <tag-button ml outline>
          Tingkatkan Skill Anda
        </tag-button>
      </button-wrapper>
      <our-partner>
        <div :key="partner.id" v-for="partner in partners">
          <img :alt="partner.name" :src="partner.photo_url" />
        </div>
      </our-partner>
    </HeroImage>
    <home-jumbotron class="jumbotron jumbotron-fluid" transparent>
      <div class="container">
        <h1 className="text-center">Apa Yang Refactory Dapat Bantu?</h1>
        <div class="row justify-content-center text-center mt-5">
          <div class="col-md-6 col-sm-12">
            <img
              alt="memperkuat tim engineer anda"
              loading="lazy"
              src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/material_approval.png?fit=50%2C48&ssl=1"
            />
            <h2 className="mt-2">Memperkuat Tim Engineer Anda</h2>
            <p className="text-muted">
              Bisnis di jaman modern membutuhkan keterampilan pengembangan
              terbaik untuk meningkatkan skala produk. Kami dapat mempersiapkan
              course dan juga dapat menyediakan tim yang menangani kebutuhan
              digital Anda.
            </p>
          </div>
          <div class="col-md-6 col-sm-12">
            <img
              alt="wujudkan software impian anda"
              loading="lazy"
              src="https://i2.wp.com/refactory.id/wp-content/uploads/2020/01/material_bolt.png?fit=28%2C48&ssl=1"
            />
            <h2 className="mt-2">Wujudkan Software Impian Anda</h2>
            <p className="text-muted">
              Kami adalah perusahaan One-Stop IT Solution untuk proyek Anda,
              membantu di setiap tahap mulai dari menyusun ide, melalui desain
              dan pengembangan aplikasi seluler, situs web dan aplikasi desktop,
              hingga peluncuran produk.
            </p>
          </div>
        </div>
      </div>
    </home-jumbotron>
    <home-jumbotron
      className="jumbotron jumbotron-fluid border-top border-light"
      showbgimage
      transparent
    >
      <div class="container text-center insight">
        <h2 className="text-muted">INSIGHT TERBARU</h2>
        <h2 className="title">Knowledge Sharing</h2>
        <a href="/"> Lihat Semua <i class="fa fa-arrow-right"></i> </a>
      </div>
    </home-jumbotron>
    <home-jumbotron
      className="jumbotron jumbotron-fluid border-top border-light"
    >
      <div class="container text-center">
        <div class="row align-items-center justify-content-center">
          <div
            class="col-md-4 col-sm-6 column-image col-ipad-10"
            v-for="item in seeOnList"
            :key="item.id"
          >
            <a :href="item.link_url" target="_blank">
              <img :src="item.photo_url" :alt="item.name" />
            </a>
          </div>
        </div>
      </div>
    </home-jumbotron>
  </div>
</template>

<script>
import HeroImage from "../components/HeroImage";
import { Button, ButtonWrapper } from "../styled-components/button";
import { callAPIAsSeeOn, callAPIPartners } from "../api/services/home.service";
import { OurPartner } from "../styled-components/partner";
import { HomeJumbotron } from "../styled-components/jumbotron";

export default {
  name: "Home",
  components: {
    HeroImage,
    "button-wrapper": ButtonWrapper,
    "tag-button": Button,
    "our-partner": OurPartner,
    "home-jumbotron": HomeJumbotron,
  },
  data() {
    return {
      partners: [],
      seeOnList: [],
    };
  },
  mounted() {
    this.getPartners();
    this.getSeeOnList();
  },
  methods: {
    getPartners() {
      callAPIPartners()
        .then((result) => {
          if (result) {
            const data = result.data.data;
            this.partners = data;
          }
        })
        .catch((error) => alert(error.respond.data));
    },
    getSeeOnList() {
      callAPIAsSeeOn()
        .then((result) => {
          if (result) {
            const data = result.data.data;
            this.seeOnList = data;
          }
        })
        .catch((error) => alert(error.respond.data));
    },
  },
};
</script>

<style scoped>
.insight {
  padding: 100px !important;
}

.column-image img {
  filter: grayscale(100%);
}

.column-image img:hover {
  transition: all 0.5s ease;
  filter: none;
}
</style>
