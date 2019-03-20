<template>
  <!-- masthead-section (this nav bar is visible only on home page) : starts -->
  <header id="intro-header" class="intro-header visible-lg scroll">
    <div class="container">
      <div class="row">
        <article class="col-md-2 text-left">
          <a href="#intro-header"><img data-no-retina alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive scroll" src="~/assets/images/logo-white.png" @click="closeForm()"></a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav  standard-nav-white-text visible-lg">
            <li><a href="#projects" class="scroll" @click="closeForm()">Projects</a></li>
            <li><a href="#services" class="scroll" @click="closeForm()">Services</a></li>
            <li><a href="#caseStudies" class="scroll" @click="closeForm()">Case Studies</a></li>
            <li><a href="#testimonials" class="scroll" @click="closeForm()">Testimonials</a></li>
            <li><a href="#team" class="scroll" @click="closeForm()">Team</a></li>
            <li><a href="#about" class="scroll" @click="closeForm()">About</a></li>
            <li><a href="#contactForm" class="scroll" @click="closeForm()">Contact</a></li>
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
  data() {
    return {
      projectForm: this.projectFormOpen
    }
  }, 
  props: {
    projectFormOpen: Boolean
  },
  methods: {
    closeForm: function() {
      this.projectForm = false
      EventBus.$emit('closeStartAProjectForm', this.projectForm)
    }
  }
}
</script>

<style>

</style>
