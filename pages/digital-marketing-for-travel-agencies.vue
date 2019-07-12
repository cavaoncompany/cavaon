<template>
  <div class="digital-marketing">
    <Header page="landing" />
    <div v-if="messageSent === false" class="download">
      <h1>{{ landingpage.title }}</h1>
      <p>{{ landingpage.intro }}</p>
      <form
        id="downloadDigitalMarketingCopyForm"
        class="col-md-12"
        @submit.prevent="onSubmit"
      >
        <section class="form-input">
          <article>
            <input
              v-model="subscriberFirstname"
              type="text"
              :placeholder="landingpage.firstnamePlaceholder"
              name="subscriberFirstname"
              required
            >
          </article>
          <article>
            <input
              v-model="subscriberLastname"
              type="text"
              :placeholder="landingpage.lastnamePlaceholder"
              name="subscriberLastname"
              required
            >
          </article>
          <article>
            <input
              v-model="subscriberCompany"
              type="text"
              :placeholder="landingpage.companyPlaceholder"
              name="subscriberCompany"
            >
          </article>
          <article>
            <input
              v-model="subscriberEmail"
              type="text"
              :placeholder="landingpage.emailPlaceholder"
              name="subscriberEmail"
              required
            >
          </article>
          <article>
            <input
              v-model="subscriberTelephone"
              type="text"
              :placeholder="landingpage.telephonePlaceholder"
              name="subscriberTelephone"
            >
          </article>
        </section>
        <article>
          <div class="btn-wrap  text-center">
            <button id="submit" class="btn btn-odin btn-odin-color" name="submit" type="submit">
              {{ landingpage.buttonText }}
            </button>
          </div>
        </article>
      </form>
    </div>
    <div v-if="messageSent === true" class="download-pdf container">
      <h1>{{ landingpage.title }}</h1>
      <a href="/Marketing_for_travel_agencies.pdf" target="_blank">
        <img src="/images/digital-marketing-for-travel-agencies.png" alt="download your copy of digital marketing for travel agencies">
      </a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/HeaderStandard.vue'
import Footer from '../components/Footer.vue'
import landingpage from '../static/content/landingpage.json'

export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      landingpage: landingpage,
      subscriberFirstname: '',
      subscriberLastname: '',
      subscriberCompany: '',
      subscriberEmail: '',
      subscriberTelephone: '',
      messageSent: false
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    sendEmail() {
      const emailData = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname,
        telephone: this.subscriberTelephone,
        company: this.subscriberCompany
      }
      this.$store.dispatch('subsribeTo', emailData)
      this.subscriberFirstname = ''
      this.subscriberLastname = ''
      this.subscriberEmail = ''
      this.subscriberCompany = ''
      this.subscriberTelephone = ''
    },
    createSubscriber() {
      const subscriberInfo = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname,
        telephone: this.subscriberTelephone,
        company: this.subscriberCompany
      }
      this.$store.dispatch('createSubscriber', subscriberInfo)
    },
    createMailchimpSubscriber() {
      const subscriberInfo = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname,
        telephone: this.subscriberTelephone,
        company: this.subscriberCompany
      }
      this.$store.dispatch('createMailchimpSubscriber', subscriberInfo)
    },
    async onSubmit() {
      try {
        // eslint-disable-next-line
        const token = await this.$recaptcha.execute('login')
        this.createMailchimpSubscriber()
        this.createSubscriber()
        this.sendEmail()
        this.messageSent = true
      } catch (error) {
        // eslint-disable-next-line
        console.log('Submission error:', error)
      }
    }
  }
}
</script>

<style>
.digital-marketing .standard-header {
  display: block;
}
.digital-marketing {
  display: flex;
  flex-direction: column;
}
.download {
  margin: 100px auto;
}
.download h1, .download p, .download-pdf h1 {
  text-align: center;
  margin-top: 25px;
}
.download form {
  margin: 50px auto;
  color: #111;
}
.download form input {
  color: #111;
}
.download-pdf {
  margin: 100px auto;
}
.download-pdf img {
  width: 100%;
}
</style>
