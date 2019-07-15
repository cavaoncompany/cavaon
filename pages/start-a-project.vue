<template>
  <div class="start-a-project">
    <header-standard />
    <header-mobile />
    <div class="start-a-project-banner">
      <img src="/images/banner-start-a-project.png" alt="Sydney CBD">
      <h1>{{ start.title }}</h1>
      <div class="liner color-bg" />
    </div>
    <StartAProjectForm />
    <Footer />
  </div>
</template>

<script>
import HeaderStandard from '../components/HeaderStandard.vue'
import HeaderMobile from '../components/HeaderMobile.vue'
import StartAProjectForm from '../components/StartAProjectForm'
import Footer from '../components/Footer'
import start from '../static/content/startaprojectform.json'

export default {
  name: 'StartAProject',
  components: {
    HeaderStandard,
    HeaderMobile,
    Footer,
    StartAProjectForm
  },
  data() {
    return {
      start: start
    }
  }
}
</script>

<style>
.start-a-project-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.start-a-project-banner .liner {
    text-align: center;
    margin: 0 auto;
}
.start-a-project-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.start-a-project-banner h1 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-top: -20px;
}
</style>
