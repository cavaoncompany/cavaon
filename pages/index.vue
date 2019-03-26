<template>
  <div>
    <Homepage />
  </div>
</template>

<script>
import Homepage from '../components/Homepage.vue'

export default {
  components: {
    Homepage
  },
  created() {
    if (process.client) {
      // eslint-disable-next-line
      if (window.netlifyIdentity) {
        // eslint-disable-next-line
        window.netlifyIdentity.on('init', user => {
          if (!user) {
            // eslint-disable-next-line
            window.netlifyIdentity.on('login', () => {
              // eslint-disable-next-line
              document.location.href = '/admin/'
            })
          }
        })
      }
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
</style>
