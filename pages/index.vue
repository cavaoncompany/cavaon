<template>
  <div>
    <Homepage />
  </div>
</template>

<script>
import metadata from '../static/content/metadata.json'
import Homepage from '../components/Homepage.vue'

export default {
  components: {
    Homepage
  },
  data() {
    return {
      metadata: metadata
    }
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
  },
  head () {   
    return {
      title: `${this.metadata.homepageTitle}`,
      meta: [
        {
        hid: `description`,
        name: 'description',
        content: `${this.metadata.homepageDescription}`
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
</style>
