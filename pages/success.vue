<template>
  <div class="container message-sent text-center">
    <header class="row">
      <article class="col-md-2 text-left">
        <a href="/"><img alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="/images/Logo-colour.png" @click="closeForm()"></a>
      </article>
    </header>
    <h3 class="dark">
      <span>{{ success.title }}</span>
    </h3>
    <div class="liner color-bg" />
    <p>{{ success.message }}</p>
    <button id="returnHome" class="btn btn-odin btn-odin-color" name="submit" type="submit">
      <a href="/">{{ success.buttonText }}</a>
    </button>
    <Footer />
  </div>
</template>

<script>
import success from '../static/content/success.json'
import metadata from '../static/content/metadata.json'
import Footer from '../components/Footer'

export default {
  components: {
    Footer
  },
  data() {
    return {
      success: success,
      metadata: metadata
    }
  },
  head () {   
    return {
      title: `${this.metadata.thankYouTitle}`,
      meta: [
        {
        hid: `description`,
        name: 'description',
        content: `${this.metadata.thankYouDescription}`
      }
      ]
    }
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
