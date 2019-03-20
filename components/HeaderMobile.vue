<template>
  <!-- mobile only navigation : starts -->
  <nav class="mobile-nav hidden-lg">
    <ul class="slimmenu">
      <li>
        <a class="scroll" href="#projects" @click="closeForm()">projects</a>
      </li>
      <li>
        <a class="scroll" href="#services" @click="closeForm()">services</a>
      </li>
      <li>
        <a class="scroll" href="#caseStudies" @click="closeForm()">case studies</a>
      </li>
      <li>
        <a class="scroll" href="#testimonials" @click="closeForm()">Testimonials</a>
      </li>
      <li>
        <a class="scroll" href="#team" @click="closeForm()">team</a>
      </li>
      <li>
        <a class="scroll" href="#about" @click="closeForm()">about</a>
      </li>
      <li>
        <a class="scroll" href="#contactForm" @click="closeForm()">contact</a>
      </li>
    </ul>
  </nav>
  <!-- mobile only navigation : ends -->
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
