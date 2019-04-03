<template>
  <section class="services page">
    <div class="container">
      <div class="row">
        <article class="col-md-12 col-lg-8 col-lg-offset-2 text-center animated" data-fx="fadeInUp">
          <h3 class="dark">
            <span>{{ services.title }}</span>
          </h3>
          <div class="liner color-bg" />
        </article>
      </div>
      <div class="row service-card-container">
        <div v-for="(service, index) in services.services" :key="index" class="service-card col-12 col-md-6 col-lg-3">
          <img :src="service.image" :alt="service.imageTitle" :title="service.imageTitle">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import services from '../static/content/services.json'

export default {
  data() {
    return {
      services: services
    }
  }
}
</script>

<style>
.service-card-container {
  margin-top: 60px;
  margin-bottom: 60px;
}
.service-card {
  margin: 30px 0px;
}
.service-card h3 {
  color: #582C87;
  font-size: 16px;
}
.service-card img {
  height: 58px;
  margin-bottom: 20px;
}
</style>
