<template>
  <div>
    <jumbotron>
      <div class="container">
        <div class="row">
          <segment class="col-md-3 col-sm-1">
            <h2>Site Map</h2>
            <ul class="list-unstyled">
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/" :disabled="true">Bootcamp</router-link>
              </li>
              <li>
                <router-link to="/" :disabled="true"
                  >Software Development</router-link
                >
              </li>
              <li>
                <router-link to="/courses">Courses</router-link>
              </li>
              <li>
                <router-link to="/" :disabled="true"
                  >Custom Trainings</router-link
                >
              </li>
              <li>
                <router-link to="/blog">Blog</router-link>
              </li>
            </ul>
          </segment>
          <segment class="col-md-3 col-sm-1">
            <h2>Company</h2>
            <ul class="list-unstyled">
              <li>
                <router-link to="/" :disabled="true">About Us</router-link>
              </li>
              <li>
                <router-link to="/" :disabled="true">Career</router-link>
                <span class="badge badge-secondary ml-2">We're Hiring</span>
              </li>
              <li>
                <router-link to="/" :disabled="true">Press Kit</router-link>
              </li>
              <li>
                <router-link to="/" :disabled="true">FAQ</router-link>
              </li>
            </ul>
          </segment>
          <segment class="col-md-2 col-sm-1">
            <h2>Connect</h2>
            <ul class="list-unstyled">
              <li>
                <a href="https://facebook.com/refactoryid">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/refactory.id/">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/refactory">Youtube</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/school/13270470/">
                  LinkedIn
                </a>
              </li>
            </ul>
          </segment>
          <segment class="col-md-4 col-sm-1">
            <socmed>
              <li>
                <a
                  href="https://www.linkedin.com/checkpoint/challengesV2/AQHds3EhtWHOHwAAAXZ2hyIS_ka6YCJn3Q0_FNzU-E4jb1hM6F0ieNLIgS6b0ZGV0M6eKDdudWzjVorxD3MsbSYlMHWyRj75Aw?original_referer=https%3A%2F%2Frefactory.id%2F"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/refactoryid/" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/c/refactory" target="_blank">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/refactory.id/"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </socmed>
            <div class="row mt-5">
              <div class="col-md-6 col-sm-6">
                <h2>Company Address</h2>
                <p>
                  Jln. Palagan Tentara Pelajar Km. 9,8 Ngaglik, Kab. Sleman DI
                  Yogyakarta 55581
                </p>
              </div>
              <div class="col-md-6 col-sm-6 px-md-0">
                <h2>Contact</h2>
                <a href="mailto:marketing@refactory.id">
                  marketing@refactory.id
                </a>
                <br />
                <a href="tel:+6281228203381">+62 8122 8203 381</a>
                <br />
                <br />
                Dewita: <a href="https://wa.me/6285725827222">0857 2582 7222</a>
                <br />
                Septin: <a href="https://wa.me/6287820800206">0878 2080 0206</a>
              </div>
            </div>
          </segment>
        </div>
      </div>
    </jumbotron>
    <copyright class="border-top border-secondary py-4">
      <div class="container">
        © 2020 Refactory - All Rights Reserved - Terms of Services / Privacy
        Policy
      </div>
    </copyright>
  </div>
</template>

<script>
import {
  CopyRight,
  Segment,
  Socmed,
  WrapperJumbotron,
} from "../styled-components/footer";

export default {
  name: "Footer",
  components: {
    jumbotron: WrapperJumbotron,
    segment: Segment,
    socmed: Socmed,
    copyright: CopyRight,
  },
};
</script>
