<template>
  <div class="services-business-productivity">
    <header-standard page="services-business-productivity" />
    <header-mobile page="services-business-productivity" />
    <div class="services-business-productivity-banner">
      <img class="desktop-banner" src="/images/banner-services.png" alt="skyline">
      <img class="mobile-banner" src="/images/banner-services-mobile.png" alt="skyline">
      <p>{{ services.category }}</p>
      <h1>{{ services.title }}</h1>
    </div>
    <main class="services-business-productivity-main-content">
      <div class="container">
        <h2>
        {{ services.subtitle }}
      </h2>
      <div class="liner color-bg" />
      <p class="services-business-intro">
        {{ services.intro }}
      </p>
      <img :src="services.image1" :alt="services.title">
      <div class="service-web-details row">
        <div class="col-md-6">
          <img :src="services.image2" :alt="services.header1">
        </div>
        <div class="col-md-6 service-web-details-text">
          <h3>
            {{ services.header1 }}
          </h3>
          <p>
            {{ services.box1 }}
          </p>
        </div>
        <div class="col-md-6 service-web-details-text">
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
      </div>
      <div class="purple-bg row">
        <div class="container">
          <div v-for="(box, i) in services.services" :key="i" class="service-web-box col-md-6">
            <div class="service-web-border-box">
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
      services: services.serviceDetails[1]
    }
  }
}
</script>

<style>
.services-business-productivity .services-business-productivity-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.services-business-productivity .services-business-productivity-banner .liner {
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
}
.services-business-productivity .services-business-productivity-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.services-business-productivity .services-business-productivity-banner p {
  color: #FFC615;
  font-size: 12px;
  font-weight: 700;
  margin-top: -30px;
}
.services-business-productivity .services-business-productivity-banner h1 {
    color: #fff;
    font-size: 30px;
    margin: 0 auto;
    width: 350px;
}
.services-business-intro {
  margin-bottom: 70px;
}
.services-business-productivity main {
  margin-top: 70px;
  font-size: 16px;
}
.services-business-productivity main h2 {
  font-size: 24px;
  font-weight: 500;
  width: 60%;
}
.services-business-productivity main h3,
.service-web-box h3 {
  font-size: 16px;
  font-weight: 500;
}
.services-business-productivity main .liner {
  width: 36px;
  margin: 25px 0;
}
.services-business-productivity main img {
  width: 100%;
  margin-bottom: 70px;
  border-radius: 5px;
}
.service-web-details-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
}
.service-web-box {
  margin: 70px 0;
  height: 80%;
}
.service-web-box .service-web-border-box {
  background-color: #fff;
  width: 90%;
  padding: 30px;
  height: 100%;
  box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
  border-radius: 5px;
}
.services-business-productivity main .service-web-box img {
  margin-bottom: 40px;
}
.services-business-productivity main .service-web-box .liner {
  width: 36px;
  margin: 10px 0 25px;
}
.meeting-form {
  margin: 70px 0;
  position: relative;
}
.meeting-form img {
  position: absolute;
  right: 35px;
  top: 213px;
  height: 374px;
  z-index: -20;
}
</style>
