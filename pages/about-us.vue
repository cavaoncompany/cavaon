<template>
  <div class="about-us">
    <header-standard page="about-us" />
    <header-mobile page="about-us" />
    <div class="about-us-banner">
      <img class="desktop-banner" src="/images/banner-services.png" alt="skyline">
      <img class="mobile-banner" src="/images/banner-services-mobile.png" alt="skyline">
      <h1>{{ about.title }}</h1>
      <div class="liner color-bg" />
    </div>
    <main class="about-us-content container">
      <div class="about-us-intro">
        <p v-for="(paragraph, i) in about.introParagraphs" :key="i">
          {{ paragraph }}
        </p>
      </div>
      <div v-for="(item, i) in about.list" :key="i" class="about-us-details row">
        <div v-if="i % 2 === 0" class="about-us-wrapper">
          <div class="col-md-6">
            <img :src="item.image" :alt="item.header">
          </div>
          <div class="col-md-6 about-us-details-text">
            <h3>
              {{ item.header }}
            </h3>
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
        <div v-if="i % 2 !== 0" class="about-us-wrapper">
          <div class="col-md-6 about-us-details-text">
            <h3>
              {{ item.header }}
            </h3>
            <p>
              {{ item.description }}
            </p>
          </div>
          <div class="col-md-6">
            <img :src="item.image" :alt="item.header">
          </div>
        </div>
      </div>
      <Team />
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderStandard from '../components/HeaderStandard.vue'
import HeaderMobile from '../components/HeaderMobile.vue'
import Team from '../components/Team.vue'
import Footer from '../components/Footer.vue'
import about from '../static/content/about.json'

export default {
  components: {
    HeaderStandard,
    HeaderMobile,
    Team,
    Footer
  },
  data() {
    return {
      about: about
    }
  }
}
</script>

<style>
.about-us-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.about-us-banner .liner {
    text-align: center;
    margin: 0 auto;
}
.about-us-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.about-us-banner h1 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-top: -20px;
}
.about-us .about-us-intro {
    margin: 70px 0;
}
.about-us .about-us-intro p {
    margin-bottom: 25px;
}
.about-us-wrapper img {
    margin-bottom: 70px;
}
.about-us-details-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-bottom: 70px;
}
@media (max-width: 480px) {
  .about-us-details-text {
    height: auto;
  }
}
</style>
