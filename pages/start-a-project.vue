<template>
  <div class="container">
    <header class="row">
      <article class="col-md-2 text-left">
        <a href="/"><img alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="/images/Logo-colour.png"></a>
      </article>
    </header>
    <StartAProjectForm />
    <Footer />
  </div>
</template>

<script>
import StartAProjectForm from '../components/StartAProjectForm'
import Footer from '../components/Footer'
export default {
  name: 'StartAProject',
  components: {
    Footer,
    StartAProjectForm
  }
}
</script>
