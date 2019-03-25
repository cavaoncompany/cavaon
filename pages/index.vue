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
    if(process.client) {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
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
