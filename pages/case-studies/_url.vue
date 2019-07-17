<template>
  <div class="case-study">
    <header-standard page="case-study" />
    <header-top page="case-study" />
    <div class="container case-study-container">
      <p>
        <span v-for="(type, i) in caseStudy.typeOfProject" :key="i">
          {{ type }}
        </span>
      </p>
      <div class="liner color-bg" />
      <h1>{{ caseStudy.projectTitle }}</h1>
      <img :src="caseStudy.topImage" :alt="caseStudy.projectTitle">
      <main class="case-study-content row">
        <div class="case-study-social-media col-1"></div>
        <article class="case-study-main col-11 main-caps text-center">
          <h3 class="dark">
            <span>{{ caseStudies.introTitle }}</span>
          </h3>
          <p class="dark">
            {{ caseStudy.intro }}
          </p>
          <img :src="caseStudy.logo" :alt="caseStudy.projectTitle">
          <h3 class="dark">
            <span>{{ caseStudies.challengeTitle }}</span>
          </h3>
          <p class="dark">
            {{ caseStudy.challenge }}
          </p>
          <img :src="caseStudy.centreImage" :alt="caseStudy.projectTitle">
          <h3 class="dark">
            <span>{{ caseStudies.resultTitle }}</span>
          </h3>
          <p class="dark">
            {{ caseStudy.result1 }}
          </p>
          <p class="dark">
            {{ caseStudy.result2 }}
          </p>
          <img :src="caseStudy.font" :alt="caseStudy.projectTitle">
          <p class="dark">
            {{ caseStudy.info1 }}
          </p>
          <p class="dark">
            {{ caseStudy.info2 }}
          </p>
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
.case-study-main img {
    width: auto;
    max-width: 100%;
    margin-bottom: 15px;
    margin-top: 15px;
    height: auto;
  }

  .case-study-main p {
    padding-top: 15px;
    padding-bottom: 15px;
    line-height: 1.5rem;
  }
</style>
