<template>
  <div class="services-web-development">
    <header-standard page="services-web-development" />
    <header-mobile page="services-web-development" />
    <div class="services-web-development-banner">
      <img class="desktop-banner" src="/images/banner-services.png" alt="skyline">
      <img class="mobile-banner" src="/images/banner-services-mobile.png" alt="skyline">
      <p>{{ services.category }}</p>
      <h1>{{ services.title }}</h1>
    </div>
    <main class="container services-web-development-main-content">
      <h2>
        {{ services.subtitle }}
      </h2>
      <div class="liner color-bg" />
      <p>
        {{ services.intro }}
      </p>
      <img :src="services.image1" :alt="services.title">
      <div class="service-web-details row">
        <div class="col-md-6">
          <img :src="services.image2" :alt="services.header1">
        </div>
        <div class="col-md-6">
          <h3>
            {{ services.header1 }}
          </h3>
          <p>
            {{ services.box1 }}
          </p>
        </div>
        <div class="col-md-6">
          <h3>
            {{ services.header2 }}
          </h3>
          <p>
            {{ services.box2 }}
          </p>
        </div>
        <div class="col-md-6">
          <img :src="services.image3" :alt="services.header1">
        </div>
      </div>
      <div class="purple-bg row">
        <div v-for="(box, i) in services.services" :key="i" class="service-web-box col-md-6">
          <img :src="box.image" :alt="box.header">
          <h3>
            {{ box.header }}
          </h3>
          <div class="liner color-bg" />
          <p>
            {{ box.description }}
          </p>
        </div>
      </div>
      <!-- <BookAMeeting /> -->
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderStandard from '../../components/HeaderStandard.vue'
import HeaderMobile from '../../components/HeaderMobile.vue'
import Footer from '../../components/Footer'
// import BookAMeeting from '../../components/BookAMeeting.vue'
import services from '../../static/content/services.json'

export default {
  components: {
    HeaderStandard,
    HeaderMobile,
    // BookAMeeting,
    Footer
  },
  data() {
    return {
      services: services.serviceDetails[0]
    }
  }
}
</script>

<style>
.services-web-development .services-web-development-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.services-web-development .services-web-development-banner .liner {
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
}
.services-web-development .services-web-development-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.services-web-development .services-web-development-banner p {
  color: #FFC615;
  font-size: 12px;
  font-weight: 700;
  margin-top: -30px;
}
.services-web-development .services-web-development-banner h1 {
    color: #fff;
    font-size: 30px;
    margin: 0 auto;
    width: 350px;
}
.services-web-development main {
  margin-top: 70px;
  font-size: 16px;
}
.services-web-development main h2 {
  font-size: 24px;
  font-weight: 500;
  width: 60%;
}
.services-web-development main .liner {
  width: 36px;
  margin: 25px 0;
}
.services-web-development main img {
  width: 100%;
  margin-bottom: 70px;
}
</style>
