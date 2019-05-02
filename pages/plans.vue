<template>
  <div id="plans">
    <HeaderTop />
    <HeaderStandard />
    <HeaderMobile />
    <div class="container">
      <div class="row intro">
        <h3 class="dark">
          <span>{{ plans.title }}</span>
        </h3>
        <p>{{ plans.intro }}</p>
      </div>
      <div class="plan-wrapper" />
        <div class="row plan-container">
          <div v-for="(plan, i) in plans.plans" :key="i" v-bind:class="{'border-right': i < 2}" class="col-md-4 plan-columns">
            <h4>{{ plan.title }}</h4>
            <p class="plan-description">{{ plan.description }}</p>
            <div class="image-container">
              <img :src="plan.image" :alt="plan.title">
            </div>
            <p class="price">{{ plan.from }} <span>{{ plan.price }}</span></p>
            <div class="welcome-button">
              <a class="btn btn-odin btn-odin-color" href="/start-a-project">{{ plan.buttonText }}</a>
            </div>
              <p class="service-list" />
              <P v-for="(service, i) in plan.services" :key="i" class="service-list">{{ service }}</p>
            </div>
          </div>
        <div class="row cant-find-plan"></div>
      </div>
    <Footer />
  </div>
</template>

<script>
import plans from '../static/content/plans.json'
import HeaderTop from '../components/HeaderTop'
import HeaderStandard from '../components/HeaderStandard'
import HeaderMobile from '../components/HeaderMobile'
import Footer from '../components/Footer'

export default {
  name: 'plans',
  components: {
    HeaderTop,
    HeaderStandard,
    HeaderMobile,
    Footer
  },
  data() {
    return {
      plans: plans
    }
  }
}
</script>

<style>
  #plans .container {
    position: relative;
  }
  #plans .intro {
    margin-top: 115px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  #plans .intro h3 {
    margin: 0 auto;
    font-weight: 600;
  }
  #plans .intro p {
    width: 60%;
    margin: 0 auto;
    margin-top: 30px;
  }
  #plans #standard-header {
    display: block;
  }
  #plans .image-container {
    height: 180px;
  }
  #plans .image-container img {
    height: 100%;
    max-width: 100%;
  }
  #plans .plan-container {
    margin-top: 80px;
    box-shadow: 0 0 15px #e2e2e2;
    padding-top: 40px;
    padding-bottom: 40px;
    position: relative;
  }
  #plans .service-list {
    line-height: 40px;
    min-height: 40px;
    border-bottom: 1px solid #e2e2e2;
    margin: 0;
    text-align: left;
    font-weight: 600;
  }
  #plans .btn-odin-color {
    width: 100%;
    font-weight: 600;
    color: #fff;
  }
  #plans .price span {
    font-size: 2rem;
  }
  #plans .price {
    font-weight: 600;
    color: #582C87;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  #plans .plan-container h4 {
    color: #582C87;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-weight: 600;
    margin-bottom: 30px;
    font-size: 20px;
  }
  #plans .plan-description {
    text-align: center;
    margin-bottom: 30px;
  }
  #plans .plan-columns {
    padding-left: 30px;
    padding-right: 30px;
  }
  .border-right {
    border-right: 1px solid #e2e2e2;
  }
  #plans .plan-wrapper {
    background-image: url('/images/bottom-banner.png');
    position: absolute;
    width: 100%;
  }
</style>
