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
        <social-sharing class="social-media col-1" :url="'https://www.cavaon.com' + url" inline-template>
          <div>
            <network network="facebook">
              <svg
                class="social-media-icon"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16.2985" cy="16.2985" r="16.2985" fill="#E2E2E2" />
                <g clip-path="url(#clip0)">
                  <path d="M18.1768 8.14925C17.6191 8.14925 17.0923 8.21088 16.4726 8.45742C15.2022 8.9813 14.5825 10.1523 14.5825 12.0321V13.8503H12.806V16.8806H14.5722V25.6119H18.1665V16.8806H20.6144L20.9552 13.8606H18.1665V12.5046C18.1665 12.0732 18.1975 11.7651 18.3214 11.611C18.4764 11.3336 18.7862 11.2104 19.282 11.2104H20.9242V8.18007H18.1665L18.1768 8.14925Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="8.14925" height="17.4627" fill="white" transform="translate(12.806 8.14925)" />
                  </clipPath>
                </defs>
              </svg>
            </network>
            <network network="linkedin">
              <svg
                class="social-media-icon"
                width="33"
                height="34"
                viewBox="0 0 33 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16.2985" cy="16.9999" r="16.2985" fill="#E2E2E2" />
                <g clip-path="url(#clip0)">
                  <path d="M12.6381 23.985H9.69437V14.486H12.6381V23.985ZM11.097 13.303H11.0797C10.0061 13.303 9.31342 12.5723 9.31342 11.6676C9.31342 10.7281 10.0234 10.0148 11.1143 10.0148C12.2052 10.0148 12.8805 10.7281 12.8979 11.6676C12.8979 12.5723 12.2052 13.303 11.097 13.303ZM24.4477 23.985H21.1057V19.0615C21.1057 17.7741 20.5862 16.9042 19.4261 16.9042C18.5429 16.9042 18.0581 17.4957 17.833 18.0699C17.7464 18.2786 17.7637 18.557 17.7637 18.8527V23.985H14.439C14.439 23.985 14.4736 15.2863 14.439 14.5034H17.7464V15.9996C17.9369 15.3559 18.9931 14.4164 20.6901 14.4164C22.7854 14.4164 24.4304 15.7734 24.4304 18.7136V23.985H24.4477Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="15.1343" height="13.9701" fill="white" transform="translate(9.31342 10.0148)" />
                  </clipPath>
                </defs>
              </svg>
            </network>
            <network network="twitter">
              <svg
                class="social-media-icon"
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16.2985" cy="16.2985" r="16.2985" fill="#E2E2E2" />
                <path d="M22.5981 13.1254C22.5981 18.7468 18.8553 22.7947 13.3505 22.9724C11.0225 23.1501 9.42765 22.4521 8 21.3989C9.59486 21.5766 11.7428 21.0563 12.7974 19.9904C11.2026 19.9904 10.3023 19.1021 9.77492 17.8966H11.2026C9.77492 17.3637 8.69453 16.3104 8.69453 14.5593C9.0418 14.7369 9.40193 14.9019 10.1222 14.9019C8.8746 14.204 8.1672 11.9199 9.05466 10.5113C10.6495 12.2625 12.6045 13.8487 15.8328 14.0136C14.9325 10.5113 19.5756 8.73483 21.5305 11.0316C22.4309 10.854 22.9582 10.5113 23.6527 10.1434C23.4727 11.0316 22.9453 11.5519 22.2251 11.8945C22.9325 11.8945 23.4727 11.7168 24 11.3742C23.8328 12.0722 23.1254 12.7828 22.5981 13.1254Z" fill="white" />
              </svg>
            </network>
          </div>
        </social-sharing>
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
            {{ caseStudy.result1 }} <br>
            {{ caseStudy.result2 }}
          </p>
          <p class="dark">
            {{ caseStudy.info1 }} <br>
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
      caseStudy: {},
      url: ''
    }
  },
  created() {
    this.url = this.$route.path
    this.getCaseStudy(this.url)
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
  .social-media-icon {
  margin-bottom: 15px;
  margin-left: 5px;
}
.social-media-icon circle:hover {
  fill: #FFC716;
}
</style>
