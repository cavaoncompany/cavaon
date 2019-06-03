<template>
  <div>
    <section id="about" class="contact page intermediate-section full-height parallax about-us-desktop" @mouseover="changeUrl('about')">
      <div class="overlay">
        <div class="container valign">
          <div class="row">
            <article class="col-md-12 col-lg-8 col-lg-offset-2 main-caps text-center">
              <h3 class="white">
                <span>{{ about.title }}</span>
              </h3>
              <div class="liner color-bg" />
              <p v-for="(paragraph, i) in about.paragraphsDesktop" :key="i" class="white">
                {{ paragraph }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
    <section id="about-mobile" class="contact page intermediate-section parallax about-us-mobile">
      <div class="overlay">
        <div class="container valign">
          <div class="row">
            <article class="col-md-12 text-center">
              <h3 class="white">
                <span>{{ about.title }}</span>
              </h3>
              <div class="liner color-bg" />
              <p v-for="(paragraph, i) in about.paragraphsMobile" :key="i" class="white">
                {{ paragraph }}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import about from '../static/content/about.json'

export default {
  name: 'About',
  data() {
    return {
      about: about
    }
  },
  methods: {
    changeUrl: function (link) {
      history.pushState({}, null, '/' + link)
    }
  }
}
</script>

<style>
#about p {
  line-height: 1.5rem;
  padding-top: 10px;
}
</style>
