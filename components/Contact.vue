<template>
  <section id="contact" class="contact-form black-bg page page-section" @mouseover="changeUrl('contact')">
    <div class="container">
      <div class="row">
        <div class="main-caps text-center col-md-12 col-lg-8 col-lg-offset-2">
          <h3 class="white">
            <span>{{ contact.title }}</span>
          </h3>
          <div class="liner color-bg" />
        </div>
        <div class="contact-info text-center col-md-12 col-lg-8 col-lg-offset-2">
          <a href="tel:+61283797424" class="white contact-info-text">{{ contact.telephone }}</a>
          <p class="white">
            {{ contact.addressLine1 }}<br>{{ contact.addressLine2 }}
          </p>
        </div>
        <article class="col-md-12 col-lg-8 col-lg-offset-2 main-caps text-center">
          <div class="contact-item pad-common ">
            <div id="fname" class="alert alert-error error ">
              <p>Name must not be empty</p>
            </div>
            <div id="fmail" class="alert alert-error  error">
              <p>Please provide a valid email</p>
            </div>
            <div id="fmsg" class="alert alert-error  error">
              <p>Message should not be empty</p>
            </div>
            <form
              id="contact-form"
              name="contact"
              @submit.prevent="onSubmit"
            >
              <input type="hidden" name="form-name" value="contact">
              <p class="hidden">
                <label>Don’t fill this out if you're human: <input name="bot-field"></label>
              </p>
              <article>
                <label class="hidden" for="firstname">First Name</label>
                <input
                  id="name"
                  v-model="firstname"
                  type="text"
                  :placeholder="contact.firstnamePlaceholder"
                  name="firstname"
                  size="100"
                >
              </article>
              <article>
                <label class="hidden" for="lastname">Last Name</label>
                <input
                  id="name"
                  v-model="lastname"
                  type="text"
                  :placeholder="contact.lastnamePlaceholder"
                  name="lastname"
                  size="100"
                >
              </article>
              <article>
                <label class="hidden" for="email">Email</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  :placeholder="contact.emailPlaceholder"
                  name="email"
                  size="30"
                  required
                >
              </article>
              <article>
                <label for="msg" class="hidden">Message</label>
                <textarea
                  id="msg"
                  v-model="message"
                  :placeholder="contact.messagePlaceholder"
                  name="message"
                  cols="40"
                  rows="3"
                />
                <div class="btn-wrap  text-center">
                  <button id="submit" class="btn btn-odin btn-odin-color" name="submit" type="submit">
                    {{ contact.buttonText }}
                  </button>
                </div>
              </article>
            </form>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import contact from '../static/content/contact.json'

export default {
  name: 'Contact',
  data() {
    return {
      contact: contact,
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendEmail: () => {
      const emailData = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        message: this.message
      }
      this.$store.dispatch('contactUs', emailData)
      this.firstname = ''
      this.lastname = ''
      this.email = ''
      this.message = ''
    },
    createTicket: () => {
      const ticketInfo = {
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        message: this.message
      }
      this.$store.dispatch('contactTicket', ticketInfo)
    },
    async onSubmit() {
      try {
        // eslint-disable-next-line
        const token = await this.$recaptcha.execute('login')
        this.createTicket()
        this.sendEmail()
      } catch (error) {
        // eslint-disable-next-line
        console.log('Submission error:', error)
      }
    },
    changeUrl: function (link) {
      history.pushState({}, null, '/' + link)
    }
  }
}
</script>

<style>
.contact {
    position: relative;
  }
.contact-form ::placeholder {
    color: #FFF;
  }
  .contact-info-text {
    line-height: 30px;
  }
  .contact-info {
    margin-bottom: 60px;
    margin-top: 15px;
  }
  .contact-info a:hover {
    color: #ffc716;
  }
</style>
