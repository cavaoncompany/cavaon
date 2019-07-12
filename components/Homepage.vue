<template>
  <div>
    <HeaderMobile page="home" />
    <div id="iosMessage" />
    <!-- Master Wrap : starts -->
    <section id="mastwrap">
      <section id="intro" class="intro">
        <HeaderTop />
        <!-- <div class="valignBanner"> -->
        <div class="container hero-container">
          <div class="hero-caps text-rotator row">
            <div class="col-md-8 banner-text">
              <h1 class="white desktop-banner">
                <span>{{ banner.titleTop }}</span>
                <br>{{ banner.titleBottom }}
              </h1>
              <h1 class="white mobile-banner">
                <span>{{ banner.titleTop }}</span>
                {{ banner.titleBottom }}
              </h1>
              <h6 class="minimal white">
                <span>{{ banner.subHeader }}</span>
              </h6>
              <div class="play-video">
                <div class="play" />
              </div>
            </div>
            <div class="banner-image-container col-md-4">
              <img :src="banner.heroImage" alt="Welcome to Cavaon">
            </div>
          </div>
        </div>
        <!-- </div> -->
        <!-- valignBanner:ends -->
        <a class="scroll" href="#flowchart" aria-label="Scroll to Projects">
          <div class="mouse-icon white hidden-xs" style="opacity: 1;">
            <div class="wheel" />
          </div>
        </a>
      </section>
      <HeaderStandard page="home" />
      <About />
      <Flowchart />
      <Services />
      <Testimonials />
      <!-- page-section : starts -->
      <section id="blog" class="page-section purple-bg">
        <section class="inner-section text-center purple-bg row blog-inner-section">
          <div class="container">
            <div class="row">
              <article class="col-md-12 col-lg-8 col-lg-offset-2 text-center animated" data-fx="fadeInUp">
                <h3>
                  <span>{{ blog.homepageTitle }}</span>
                </h3>
              </article>
              <article-list :articles="posts" page="homepage" />
              <div v-if="blogCount > 4" class="welcome-button blog-welcome-button">
                <a class="btn btn-odin btn-odin-color" href="/blog">{{ blog.homepageButtonText }}</a>
              </div>
            </div>
          </div>
        </section>
      </section>
      <!-- page-section : ends -->
      <GoogleReviews />
      <Footer />
    </section>
    <!-- Master Wrap : ends -->
    <div
      v-if="showHomepageModal === true"
      id="newsletter-homepage-modal"
      class="modal showModal"
      tabindex="-1"
      role="dialog"
      @click="closeIfOutsideModal($event)"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div id="newsletter-homepage-modal-body" class="modal-body">
            <button type="button" class="btn btn-light btn-close" data-target="#newsletter-homepage-modal" @click="closeModal()">
              <img src="/images/icon-close-128.png" alt="close modal">
            </button>
            <h3>{{ blog.subscribeToOurNewsletter }}</h3>
            <form
              id="subscribeToNewsletterHomepageForm"
              class="col-md-12"
              @submit.prevent="onSubmit"
            >
              <section class="form-input">
                <article>
                  <input
                    v-model="subscriberFirstname"
                    type="text"
                    :placeholder="blog.firstnamePlaceholder"
                    name="subscriberFirstname"
                  >
                </article>
                <article>
                  <input
                    v-model="subscriberLastname"
                    type="text"
                    :placeholder="blog.lastnamePlaceholder"
                    name="subscriberLastname"
                  >
                </article>
                <article>
                  <input
                    v-model="subscriberEmail"
                    type="text"
                    :placeholder="blog.emailPlaceholder"
                    name="subscriberEmail"
                  >
                </article>
              </section>
              <article>
                <div class="btn-wrap  text-center">
                  <button id="submit" class="btn btn-odin btn-odin-color" name="submit" type="submit">
                    {{ blog.buttonText }}
                  </button>
                </div>
              </article>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showHomepageModal === true" class="modal-overlay" @click="closeModal()" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import banner from '../static/content/banner.json'
import caseStudies from '../static/content/casestudies.json'
import team from '../static/content/team.json'
import services from '../static/content/services.json'
import projects from '../static/content/projects.json'
import promo from '../static/content/promo.json'
import blog from '../static/content/blog.json'
import messages from '../static/content/messages.json'
import HeaderMobile from './HeaderMobile.vue'
import HeaderTop from './HeaderTop.vue'
import HeaderStandard from './HeaderStandard.vue'
import About from './About.vue'
import Flowchart from './Flowchart.vue'
import Services from './Services.vue'
import Testimonials from './Testimonials.vue'
import ArticleList from './blog/Article-list.vue'
import GoogleReviews from './GoogleReviews.vue'
import Footer from './Footer.vue'

export default {
  components: {
    HeaderMobile,
    HeaderTop,
    HeaderStandard,
    About,
    Flowchart,
    Services,
    Testimonials,
    ArticleList,
    GoogleReviews,
    Footer
  },
  props: {
    showInstallMessage: Boolean
  },
  data() {
    const context = require('../assets/context-loader')
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    }))
    return {
      caseStudies: caseStudies,
      projectDetails: caseStudies.caseStudies[0],
      team: team,
      services: services,
      projects: projects,
      messages: messages,
      promo: promo,
      blog: blog,
      banner: banner,
      linesOfCode: 12538,
      windowWidth: 0,
      isMobile: false,
      startVal: 3564,
      projectFormOpen: false,
      posts: posts,
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      blogCount: 0,
      showHomepageModal: false
    }
  },
  computed: mapState(['ticketCreatedStatus']),
  watch: {
    ticketCreatedStatus(newValue, oldValue) {
      if (newValue === 'success') {
        this.$router.replace({ path: 'success' })
      }
    }
  },
  created() {
    const date = new Date()
    const randomnumber = this.convertToMinutes(date)
    this.linesOfCode = Number(randomnumber - 25868512)
    this.blogCount = this.posts.length
    if (this.$route.query.fb === 'true') {
      this.showHomepageModal = true
    }
    if (process.client) {
      // eslint-disable-next-line
      window.onpopstate = function(event) {
        // eslint-disable-next-line
        if (document.location.toString().indexOf('case-studies')) {
          // eslint-disable-next-line
          window.location = '/'
        }
      }
    }
  },
  async mounted() {
    await this.$recaptcha.init()
  },
  methods: {
    openModal() {
      document.getElementById('newsletter-homepage-modal').classList.add('showModal')
    },
    closeModal() {
      document.getElementById('newsletter-homepage-modal').classList.remove('showModal')
      document.getElementsByClassName('modal-overlay')[0].classList.add('hidden')
    },
    updateProjectDetails: function (project) {
      if (project === 'travelDream') {
        this.projectDetails = this.caseStudies.caseStudies[0]
      } else if (project === 'letsTravel') {
        this.projectDetails = this.caseStudies.caseStudies[1]
      }
    },
    convertToMinutes: function (duration) {
      return Math.floor(duration / (1000 * 60))
    },
    counterMouseOver: function () {
      this.$refs.codecounter.start()
    },
    teamMouseOver: function (name, image) {
      document.getElementById(name).src = image
    },
    closeIfOutsideModal(e) {
      const modal = document.getElementById('newsletter-homepage-modal-body').getBoundingClientRect()
      if (e.pageX < modal.left || e.pageX > modal.right || e.pageY < modal.top || e.pageY > modal.bottom) {
        this.closeModal()
      }
    },
    sendEmail() {
      const emailData = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname
      }
      this.$store.dispatch('subsribeTo', emailData)
      this.subscriberFirstname = ''
      this.subscriberLastname = ''
      this.subscriberEmail = ''
    },
    createSubscriber() {
      const subscriberInfo = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname
      }
      this.$store.dispatch('createSubscriber', subscriberInfo)
    },
    createMailchimpSubscriber() {
      const subscriberInfo = {
        email: this.subscriberEmail,
        firstname: this.subscriberFirstname,
        lastname: this.subscriberLastname
      }
      this.$store.dispatch('createMailchimpSubscriber', subscriberInfo)
    },
    setupMailchimpPopup() {
      const mailchimpConfig = {
        baseUrl: 'mc.us18.list-manage.com',
        uuid: '35f22d84b4fdb209da5977e3b',
        lid: '1a284e2d50'
      }

      const chimpPopupLoader = document.createElement('script')
      chimpPopupLoader.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js'
      chimpPopupLoader.setAttribute('data-dojo-config', 'usePlainJson: true, isDebug: false')
      const chimpPopup = document.createElement('script')
      chimpPopup.appendChild(document.createTextNode('require(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' + mailchimpConfig.baseUrl + '", "uuid": "' + mailchimpConfig.uuid + '", "lid": "' + mailchimpConfig.lid + '"})});'))

      chimpPopupLoader.onload = function () {
        document.body.appendChild(chimpPopup)
      }
      document.body.appendChild(chimpPopupLoader)
    },
    async onSubmit() {
      try {
        // eslint-disable-next-line
        const token = await this.$recaptcha.execute('login')
        this.createMailchimpSubscriber()
        this.createSubscriber()
        this.sendEmail()
        this.closeModal()
      } catch (error) {
        // eslint-disable-next-line
        console.log('Submission error:', error)
      }
    }
  }
}
</script>

<style>
  .promo-section {
    position: relative;
  }
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(1,1,1,0.75);
  }
  .avatar {
    width: 58px;
  }
  .stats-carousel-item h3 {
    font-size: 1.1rem;
    font-family: 'Montserrat', sans-serif; font-weight: 700;
    color: #ffc716;
    text-transform: uppercase;
    line-height: 20px;
  }
  .stats-carousel-item h6 {
    font-size: 15px;
  }
  .counter {
    font-family: 'Montserrat',sans-serif;
    font-weight: 200;
    font-size: 72px;
    letter-spacing: 12px;
  }
  .inner-section {
    margin: 0 auto;
    width: 100%;
  }
  .featuress-expansion .container {
    padding-top: 50px;
  }
  svg {
    margin-top: -3px;
    width: 100%;
  }
  .text-rotator {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .banner-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
  .hero-container {
    position: relative;
    height: 100vh;
  }
  #blog {
    text-align: center;
  }
  .blog-welcome-button {
    margin: 0 auto;
    margin-bottom: 50px;
  }
.showModal {
  display: block;
}
#newsletter-homepage-modal .btn-close {
  float: right;
  background: transparent;
  width: 40px;
  padding: 5px;
}
#newsletter-homepage-modal .btn-close img {
  height: 20px;
}
#subscribeToNewsletterHomepageForm {
  padding-left: 0;
  padding-right: 0;
  margin: 15px 0;
}
#subscribeToNewsletterHomepageForm .modal-header,
#subscribeToNewsletterHomepageForm .modal-body {
  border: none;
}
#newsletter-homepage-modal .modal-body h3 {
  margin-top: 15px;
  text-align: center;
}
#subscribeToNewsletterHomepageForm input {
  border-color: #E2E2E2;
      color: #494949;
}
#subscribeToNewsletterHomepageForm input::placeholder {
  color: #E2E2E2;
}
#subscribeToNewsletterHomepageForm h3 {
  font-size: 18px;
  color: #494949;
  font-weight: 500;
}
#subscribeToNewsletterHomepageForm .btn {
  width: 170px;
}
.modal-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
}
.play-video {
  height: 40px;
  width: 40px;
  border: 1px solid #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.play {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  margin: 0 auto;
}
</style>
