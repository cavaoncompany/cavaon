<template>
  <!-- mobile only navigation : starts -->
  <nav class="mobile-nav hidden-lg">
    <ul class="slimmenu">
      <li>
        <a class="scroll" href="#flowchart-mobile" aria-label="Scroll to Services">SERVICES</a>
      </li>
      <li>
        <a class="scroll" href="#caseStudies" aria-label="Scroll to Case Studies">CASE STUDIES</a>
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
import EventBus from '../event-bus.js'

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
