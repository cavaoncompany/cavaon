<template>
  <div class="solutions-e-commerce-platform">
    <header-standard page="solutions-e-commerce-platform" />
    <header-mobile page="solutions-e-commerce-platform" />
    <div class="solutions-e-commerce-platform-banner">
      <img class="desktop-banner" src="/images/banner-services.png" alt="skyline">
      <img class="mobile-banner" src="/images/banner-services-mobile.png" alt="skyline">
      <p>{{ solutions.area }}</p>
      <h1>{{ solutions.title }}</h1>
    </div>
    <main class="solutions-e-commerce-platform-main-content">
      <div class="container">
        <h2>
          {{ solutions.subheader }}
        </h2>
        <div class="liner color-bg" />
        <p class="solutions-e-commerce-intro">
          {{ solutions.intro }}
        </p>
        <img :src="solutions.image1" :alt="solutions.title">
        <div class="solutions-e-commerce-details">
          <p>
            {{ solutions.text1 }}
          </p>
          <p>
            {{ solutions.text2 }}
          </p>
        </div>
      </div>
      <div class="solutions-e-commerce-logo">
        <div class="row logo-squares-container">
          <div v-for="(logo, i) in solutions.list" :key="i" class="logo-square-container col-md-4">
            <div class="solutions-logo">
              <img :src="logo.image" alt="partner logo">
            </div>
          </div>
        </div>
      </div>
      <div class="meeting-form">
        <img :src="solutions.formImage" :alt="solutions.title">
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
import solutions from '../../static/content/solutions.json'

export default {
  components: {
    HeaderStandard,
    HeaderMobile,
    BookAMeeting,
    Footer
  },
  data() {
    return {
      solutions: solutions.solutions[2]
    }
  }
}
</script>

<style>
.solutions-e-commerce-platform .solutions-e-commerce-platform-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.solutions-e-commerce-platform .solutions-e-commerce-platform-banner .liner {
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
}
.solutions-e-commerce-platform .solutions-e-commerce-platform-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.solutions-e-commerce-platform .solutions-e-commerce-platform-banner p {
  color: #FFC615;
  font-size: 12px;
  font-weight: 700;
  margin-top: -30px;
}
.solutions-e-commerce-platform .solutions-e-commerce-platform-banner h1 {
    color: #fff;
    font-size: 30px;
    margin: 0 auto;
    width: 350px;
}
.solutions-e-commerce-platform-main-content p,
 .solutions-e-commerce-platform-main-content h2 {
  text-align: left;
}
.solutions-e-commerce-intro {
  margin-bottom: 70px;
}
.solutions-e-commerce-platform main {
  margin-top: 70px;
  font-size: 16px;
}
.solutions-e-commerce-platform main h2 {
  font-size: 24px;
  font-weight: 500;
  width: 60%;
}
.solutions-e-commerce-platform main h3,
.service-web-box h3 {
  font-size: 16px;
  font-weight: 500;
}
.solutions-e-commerce-platform main .liner {
  width: 36px;
  margin: 25px 0;
}
.solutions-e-commerce-platform main img {
  width: 100%;
  margin-bottom: 70px;
  border-radius: 5px;
}
.solutions-e-commerce-details {
  margin-bottom: 40px;
}
.service-web-details-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
}
.solutions-e-commerce-box {
  margin: 70px 0;
  height: 80%;
}
.solutions-e-commerce-box .solutions-e-commerce-border-box {
  background-color: #fff;
  width: 99%;
  padding: 20px;
  height: 100%;
  box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
  border-radius: 5px;
}
.solutions-e-commerce-platform main .solutions-e-commerce-box img {
  margin-bottom: 40px;
}
.solutions-e-commerce-platform main .solutions-e-commerce-box .liner {
  width: 36px;
  margin: 10px 0 25px;
}
.logo-squares-container .solutions-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 30px;
  background: #FFFFFF;
  box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
  border-radius: 5px;
}
.logo-squares-container .solutions-logo img {
  margin-bottom: 0;
}
.meeting-form {
  margin: 70px 0;
  position: relative;
}
.solutions-e-commerce-platform-main-content .meeting-form img {
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
  .solutions-e-commerce-box .solutions-e-commerce-border-box {
    height: auto;
  }
  .solutions-e-commerce-box {
    height: auto;
  }
  .solutions-e-commerce-platform-main-content .meeting-form img {
    display: none;
  }
}
</style>
