<template>
  <!-- masthead-section (this nav bar is visible only on home page) : starts -->
  <header id="intro-header" class="intro-header visible-lg visible-md scroll">
    <div class="container">
      <div class="row">
        <article class="col-md-2 text-left">
          <a href="/">
            <img
              data-no-retina
              alt="Cavaon Logo"
              title="Cavaon Logo"
              class="main-logo img-responsive"
              src="/images/logo-white.png"
            >
          </a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav  standard-nav-white-text visible-md visible-lg">
            <li><a href="#services" class="scroll" aria-label="Scroll to Services">Services</a></li>
            <li><a href="#caseStudies" class="scroll" aria-label="Scroll to Case Studies">Case Studies</a></li>
            <li><a href="/plans" aria-label="Explore plans">Plans</a></li>
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
  props: {
    projectFormOpen: Boolean
  },
  data() {
    return {
      projectForm: this.projectFormOpen
    }
  }
}
</script>

<style>
</style>
