<template>
  <footer id="mastfoot" class="mastfoot">
    <div class="footer-background">
      <img :src="footer.banner" alt="background image">
    </div>
    <div class="container">
      <div class="row footer-logo">
        <img src="/images/Logo-colour.png" alt="Cavaon Logo">
      </div>
      <nav class="row footer-links">
        <a href="#">AFFILIATE</a>
        <a href="#">CAREER</a>
        <a href="#">CONTACT US</a>
        <a v-for="(link, i) in footer.socialIcons" :key="i" :href="link.link" target="_blank">
          <img :src="link.image" :alt="link.description">
        </a>
      </nav>
      <div class="row footer-content">
        <div class="col-md-4 footer-hero">
          <img :src="footer.hero" alt="Cavaon Mascot">
        </div>
        <div class="col-md-4 footer-about">
          <h3>{{ footer.aboutTitle }}</h3>
          <p>{{ footer.aboutText }}</p>
          <ul class="footer-contact">
            <li v-for="(item, i) in footer.contact" :key="i">
              <span class="footer-contact-initial">
                {{ item.initial }}
              </span>
              {{ item.content }}
            </li>
          </ul>
        </div>
        <div class="col-md-4 footer-subscribe">
          <h3>{{ footer.subscribeTitle }}</h3>
          <p>{{ footer.subscribeText }}</p>
          <form id="footer-subscribe" class="footer-subscribe-form" @submit.prevent="onSubmit">
            <section class="form-input">
              <div class="footer-subscribe-name">
                <article>
                  <input
                    v-model="subscriberFirstname"
                    type="text"
                    :placeholder="footer.firstnamePlaceholder"
                    name="subscriberFirstname"
                  >
                </article>
                <article>
                  <input
                    v-model="subscriberLastname"
                    type="text"
                    :placeholder="footer.lastnamePlaceholder"
                    name="subscriberLastname"
                  >
                </article>
                </div>
                <article>
                  <input
                    v-model="subscriberEmail"
                    type="text"
                    :placeholder="footer.emailPlaceholder"
                    name="subscriberEmail"
                  >
                </article>
              </section>
              <article>
                <div class="btn-wrap-small  text-center">
                  <button id="footer-submit" class="btn-odin-color" name="submit" type="submit">
                    {{ footer.buttonText }}
                  </button>
                </div>
              </article>
              <article v-if="messageSent === true" class="successfully-subscribed">
                <p>{{ footer.messageSent }}</p>
              </article>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import footer from '../static/content/footer.json'

export default {
  data() {
    return {
      footer: footer,
      subscriberFirstname: '',
      lastnamePlaceholder: '',
      emailPlaceholder: ''
    }
  }
}
</script>

<style>
#mastfoot {
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
}
.footer-background {
  min-width: 100%;
  height: 100%;
  position: absolute;
  z-index: -10;
  bottom: 0;
  background: linear-gradient(179.96deg, rgba(70, 45, 133, 0.95) 17.82%, rgba(101, 45, 144, 0.95) 107.71%);
}
.footer-background img {
  width: 100%;
}
#mastfoot p, #mastfoot li {
  color: #fff;
  font-size: 13px;
}
#mastfoot ul {
  padding-left: 0;
}
#mastfoot li {
  list-style-type: none;
}
#mastfoot .footer-logo img {
  width: 25%;
  height: auto;
}
#mastfoot .footer-links {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}
#mastfoot .footer-links a {
  color: #fff;
  margin: 0 15px;
  margin-top: auto;
  margin-bottom: auto;
}
#mastfoot .footer-links a img {
  height: 25px;
}
#mastfoot .footer-content {
  margin-top: 45px;
  color: #fff;
}
#mastfoot .footer-hero {
  text-align: center;
}
#mastfoot .footer-hero img {
  margin-bottom: 50px;
  max-height: 250px;
}
#mastfoot h3, .footer-contact-initial {
  font-size: 14px;
  color: #FFC716;
  font-weight: 500;
  margin-right: 5px;
}
#footer-subscribe {
  text-align: left;
}
#mastfoot #footer-subscribe .form-input input {
  background-color: #fff;
  border-radius: 49px;
  padding-left: 10px;
  height: 2.2rem;
}
#footer-subscribe .footer-subscribe-name {
  display: flex;
  justify-content: space-between;
}
#footer-subscribe .footer-subscribe-name input {
  width: 97%;
}
#footer-subscribe #footer-submit {
  height: 2.2rem;
  border-radius: 49px;
  font-size: 13px;
  padding: 0 20px;
  float: left;
}
#footer-subscribe .form-input article ::placeholder {
  font-size: 13px;
}
</style>
