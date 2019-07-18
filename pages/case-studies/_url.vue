<template>
  <div class="case-study">
    <header-standard page="case-study" />
    <header-top page="case-study" />
    <div class="container case-study-container">
      <p>
        <span v-for="(type, i) in caseStudy.typeOfProject" :key="i">
          {{ type }}
          <div v-if="i < caseStudy.typeOfProject.length - 1" class="grey-spacer" />
        </span>
      </p>
      <div class="liner color-bg" />
      <h1>{{ caseStudy.projectTitle }}</h1>
      <img :src="caseStudy.topImage" :alt="caseStudy.projectTitle">
      <main class="case-study-content row">
        <div class="case-study-social-media col-1"></div>
        <article class="case-study-main col-11 main-caps text-center">
          <h2 class="dark">
            <span>{{ caseStudies.introTitle }}</span>
          </h2>
          <img :src="caseStudy.logo" :alt="caseStudy.projectTitle">
          <p class="dark">
            {{ caseStudy.intro }}
          </p>
          <h2 class="dark">
            {{ caseStudy.challengeTitle }}
          </h2>
          <p class="dark">
            {{ caseStudy.challenge }}
          </p>
          <img :src="caseStudy.centreImage" :alt="caseStudy.projectTitle">
          <h2 class="dark">
            {{ caseStudy.resultTitle }}
          </h2>
          <p class="dark">
            {{ caseStudy.result1 }} <br/>
            {{ caseStudy.result2 }}
          </p>
          <p class="dark">
            {{ caseStudy.info1 }} <br />
            {{ caseStudy.info2 }}
          </p>
          <img :src="caseStudy.font" :alt="caseStudy.projectTitle">
          <img :src="caseStudy.screenshot1" :alt="caseStudy.projectTitle">
          <img v-if="caseStudy.screenshot2 !== ''" :src="caseStudy.screenshot2" :alt="caseStudy.projectTitle">
        </article>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script>
import HeaderStandard from '../../components/HeaderStandard.vue'
import HeaderTop from '../../components/HeaderMobile.vue'
import Footer from '../../components/Footer.vue'
import caseStudies from '../../static/content/casestudies.json'
export default {
  components: {
    HeaderStandard,
    HeaderTop,
    Footer
  },
  data() {
    return {
      caseStudies: caseStudies.caseStudies,
      caseStudy: {}
    }
  },
  created() {
    this.getCaseStudy(this.$route.path)
  },
  methods: {
    getCaseStudy(url) {
      const path = url.split('/')[2]
      this.caseStudy = this.caseStudies.filter(study => study.slug === path)[0]
    }
  }
}
</script>

<style>
.case-study-container {
  margin-top: 90px;
  text-align: center;
}
.case-study-container p {
  color: #494949;
  margin: 0 auto;
}
.case-study-container h1 {
  font-size: 30px;
  margin-bottom: 30px;
}
.case-study-container .liner {
  width: 36px;
  margin: 20px;
}
.case-study-container img {
  width: 100%;
  margin-bottom: 15px;
  margin-top: 15px;
}
.case-study-main img  {
    width: auto;
    max-width: 100%;
    margin-bottom: 15px;
    margin-top: 15px;
    height: auto;
  }
  .case-study-main h2 {
    font-size: 22px;
    font-weight: 500;
    margin-top: 30px;
  }
  .case-study-main p {
    padding-top: 15px;
    padding-bottom: 15px;
    line-height: 1.5rem;
    font-size: 15px;
    width: 80%;
    margin: 0 auto;
    text-align: left;
  }
  .case-study-container .grey-spacer {
    background-color: #494949;
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50px;
    margin: 4px;
  }
</style>
