<template>
  <div>
    <HeroImage
      image-url="https://refactory.id/wp-content/uploads/2020/01/IMG_7378.jpg"
      slogan="Tingkatkan <b>skill pemrograman</b> kapan pun, dimana pun."
      text="We’re a brand of passionate software engineers and educators
                with an engaging curriculum backed by real-world software
                projects ready to boost your career."
    >
      <button-wrapper class="btn-wrapper">
        <tag-button>Masuk & Memulai Belajar</tag-button>
        <tag-button outline>
          Daftar Sekarang
        </tag-button>
      </button-wrapper>
    </HeroImage>
    <courses-jumbotron class="jumbotron mb-0" transparent>
      <div class="container">
        <div class="row pl-5 justify-content-center pr-0 align-items-center">
          <div class="col-md-6 col-sm-12 learn-more">
            <div class="side-title">
              <h2>
                Bagaimana Refactory Course membantu
                <b>meningkatkan skill</b> anda.
              </h2>
              <tag-button>Pelajari Lebih </tag-button>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 my-3">
            <img
              className="feature"
              src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame.png?fit=839%2C481&ssl=1"
              loading="lazy"
              alt="feature"
            />
          </div>
        </div>
      </div>
    </courses-jumbotron>
    <courses-jumbotron class="pl-5">
      <programming class="row">
        <div class="col context pb-sm-4 pt-sm-5">
          <h2>Kursus pemrograman untuk semua orang tanpa terkecuali</h2>
          <p>
            Refactory Course dirancang untuk memudahkan setiap orang mampu
            meningkatkan keahlian dalam software engineering tanpa dibatasi oleh
            kesulitan akses, kesulitan waktu, batasan keahlian, ataupun usia.
          </p>
          <p>
            Dengan pembelajaran berdasarkan pengalaman nyata pengerjaan project,
            bagi pelajar/mahasiswa, Refactory Course akan melengkapi keahlian
            yang sudah diperoleh dalam studi sehingga dapat membuka kesempatan
            tak terbatas pada karir software engineering.
          </p>
          <p>
            Bagi karyawan atau tenaga profesional, Refactory Course dapat
            meningkatkan keahlian software engineer dalam menunjang
            menyelesaikan tugas pekerjaannya tanpa khawatir dengan keterbatasan
            waktu.
          </p>
          <p>
            Masyarakat secara luas juga dapat memanfaatkan pembelajaran untuk
            meningkatkan keahlian sehingga mampu berkarya dan mendapat
            keuntungan karir tanpa khawatir mahalnya belajar.
          </p>
          <tag-button>Daftar Sekarang</tag-button>
        </div>
        <div class="col col-sm-12 col-md-6 context-image">
          <div>
            <img
              src="https://i1.wp.com/refactory.id/wp-content/uploads/2020/01/IMG_1152-1.jpg?fit=690%2C800&ssl=1"
              loading="lazy"
              alt="learning"
            />
          </div>
        </div>
        <div class="col-md-12 text-center py-5">
          <h2 className="text-muted subtitle">MEET OUR GRADUATES</h2>
          <h2 className="font-weight-bold review">Review</h2>
          <h2 className="report">
            Read what our alumni said on <b>Course Report</b>
          </h2>
        </div>
      </programming>
    </courses-jumbotron>
    <courses-jumbotron :transparent="true" class="py-5">
      <div class="row justify-content-center">
        <div
          class="col-md-4 col-sm-6 d-flex align-items-stretch"
          v-for="alumni in alumniList"
          :key="alumni.id"
        >
          <Card :data="alumni" />
        </div>
      </div>
    </courses-jumbotron>
    <start-learning class="jumbotron jumbotron-fluid">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-3 col-sm-3 text-white text-center">
          <h2 style="font-size: 24px">Ready to start Learning?</h2>
        </div>
        <div class="col-md-2 col-sm-2">
          <tag-button>Daftar Sekarang</tag-button>
        </div>
      </div>
    </start-learning>
    <learn-more>
      <div class="container">
        <div>
          <h2>LANGKAH MUDAH</h2>
        </div>
        <div>
          <h1>Memulai Belajar di Refactory Course</h1>
        </div>
        <div>
          <img
            src="https://i0.wp.com/refactory.id/wp-content/uploads/2020/07/Frame-3-1.png?fit=1024%2C199&ssl=1"
            alt="step"
            class="w-100"
          />
        </div>
        <div>
          <tag-button>Pelajari Lebih</tag-button>
        </div>
      </div>
    </learn-more>
  </div>
</template>

<script>
import HeroImage from "../components/HeroImage";
import { Button, ButtonWrapper } from "../styled-components/button";
import {
  CoursesJumbotron,
  JumbotronStartLearning,
} from "../styled-components/jumbotron";
import { CourseProgramming, LearnMore } from "../styled-components/course";
import { callAPIAlumniList } from "../api/services/course.service";
import Card from "../components/Card";

export default {
  name: "Courses",
  components: {
    HeroImage,
    Card,
    "button-wrapper": ButtonWrapper,
    "tag-button": Button,
    "courses-jumbotron": CoursesJumbotron,
    "programming": CourseProgramming,
    "start-learning": JumbotronStartLearning,
    "learn-more": LearnMore,
  },
  data: () => ({
    alumniList: [],
  }),
  mounted() {
    this.getAlumniList();
  },
  methods: {
    getAlumniList() {
      callAPIAlumniList()
        .then((result) => (this.alumniList = result.data.data))
        .catch((err) => alert(err.respond.data));
    },
  },
};
</script>

<style scoped>
.btn-wrapper button {
  position: relative;
}
.btn-wrapper button:nth-child(1) {
  right: 15px;
}
.btn-wrapper button:nth-child(2) {
  left: 15px;
}
</style>
