<template>
  <!-- masthead-section (this nav bar is visible only on home page) : starts -->
  <header id="intro-header" class="intro-header visible-lg scroll">
    <div class="container">
      <div class="row">
        <article class="col-md-2 text-left">
          <a href="#intro-header">
            <img
              data-no-retina
              alt="Cavaon Logo"
              title="Cavaon Logo"
              class="main-logo img-responsive scroll"
              src="/images/logo-white.png"
              @click="closeForm()"
            >
          </a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav  standard-nav-white-text visible-lg">
            <li><a href="#flowchart" class="scroll" aria-label="Scroll to Projects" @click="closeForm()">Projects</a></li>
            <!-- <li><a href="#services" class="scroll" aria-label="Scroll to Services" @click="closeForm()">Services</a></li> -->
            <li><a href="#caseStudies" class="scroll" aria-label="Scroll to Case Studies" @click="closeForm()">Case Studies</a></li>
            <!-- <li><a href="#testimonials" class="scroll" aria-label="Scroll to Testimonials" @click="closeForm()">Testimonials</a></li> -->
            <!-- <li><a href="#team-container" class="scroll" aria-label="Scroll to Team" @click="closeForm()">Team</a></li> -->
            <li><a href="#about" class="scroll" aria-label="Scroll to About" @click="closeForm()">About</a></li>
            <li><a href="#contactForm" class="scroll" aria-label="Scroll to Contact Form" @click="closeForm()">Contact</a></li>
          </ul>
        </article>
      </div>
    </div>
  </header>
  <!-- masthead-section:ends -->
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
