<template>
  <div class="digital-marketing">
    <Header page="landing" />
    <div v-if="messageSent === false" class="referral">
      <h1>{{ landingpage.referralTitle }}</h1>
      <p>{{ landingpage.referralIntro }}</p>
      <form
        id="submitReferralForm"
        class="col-md-12"
        @submit.prevent="onSubmit"
      >
        <section class="form-input">
          <h3>Referrer's Details</h3>
          <article>
            <input
              v-model="referrerFirstname"
              type="text"
              :placeholder="landingpage.referralFirstnamePlaceholder"
              name="referrerFirstname"
              required
            >
          </article>
          <article>
            <input
              v-model="referrerLastname"
              type="text"
              :placeholder="landingpage.referralLastnamePlaceholder"
              name="referrerLastname"
              required
            >
          </article>
          <article>
            <input
              v-model="referrerCompany"
              type="text"
              :placeholder="landingpage.referralCompanyPlaceholder"
              name="referrerCompany"
            >
          </article>
          <article>
            <input
              v-model="referrerEmail"
              type="text"
              :placeholder="landingpage.referralEmailPlaceholder"
              name="referrerEmail"
              required
            >
          </article>
          <article>
            <input
              v-model="referrerTelephone"
              type="text"
              :placeholder="landingpage.referralTelephonePlaceholder"
              name="referrerTelephone"
            >
          </article>
          <h3>Referral Details</h3>
          <article>
            <input
              v-model="referredFirstname"
              type="text"
              :placeholder="landingpage.referredFirstnamePlaceholder"
              name="referredFirstname"
              required
            >
          </article>
          <article>
            <input
              v-model="referredLastname"
              type="text"
              :placeholder="landingpage.referredLastnamePlaceholder"
              name="referredLastname"
              required
            >
          </article>
          <article>
            <input
              v-model="referredCompany"
              type="text"
              :placeholder="landingpage.referredCompanyPlaceholder"
              name="referredCompany"
            >
          </article>
          <article>
            <input
              v-model="referredEmail"
              type="text"
              :placeholder="landingpage.referredEmailPlaceholder"
              name="referredEmail"
              required
            >
          </article>
          <article>
            <input
              v-model="referredTelephone"
              type="text"
              :placeholder="landingpage.referredTelephonePlaceholder"
              name="referredTelephone"
            >
          </article>
        </section>
        <article>
          <div class="btn-wrap  text-center">
            <button id="referral-submit" class="btn btn-odin btn-odin-color" name="submit" type="submit">
              {{ landingpage.referralButtonText }}
            </button>
          </div>
        </article>
      </form>
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
      referrerFirstname: '',
      referrerLastname: '',
      referrerCompany: '',
      referrerEmail: '',
      referrerTelephone: '',
      referredFirstname: '',
      referredLastname: '',
      referredCompany: '',
      referredEmail: '',
      referredTelephone: '',
      messageSent: false
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    sendEmail() {
      const emailData = {
        referrerEmail: this.referrerEmail,
        referrerFirstname: this.referrerFirstname,
        referrerLastname: this.referrerLastname,
        referrerCompany: this.referrerCompany,
        referrerTelephone: this.referrerTelephone,
        email: this.referredEmail,
        firstname: this.referredFirstname,
        lastname: this.referredLastname,
        telephone: this.referredTelephone,
        company: this.referredCompany
      }
      this.$store.dispatch('referralSubmission', emailData)
      this.referrerFirstname = ''
      this.referrerLastname = ''
      this.referrerEmail = ''
      this.referrerCompany = ''
      this.referrerTelephone = ''
      this.referredFirstname = ''
      this.referredLastname = ''
      this.referredEmail = ''
      this.referredTelephone = ''
      this.referredCompany = ''
    },
    createReferrer() {
      const referrerInfo = {
        referrerEmail: this.referrerEmail,
        referrerFirstname: this.referrerFirstname,
        referrerLastname: this.referrerLastname,
        referrerCompany: this.referrerCompany,
        referrerTelephone: this.referrerTelephone,
        email: this.referredEmail,
        firstname: this.referredFirstname,
        lastname: this.referredLastname,
        telephone: this.referredTelephone,
        company: this.referredCompany
      }
      this.$store.dispatch('createReferral', referrerInfo)
    },
    async onSubmit() {
      try {
        // eslint-disable-next-line
        const token = await this.$recaptcha.execute('login')
        this.createReferrer()
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
.referral {
  margin: 100px auto;
}
.referral h1, .referral p {
  text-align: center;
  margin-top: 25px;
}
.referral h3 {
  text-align: left;
  margin-top: 30px;
}
.referral form {
  margin: 50px auto;
  color: #111;
}
.referral form input {
  color: #111;
}
</style>
