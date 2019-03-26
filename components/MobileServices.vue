<template>
  <section id="mobile-services" class="container">
    <div v-for="(service, index) in services.services" :key="index" class="card">
      <img data-no-retina :alt="service.title" class="card-img-top" :title="service.title" :src="service.image">
      <div class="card-body">
        <article class="text-center">
          <h3>{{ service.imageTitle }}</h3>
          <p class="dark">
            {{ service.description }}
          </p>
        </article>
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
.card {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.card-img-top {
  width: 100px;
  margin-left: auto;
  margin-right: auto;
}
.card-body h3 {
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  letter-spacing: 4px;
  font-size: 18px;
}
</style>
