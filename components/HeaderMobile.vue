<template>
  <!-- mobile only navigation : starts -->
  <nav class="mobile-nav hidden-md hidden-lg">
    <ul class="slimmenu">
      <li>
        <a class="scroll" href="#services" aria-label="Scroll to Services">SERVICES</a>
      </li>
      <li>
        <a class="scroll" href="#caseStudies" aria-label="Scroll to Case Studies">CASE STUDIES</a>
      </li>
      <li>
        <a href="/plans" aria-label="Explore plans">Plans</a>
      </li>
      <li>
        <a class="scroll" href="#about-mobile" aria-label="Scroll to About">ABOUT</a>
      </li>
      <li>
        <a class="scroll" href="#contact" aria-label="Scroll to Contact Form">CONTACT</a>
      </li>
    </ul>
  </nav>
  <!-- mobile only navigation : ends -->
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
