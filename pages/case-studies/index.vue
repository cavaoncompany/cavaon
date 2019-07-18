<template>
  <div class="case-studies">
    <header-standard page="case-studies" />
    <header-mobile page="case-studies" />
    <div class="case-studies-banner">
      <img class="desktop-banner" src="/images/banner-case-studies.png" alt="skyline">
      <img class="mobile-banner" src="/images/banner-case-studies-mobile.png" alt="skyline">
      <h1>{{ caseStudies.title }}</h1>
      <div class="liner color-bg" />
    </div>
    <main class="container case-studies-container">
      <div class="row">
        <div v-for="(study, i) in caseStudies.caseStudies" :key="i" class="col-md-4 case-study-container">
          <a @click="openCaseStudy(study)" @mouseenter="showLayover('layover' + i)" @mouseleave="hideLayover('layover' + i)">
            <img :src="study.projectImage" :alt="study.projectTitle">
            <div class="case-studies-layover hidden" :class="'layover' + i">
              <p>
                <span v-for="(project, j) in study.typeOfProject" :key="j">
                  {{ project }}
                  <div v-if="j < study.typeOfProject.length - 1" class="grey-spacer" />
                </span>
              </p>
              <div class="liner color-bg" />
              <h2>{{ study.projectTitle }}</h2>
            </div>
          </a>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderStandard from '../../components/HeaderStandard.vue'
import HeaderMobile from '../../components/HeaderMobile.vue'
import Footer from '../../components/Footer.vue'
import caseStudies from '../../static/content/casestudies.json'

export default {
  components: {
    HeaderStandard,
    HeaderMobile,
    Footer
  },
  data() {
    return {
      caseStudies: caseStudies
    }
  },
  methods: {
    showLayover(item) {
      if (process.client) {
        document.getElementsByClassName(item)[0].classList.remove('hidden')
      }
    },
    hideLayover(item) {
      if (process.client) {
        document.getElementsByClassName(item)[0].classList.add('hidden')
      }
    },
    openCaseStudy: function (study) {
      this.$router.push({ name: 'case-studies-url', params: { study: study, url: study.slug } })
    }
  }
}
</script>

<style>
.case-studies .case-studies-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.case-studies .case-studies-banner .liner {
    text-align: center;
    margin: 0 auto;
}
.case-studies .case-studies-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.case-studies .case-studies-banner h1 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-top: -70px;
}
.case-study-container img {
  width: 100%;
}
.case-studies-container {
  margin: 80px auto;
}
.case-study-container {
  position: relative;
  margin-top: 10px;
  margin-bottom: 10px;
}
.case-studies-layover {
  background: rgba(0, 0, 0, 0.79);
  border-radius: 5px;
  position: absolute;
  top: 0;
  left: 15px;
  height: 100%;
  width: calc(100% - 30px);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.case-studies-layover p span {
  color: #fff;
}
.case-studies-layover h2 {
  font-size: 1.7rem;
  font-weight: 500;
  text-align: center;
}
.case-studies-layover .liner {
  width: 36px;
  margin: 0 auto 15px;
}
.case-studies-layover .grey-spacer {
  background-color: #494949;
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50px;
  margin: 4px;
}
</style>
