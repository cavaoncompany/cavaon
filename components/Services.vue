<template>
  <section id="services" class="services page purple-bg page-section">
    <div class="container">
      <div class="row">
        <article class="col-md-12 col-lg-8 col-md-offset-2 text-center animated" data-fx="fadeInUp">
          <h3 class="dark">
            <span>{{ services.title }}</span>
          </h3>
          <div class="liner purple-bg" />
        </article>
      </div>
      <div class="row service-card-container">
        <div v-for="(service, index) in services.services" :key="index" itemscope itemtype="https://schema.org/Service" class="service-card col-12 col-md-6 col-lg-4">
          <a :href="service.link">
            <div class="card">
              <img class="card-img-top" :src="service.image" :alt="service.title">
              <div class="card-body">
                <h5 class="card-title">
                  {{ service.title }}
                </h5>
              </div>
            </div>
          </a>
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
#services .liner {
  background-color: #A265A9;
}
.services .dark {
  font-size: 24px;
}
.service-card-container {
  margin-top: 60px;
  margin-bottom: 60px;
}
#services .card:hover {
  background: linear-gradient(179.89deg, rgba(70, 45, 133, 0.95) 17.82%, rgba(101, 45, 144, 0.95) 107.71%);
}
#services .card:hover h5{
  color: #FFF;
}
.service-card h3 {
  color: #582C87;
  font-size: 16px;
}
#services .service-card {
  margin-top: 15px;
}
#services .card {
  padding: 20px;
  border: none;
  height: 100%;
  color: #494949;
}
#services h5 {
  font-size: 16px;
  font-weight: 500;
}
#services .card-img-top {
  height: 300px;
  width: auto;
  margin-bottom: 20px;
}
#services .card-body {
  padding: 0;
}
</style>
