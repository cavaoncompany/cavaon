<template>
  <!-- mobile only navigation : starts -->
  <nav class="mobile-nav hidden-md hidden-lg">
    <ul v-if="page !== 'homepage'" class="slimmenu">
      <li>
        <a href="/" aria-label="Scroll to About">ABOUT</a>
      </li>
      <li>
        <a href="/" aria-label="Scroll to Services">SERVICES</a>
      </li>
      <li>
        <a href="/" aria-label="Scroll to Solutions">SOLUTIONS</a>
      </li>
      <li>
        <a href="/" aria-label="Scroll to Case Studies">CASE STUDIES</a>
      </li>
      <li>
        <a href="/blog" aria-label="Go to blog">BLOG</a>
      </li>
      <li>
        <a href="/" aria-label="Scroll to About">ABOUT</a>
      </li>
      <li>
        <a href="/" aria-label="Scroll to Contact Form">CONTACT</a>
      </li>
    </ul>

    <ul v-if="page === 'homepage'" class="slimmenu">
      <li>
        <a class="scroll" href="#about-mobile" aria-label="Scroll to About">ABOUT</a>
      </li>
      <li>
        <a class="scroll" href="#services" aria-label="Scroll to Services">SERVICES</a>
      </li>
      <li>
        <a class="scroll" href="#solutions" aria-label="Scroll to Solutions">SOLUTIONS</a>
      </li>
      <li>
        <a class="scroll" href="#caseStudies" aria-label="Scroll to Case Studies">CASE STUDIES</a>
      </li>
      <li>
        <a href="/blog" aria-label="Go to blog">BLOG</a>
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
