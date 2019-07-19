<template>
  <div class="solutions-branding">
    <header-standard page="solutions-branding" />
    <header-mobile page="solutions-branding" />
    <div class="solutions-branding-banner">
      <img class="desktop-banner" src="/images/banner-services.png" alt="skyline">
      <img class="mobile-banner" src="/images/banner-services-mobile.png" alt="skyline">
      <p>{{ solutions.area }}</p>
      <h1>{{ solutions.title }}</h1>
    </div>
    <main class="solutions-branding-main-content">
      <div class="container">
        <h2>
          {{ solutions.subheader }}
        </h2>
        <div class="liner color-bg" />
        <p class="solutions-brand-intro">
          {{ solutions.intro }}
        </p>
        <img :src="solutions.image1" :alt="solutions.title">
        <div class="solutions-web-details row">
          <p class="shorter-paragraph">
            {{ solutions.subheader2 }}
          </p>
          <div v-for="(solution, i) in solutions.list" :key="i" class="col-md-6">
            <div class="solutions-productivity-box">
              <p>{{ solution.description }}</p>
            </div>
          </div>
        </div>
        <p class="text-center">
          {{ solutions.andMore }}
        </p>
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
      solutions: solutions.solutions[1]
    }
  }
}
</script>

<style>
.solutions-branding .solutions-branding-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.solutions-branding .solutions-branding-banner .liner {
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
}
.solutions-branding .solutions-branding-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.solutions-branding .solutions-branding-banner p {
  color: #FFC615;
  font-size: 12px;
  font-weight: 700;
  margin-top: -30px;
}
.solutions-branding .solutions-branding-banner h1 {
    color: #fff;
    font-size: 30px;
    margin: 0 auto;
    width: 350px;
}
.solutions-brand-intro {
  margin-bottom: 70px;
}
.solutions-branding .shorter-paragraph {
  margin-left: 30px;
  width: 67%;
}
.solutions-branding main {
  margin-top: 70px;
  font-size: 16px;
  text-align: left;
}
.solutions-branding main h2 {
  font-size: 24px;
  font-weight: 500;
  width: 60%;
  text-align: left;
}
.solutions-branding main p {
  text-align: left;
}
.solutions-productivity-box {
  background: #FFFFFF;
  box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
  border-radius: 5px;
  height: 4.5rem;
  width: 95%;
  margin: 15px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px 10px;
}
.solutions-branding main .solutions-productivity-box p {
  text-align: center;
}
.solutions-branding main .liner {
  width: 36px;
  margin: 25px 0;
}
.solutions-branding main img {
  width: 100%;
  margin-bottom: 70px;
  border-radius: 5px;
}
.solutions-web-details-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 70px;
}
.meeting-form {
  margin: 70px 0;
  position: relative;
}
.solutions-branding-main-content .meeting-form img {
  position: absolute;
  right: 35px;
  top: 213px;
  height: 374px;
  z-index: -20;
  width: auto;
}
.solutions-branding-main-content .text-center {
  text-align: center;
}
@media (max-width: 480px) {
  .solutions-branding main h2 {
  width: 100%;
  }
  .solutions-branding .shorter-paragraph {
    width: 100%;
  }
  .solutions-branding-main-content .meeting-form img {
    display: none;
  }
}
</style>
