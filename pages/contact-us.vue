<template>
  <div class="contact-us">
    <header-standard />
    <header-mobile />
    <div class="contact-us-banner">
      <img src="/images/banner.png" alt="Bondi">
      <h1>{{ contact.title }}</h1>
      <div class="liner color-bg" />
    </div>
    <main class="contact-us-main container">
      <div class="row">
        <form class="contact-us-form col-md-6">
          <h2>{{ contact.subtitle }}</h2>
          <div class="liner color-bg" />
          <section class="form-input">
            <div class="footer-subscribe-name">
              <article>
                <label for="name">{{ contact.namePlaceholder }}</label>
                <input
                  v-model="name"
                  type="text"
                  :placeholder="contact.namePlaceholder"
                  name="name"
                >
              </article>
              <article>
                <label for="email">{{ contact.emailPlaceholder }}</label>
                <input
                  v-model="email"
                  type="text"
                  :placeholder="contact.emailPlaceholder"
                  name="email"
                >
              </article>
            </div>
            <article>
              <label for="phone">{{ contact.phonePlaceholder }}</label>
              <input
                v-model="phone"
                type="text"
                :placeholder="contact.phonePlaceholder"
                name="phone"
              >
            </article>
            <article>
              <label for="contact-message">{{ contact.messagePlaceholder }}</label>
              <textarea
                id="contact-message"
                v-model="message"
                name="message"
                tabindex="5"
                cols="40"
                rows="10"
                class="contact-us-message"
                :placeholder="contact.messagePlaceholder"
                required
              />
            </article>
          </section>
          <article>
            <div class="btn-wrap-small">
              <button id="contact-us-submit" class="btn-odin-color" name="submit" type="submit">
                {{ contact.buttonText }}
              </button>
            </div>
          </article>
          <article v-if="messageSent === true" class="successfully-subscribed">
            <p>{{ footer.messageSent }}</p>
          </article>
        </form>
        <div class="contact-us-info col-md-5 offset-md-1">
          <h2>{{ contact.title }}</h2>
          <div class="liner color-bg" />
          <h3>{{ contact.phone }}</h3>
          <p>{{ contact.telephone }}</p>
          <h3>{{ contact.email }}</h3>
          <p>{{ contact.emailAddress }}</p>
          <h3>{{ contact.address }}</h3>
          <p>{{ contact.addressLine1 }} {{ contact.addressLine2 }}</p>
          <div id="map-wrap" style="height: 178px">
            <no-ssr>
              <l-map :zoom=13 :center="[-33.884472, 151.207955]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
                <l-marker :lat-lng="[-33.884472, 151.207955]" />
              </l-map>
            </no-ssr>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import HeaderStandard from '../components/HeaderStandard.vue'
import HeaderMobile from '../components/HeaderMobile.vue'
import Footer from '../components/Footer.vue'
import contact from '../static/content/contact.json'

export default {
  components: {
    HeaderStandard,
    HeaderMobile,
    Footer
  },
  data() {
    return {
      contact: contact,
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }
}
</script>

<style>
.contact-us .contact-us-banner {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.contact-us .contact-us-banner .liner {
    text-align: center;
    margin: 0 auto;
}
.contact-us .contact-us-banner img {
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 0;
    left: 0;
    height: 100%;
}
.contact-us .contact-us-banner h1 {
    color: #fff;
    font-size: 30px;
    text-align: center;
    margin-top: -20px;
}
.contact-us .liner {
    width: 52px;
}
.contact-us .contact-us-main {
    margin-bottom: 70px;
}
.contact-us .contact-us-info {
    box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
    border-radius: 5px;
    padding: 60px 25px;
    height: 100%;
    margin-top: 25px;
}
.contact-us .contact-us-form {
    box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
    border-radius: 5px;
    margin-top: 25px;
}
.contact-us h2 {
    font-size: 15px;
    font-weight: 500;
    text-align: left;
}
.contact-us h3 {
    color: #FFC615;
    font-size: 12px;
    font-weight: 500;
    margin: 20px 0;
    text-align: left;
}
.contact-us p {
    text-align: left;
}
.contact-us input {
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 49px;
}
.contact-us textarea {
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 8px;
}
.contact-us .contact-us-form ::placeholder {
    padding-left: 10px;
    font-size: 13px;
}
.contact-us #contact-us-submit {
    width: 199.5px;
    height: 45px;
    background: #FFC615;
    border-radius: 49px;
    margin-right: auto;
}
.contact-us .contact-us-form article {
    margin: 20px 0;
}
</style>
