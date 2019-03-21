<template>
  <div class="container message-sent text-center">
    <header class="row">
      <article class="col-md-2 text-left">
          <a href="/"><img alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="~/assets/images/Logo-colour.png" @click="closeForm()"></a>
      </article>
    </header>
    <h3 class="dark">
      <span>THANK YOU!</span>
    </h3>
    <div class="liner color-bg" />
    <p>Your message has been sent and we will be in touch with you shortly.</p>
    <button id="returnHome" class="btn btn-odin btn-odin-color" name="submit" type="submit">
      <a href="/">Return to Homepage</a>
    </button>
    <Footer />
  </div>
</template>

<script>
import HeaderTop from '../components/HeaderTop'
import Footer from '../components/Footer'

export default {
  components: {
    HeaderTop,
    Footer
  }
}
</script>

<style>
/* * {
    background: #000 !important;
    color: #0f0 !important;
    outline: solid #f00 1px !important;
  } */
  .message-sent h3 {
    margin-top: 150px;
    font-weight: 500;
    font-size: 24px;
  }
  .message-sent #mastfoot .container {
    padding-right: 30px;
  }
  #returnHome a {
    font-size: 14px;
    color: #FFF;
  }
  .message-sent p {
    margin-top: 50px;
    margin-bottom: 80px;
  }
</style>
