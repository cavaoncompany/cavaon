<template>
  <!-- mobile only navigation : starts -->
  <nav class="mobile-nav hidden-lg">
    <ul class="slimmenu">
      <li>
        <a class="scroll" href="#flowchart-mobile" aria-label="Scroll to Projects" @click="closeForm()">projects</a>
      </li>
      <!-- <li>
        <a class="scroll" href="#services" aria-label="Scroll to Services" @click="closeForm()">services</a>
      </li> -->
      <li>
        <a class="scroll" href="#caseStudies" aria-label="Scroll to Case Studies" @click="closeForm()">case studies</a>
      </li>
      <!-- <li>
        <a class="scroll" href="#testimonials" aria-label="Scroll to Testimonials" @click="closeForm()">Testimonials</a>
      </li> -->
      <!-- <li>
        <a class="scroll" href="#team-container" aria-label="Scroll to Team" @click="closeForm()">team</a>
      </li> -->
      <li>
        <a class="scroll" href="#about-mobile" aria-label="Scroll to About" @click="closeForm()">about</a>
      </li>
      <li>
        <a class="scroll" href="#contactForm" aria-label="Scroll to Contact Form" @click="closeForm()">contact</a>
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
  },
  methods: {
    closeForm: function () {
      this.projectForm = false
      EventBus.$emit('closeStartAProjectForm', this.projectForm)
    }
  }
}
</script>

<style>

</style>
