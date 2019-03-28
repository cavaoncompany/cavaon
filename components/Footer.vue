<template>
  <!-- page-section : starts -->
  <footer id="mastfoot" class="mastfoot white-bg">
    <!-- inner-section:starts -->
    <section class="inner-section foot-top">
      <div class="container">
        <div class="row">
          <article class="col-md-12 text-center">
            <ul class="foot-social">
              <li v-for="(info, index) in footer.socialIcons" :key="index">
                <a :href="info.link"><img data-no-retina :alt="info.description" :title="info.description" :src="info.image"></a>
              </li>
            </ul>
          </article>
        </div>
        <div class="row">
          <article class="col-md-12 text-center foot-logos">
            <p class="credits">
              &copy; {{ footer.copyright }}
            </p>
          </article>
        </div>
      </div>
    </section>
    <!-- inner-section:ends -->
  </footer>
  <!-- page-section : ends -->
</template>

<script>
import footer from '../static/content/footer.json'

export default {
  data() {
    return {
      footer: footer
    }
  }
}
</script>

<style>

</style>
