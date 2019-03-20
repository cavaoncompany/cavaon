<template>
  <!-- masthead-section (this nav bar is initially hidden but will be visible only on inner pages) : starts -->
  <header id="standard-header" class="standard-header">
    <div class="container">
      <div class="row">
        <article class="col-md-2 text-left">
          <a href="#intro-header"><img alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="~/assets/images/Logo-colour.png" @click="closeForm()"></a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav standard-nav-dark-text visible-lg">
            <li><a id="projects-linker" href="#projects" class="scroll" @click="closeForm()">Projects</a></li>
            <li><a id="services-linker" href="#services" class="scroll" @click="closeForm()">Services</a></li>
            <li><a id="caseStudies-linker" href="#caseStudies" class="scroll" @click="closeForm()">Case Studies</a></li>
            <li><a id="testimonials-linker" href="#testimonials" class="scroll" @click="closeForm()">Testimonials</a></li>
            <li><a id="team-linker" href="#team" @click="closeForm()">Team</a></li>
            <li><a id="about-linker" href="#about" class="scroll" @click="closeForm()">About</a></li>
            <li><a id="contactForm-linker" href="#contactForm" class="scroll" @click="closeForm()">Contact</a></li>
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
