<template>
  <section id="mobile-services" class="container">
    <div v-for="(service, index) in services" :key="index" class="card">
      <img data-no-retina alt="Logo" class="card-img-top" title="Logo" :src="service.image">
      <div class="card-body">
        <article class="text-center">
          <h3>{{ service.caption }}</h3>
          <p class="dark">
            {{ service.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          image: '/images/icons/Services-Logo.png',
          caption: 'Logo',
          title: 'Logo & Branding',
          description:
            'Make a great impression on your customers with a good logo and branding'
        },
        {
          image: '/images/icons/Services-WebDesign.png',
          caption: 'Web Design',
          title: 'Amazing Web Design',
          description:
            'Build a successful website beginning with good web design - From layout to customer experience.'
        },
        {
          image: '/images/icons/Services-Development.png',
          caption: 'Development',
          title: 'Development',
          description:
            'Build your travel platform with the ability to connect your customers via mobile or desktop.'
        },
        {
          image: '/images/icons/Services-Consultation.png',
          caption: 'Consultation',
          title: 'Consultation',
          description:
            'We give you a hand brainstorming for ideas and overcoming business challenges. Transform them into a digital business any way you want.'
        },
        {
          image: '/images/icons/Services-OngoingSupport.png',
          caption: 'Ongoing Support',
          title: 'Ongoing Support',
          description:
            'You are not alone. We are here to coniously support all our clients for growth and the future of their business.'
        },
        {
          image: '/images/icons/Services-Marketing.png',
          caption: 'Marketing',
          title: 'Marketing',
          description:
            'Tell the world you are here to provide them with products and services. Digital marketing is essential to get traffic to your website.'
        }
      ]
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
