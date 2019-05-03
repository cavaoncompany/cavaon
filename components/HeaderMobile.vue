<template>
  <!-- mobile only navigation : starts -->
  <nav class="mobile-nav hidden-lg">
    <ul v-if="page === 'home'" class="slimmenu">
      <li>
        <a class="scroll" href="#flowchart-mobile" aria-label="Scroll to Services">SERVICES</a>
      </li>
      <!-- <li>
        <a class="scroll" href="#services" aria-label="Scroll to Services" @click="closeForm()">services</a>
      </li> -->
      <li>
        <a class="scroll" href="#caseStudies" aria-label="Scroll to Case Studies">CASE STUDIES</a>
      </li>
      <li>
        <a href="/plans" aria-label="Explore plans">Plans</a>
      </li>
      <!-- <li>
        <a class="scroll" href="#testimonials" aria-label="Scroll to Testimonials" @click="closeForm()">Testimonials</a>
      </li> -->
      <!-- <li>
        <a class="scroll" href="#team-container" aria-label="Scroll to Team" @click="closeForm()">team</a>
      </li> -->
      <li>
        <a class="scroll" href="#about-mobile" aria-label="Scroll to About">ABOUT</a>
      </li>
      <li>
        <a class="scroll" href="#contact" aria-label="Scroll to Contact Form">CONTACT</a>
      </li>
    </ul>
    <ul v-if="page !== 'home'" class="slimmenu">
      <li>
        <a class="scroll" href="/" aria-label="Scroll to Services">SERVICES</a>
      </li>
      <!-- <li>
        <a class="scroll" href="#services" aria-label="Scroll to Services" @click="closeForm()">services</a>
      </li> -->
      <li>
        <a class="scroll" href="/" aria-label="Scroll to Case Studies">CASE STUDIES</a>
      </li>
      <li>
        <a href="/plans" aria-label="Explore plans">Plans</a>
      </li>
      <!-- <li>
        <a class="scroll" href="#testimonials" aria-label="Scroll to Testimonials" @click="closeForm()">Testimonials</a>
      </li> -->
      <!-- <li>
        <a class="scroll" href="#team-container" aria-label="Scroll to Team" @click="closeForm()">team</a>
      </li> -->
      <li>
        <a class="scroll" href="/" aria-label="Scroll to About">ABOUT</a>
      </li>
      <li>
        <a class="scroll" href="/" aria-label="Scroll to Contact Form">CONTACT</a>
      </li>
    </ul>
  </nav>
  <!-- mobile only navigation : ends -->
</template>

<script>
export default {
  props: {
    page: String
  }
}
</script>

<style>
</style>
