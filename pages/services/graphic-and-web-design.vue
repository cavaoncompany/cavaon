<template>
  <div class="services-graphic-web">
    <header-standard page="services-graphic-web" />
    <header-mobile page="services-graphic-web" />
    <div class="services-graphic-web-banner">
      <img class="desktop-banner" src="/images/banner-services.png" alt="skyline">
      <img class="mobile-banner" src="/images/banner-services-mobile.png" alt="skyline">
      <p>{{ services.category }}</p>
      <h1>{{ services.title }}</h1>
    </div>
    <main class="services-graphic-web-main-content">
      <div class="container">
        <h2>
          {{ services.subtitle }}
        </h2>
        <div class="liner color-bg" />
        <p class="services-graphic-intro">
          {{ services.intro }}
        </p>
        <img :src="services.image1" :alt="services.title">
        <div class="service-graphic-details">
          <p>
            {{ services.box1 }}
          </p>
          <p>
            {{ services.box2 }}
          </p>
        </div>
      </div>
      <div class="purple-bg row">
        <div class="container">
          <div v-for="(box, i) in services.services" :key="i" class="service-graphic-box col-md-4">
            <div class="service-graphic-border-box">
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
        </div>
      </div>
      <div class="services-graphic-logo">
        <div class="row logo-squares-container">
          <p>{{ services.box4 }}</p>
          <div v-for="(logo, i) in services.logos" :key="i" class="logo-square-container col-md-4">
            <div class="service-logo">
              <img :src="logo" alt="partner logo">
            </div>
          </div>
        </div>
      </div>
      <div class="meeting-form">
        <img :src="services.formImage" :alt="services.title">
        <div class="container">
          <div class="row">
            <BookAMeeting class="col-md-9" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderStandard from '../../components/HeaderStandard.vue'
import HeaderMobile from '../../components/HeaderMobile.vue'
import Footer from '../../components/Footer'
import BookAMeeting from '../../components/BookAMeeting.vue'
import services from '../../static/content/services.json'

export default {
  components: {
    HeaderStandard,
    HeaderMobile,
    BookAMeeting,
    Footer
  },
  data() {
    return {
      services: services.serviceDetails[2]
    }
  }
}
</script>

<style>
.services-graphic-web .services-graphic-web-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.services-graphic-web .services-graphic-web-banner .liner {
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
}
.services-graphic-web .services-graphic-web-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.services-graphic-web .services-graphic-web-banner p {
  color: #FFC615;
  font-size: 12px;
  font-weight: 700;
  margin-top: -30px;
}
.services-graphic-web .services-graphic-web-banner h1 {
    color: #fff;
    font-size: 30px;
    margin: 0 auto;
    width: 350px;
}
.services-graphic-web-main-content p,
 .services-graphic-web-main-content h2 {
  text-align: left;
}
.services-graphic-intro {
  margin-bottom: 70px;
}
.services-graphic-web main {
  margin-top: 70px;
  font-size: 16px;
}
.services-graphic-web main h2 {
  font-size: 24px;
  font-weight: 500;
  width: 60%;
}
.services-graphic-web main h3,
.service-web-box h3 {
  font-size: 16px;
  font-weight: 500;
}
.services-graphic-web main .liner {
  width: 36px;
  margin: 25px 0;
}
.services-graphic-web main img {
  width: 100%;
  margin-bottom: 70px;
  border-radius: 5px;
}
.service-graphic-details {
  margin-bottom: 40px;
}
.service-web-details-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
}
.service-graphic-box {
  margin: 70px 0;
  height: 80%;
}
.service-graphic-box .service-graphic-border-box {
  background-color: #fff;
  width: 99%;
  padding: 20px;
  height: 100%;
  box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
  border-radius: 5px;
}
.services-graphic-web main .service-graphic-box img {
  margin-bottom: 40px;
}
.services-graphic-web main .service-graphic-box .liner {
  width: 36px;
  margin: 10px 0 25px;
}
.meeting-form {
  margin: 70px 0;
  position: relative;
}
.services-graphic-web-main-content .meeting-form img {
  position: absolute;
  width: auto;
  right: 35px;
  top: 213px;
  height: 374px;
  z-index: -20;
}
.logo-squares-container {
  width: 70%;
  margin: 70px auto;
}
.logo-squares-container p {
  width: 100%;
  margin-bottom: 40px;
}
@media (max-width: 480px) {
  .service-graphic-box .service-graphic-border-box {
    height: auto;
  }
  .service-graphic-box {
    height: auto;
  }
  .services-graphic-web-main-content .meeting-form img {
    display: none;
  }
}
</style>
