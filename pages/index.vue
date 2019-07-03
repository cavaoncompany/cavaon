<template>
  <div>
    <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5DGDRS"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <Homepage :show-install-message="showInstallMessage" />
  </div>
</template>

<script>
import metadata from '../static/content/metadata.json'
import Homepage from '../components/Homepage.vue'

export default {
  name: 'Home',
  components: {
    Homepage
  },
  data() {
    return {
      metadata: metadata,
      showInstallMessage: false
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

      // Detects if device is on iOS
      const isIos = () => {
      // eslint-disable-next-line
      const userAgent = window.navigator.userAgent.toLowerCase()
        return /iphone|ipad|ipod/.test(userAgent)
      }
      // Detects if device is in standalone mode
      // eslint-disable-next-line
      const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone)

      // Checks if should display install popup notification:
      if (isIos() && !isInStandaloneMode()) {
        this.showInstallMessage = true
      }
    }
  },
  head() {
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
