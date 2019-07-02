<template>
  <!-- masthead-section (this nav bar is visible only on home page) : starts -->
  <header id="intro-header" class="intro-header visible-lg visible-md scroll">
    <div class="container">
      <div class="row">
        <article class="col-md-2 text-left">
          <a itemscope itemtype="https://schema.org/Organization" href="#intro-header">
            <img
              data-no-retina
              alt="Cavaon Logo"
              title="Cavaon Logo"
              class="main-logo img-responsive scroll"
              src="/images/logo-white.png"
              itemprop="logo"
            >
          </a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav standard-nav-white-text visible-md visible-lg">
            <li><a href="#services" class="scroll" aria-label="Scroll to Services">Services</a></li>
            <li><a href="#caseStudies" class="scroll" aria-label="Scroll to Case Studies">Case Studies</a></li>
            <li><a href="/blog" aria-label="Go to blog" @click.prevent="goToPage('/blog')">Blog</a></li>
            <li><a href="#about" class="scroll" aria-label="Scroll to About">About</a></li>
            <li><a href="#contact" class="scroll" aria-label="Scroll to Contact Form">Contact</a></li>
          </ul>
        </article>
      </div>
    </div>
  </header>
  <!-- masthead-section:ends -->
</template>

<script>

export default {
  methods: {
    goToPage: function (page) {
      this.$router.push({ name: 'blog' })
    }
  }
}
</script>

<style>

</style>
