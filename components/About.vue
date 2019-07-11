<template>
  <div class="container">
    <section id="about" class="row">
      <article class="about-text col-md-5">
        <h2>{{ about.title }}</h2>
        <div class="liner color-bg" />
        <p v-for="(paragraph, i) in about.paragraphsDesktop" :key="i">
          {{ paragraph }}
        </p>
        <div class="welcome-button">
          <a href="/about-us" class="btn btn-odin btn-odin-color">
            {{ about.buttonText }}
          </a>
          </div>
      </article>
      <article class="about-video col-md-7">
        <iframe
          src="https://player.vimeo.com/video/347212128"
          class="about-us-video"
          width="640"
          height="360"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        />
      </article>
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
  }
}
</script>

<style>
#about p {
  line-height: 1.5rem;
  padding-top: 10px;
  text-align: left;
}
#about h2 {
  font-size: 24px;
  text-align: left;
}
#about .about-us-video {
  width: 100%;
}
#about .welcome-button a {
  width: 200px;
}
#about .about-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
