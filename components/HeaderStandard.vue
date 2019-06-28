<template>
  <!-- masthead-section (this nav bar is initially hidden but will be visible only on inner pages) : starts -->
  <header id="standard-header" class="standard-header">
    <div class="container">
      <div v-if="page !== 'home'" class="row">
        <article class="col-md-2 text-left">
          <a href="/">
            <img alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="/images/Logo-colour.png">
          </a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav standard-nav-dark-text visible-lg visible-md">
            <li><a id="flowchart-linker" href="/">Services</a></li>
            <li><a id="caseStudies-linker" href="/">Case Studies</a></li>
            <li><a id="blog-linker" href="/blog">Blog</a></li>
            <li><a id="about-linker" href="/">About</a></li>
            <li><a id="contact-linker" href="/">Contact</a></li>
          </ul>
        </article>
      </div>
      <div v-if="page === 'home'" class="row">
        <article class="col-md-2 text-left">
          <a href="#intro-header" class="scroll">
            <img alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="/images/Logo-colour.png">
          </a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav standard-nav-dark-text visible-lg visible-md">
            <li><a id="flowchart-linker" href="#services" class="scroll" aria-label="Scroll to Services">Services</a></li>
            <li><a id="caseStudies-linker" href="#caseStudies" class="scroll" aria-label="Scroll to all Case Studies">Case Studies</a></li>
            <li><a id="blog-linker" href="/blog" aria-label="Go to blog">Blog</a></li>
            <li><a id="about-linker" href="#about" class="scroll" aria-label="Scroll to About">About</a></li>
            <li><a id="contact-linker" href="#contact" class="scroll" aria-label="Scroll to Contact Form">Contact</a></li>
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
    page: {
      type: String,
      required: true,
      default: () => ''
    }
  }
}
</script>

<style>

</style>
