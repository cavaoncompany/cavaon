<template>
  <div class="solutions-digital-marketing">
    <header-standard page="solutions-digital-marketing" />
    <header-mobile page="solutions-digital-marketing" />
    <div class="solutions-digital-marketing-banner">
      <img class="desktop-banner" src="/images/banner-services.png" alt="skyline">
      <img class="mobile-banner" src="/images/banner-services-mobile.png" alt="skyline">
      <p>{{ solutions.area }}</p>
      <h1>{{ solutions.title }}</h1>
    </div>
    <main class="solutions-digital-marketing-main-content">
      <div class="container">
        <h2>
          {{ solutions.subheader }}
        </h2>
        <div class="liner color-bg" />
        <p class="solutions-digital-intro">
          {{ solutions.intro }}
        </p>
        <img :src="solutions.image1" :alt="solutions.title">
        <p class="solutions-digital-intro">{{ solutions.subheader2 }}</p>
        <div v-for="(solution, i) in solutions.list" :key="i" class="solutions-digital-details row">
          <div v-if="i % 2 === 0" class="solutions-wrapper">
            <div class="col-md-6">
                <img :src="solution.image" :alt="solution.header">
            </div>
            <div class="col-md-6 solutions-digital-details-text">
              <h3>
                {{ solution.header }}
              </h3>
              <p>
                {{ solution.description }}
              </p>
            </div>
          </div>
          <div v-if="i % 2 !== 0" class="solutions-wrapper">
            <div class="col-md-6 solutions-digital-details-text">
              <h3>
                {{ solution.header }}
              </h3>
              <p>
                {{ solution.description }}
              </p>
            </div>
            <div class="col-md-6">
              <img :src="solution.image" :alt="solution.header">
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
      solutions: solutions.solutions[0]
    }
  }
}
</script>

<style>
.solutions-digital-marketing .solutions-digital-marketing-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.solutions-digital-marketing .solutions-digital-marketing-banner .liner {
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
}
.solutions-digital-marketing .solutions-digital-marketing-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.solutions-digital-marketing .solutions-digital-marketing-banner p {
  color: #FFC615;
  font-size: 12px;
  font-weight: 700;
  margin-top: -30px;
}
.solutions-digital-marketing .solutions-digital-marketing-banner h1 {
    color: #fff;
    font-size: 30px;
    margin: 0 auto;
    width: 350px;
}
.solutions-digital-intro {
  margin-bottom: 70px;
}
.solutions-digital-marketing main {
  margin-top: 70px;
  font-size: 16px;
}
.solutions-digital-marketing main h2 {
  font-size: 24px;
  font-weight: 500;
  width: 60%;
}
.solutions-digital-marketing main h3,
.solutions-digital-box h3 {
  font-size: 16px;
  font-weight: 500;
}
.solutions-digital-marketing main .liner {
  width: 36px;
  margin: 25px 0;
}
.solutions-digital-marketing main img {
  width: 100%;
  margin-bottom: 70px;
  border-radius: 5px;
}
.solutions-digital-details-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding-bottom: 70px;
}
.solutions-digital-box {
  margin: 70px 0;
  height: 80%;
}
.solutions-digital-box .solutions-digital-border-box {
  background-color: #fff;
  width: 90%;
  padding: 30px;
  height: 100%;
  box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
  border-radius: 5px;
}
.solutions-digital-marketing main .solutions-digital-box img {
  margin-bottom: 40px;
}
.solutions-digital-marketing main .solutions-digital-box .liner {
  width: 36px;
  margin: 10px 0 25px;
}
.meeting-form {
  margin: 70px 0;
  position: relative;
}
.solutions-digital-marketing .meeting-form img {
  position: absolute;
  right: 35px;
  top: 213px;
  height: 374px;
  z-index: -20;
  width: auto;
}
@media (max-width: 480px) {
  .solutions-digital-marketing .meeting-form img {
    display: none;
  }
  .solutions-digital-box {
    height: auto;
  }
  .solutions-digital-box .solutions-digital-border-box {
    height: auto;
  }
  .solutions-digital-box .solutions-digital-border-box p,
  .solutions-digital-box .solutions-digital-border-box h3 {
    text-align: left;
  }
  .solutions-digital-marketing p,
  .solutions-digital-marketing h2,
  .solutions-digital-marketing h3 {
    text-align: left;
  }
  .solutions-digital-marketing main h2 {
    width: 100%;
  }
  .solutions-digital-details-text {
    height: auto;
  }
}
</style>
