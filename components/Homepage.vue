<template>
  <div>
    <HeaderMobile :projectFormOpen="projectFormOpen" />
    <div id="iosMessage" />
    <!-- Master Wrap : starts -->
    <section id="mastwrap">
      <section id="intro" class="intro">
        <HeaderTop :projectFormOpen="projectFormOpen" />
        <!-- <div class="valignBanner"> -->
          <div class="container">
            <div class="hero-caps text-rotator">
              <h1 class="white">
                <span>{{ banner.titleTop }}</span>
                <br>{{ banner.titleBottom }}
              </h1>
              <h6 class="minimal white">
                <span>{{ banner.subHeader }}</span>
              </h6>
              <div class="welcome-button">
                <a class="btn btn-odin btn-odin-color" href="#start-a-project" @click="openStartAProjectForm">{{ banner.buttonText }}</a>
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
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="1 0 1250.000000 272.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,272.000000) scale(0.100000,-0.100000)"
          fill="#582C87"
          stroke="none"
        >
          <path
            d="M10 1374 c0 -1277 1 -1345 18 -1280 930 291 1857 460 3092 565 736
            63 1316 86 2530 101 956 12 1423 30 2060 81 2201 174 3760 608 4590 1276 116
            93 255 235 334 341 66 87 166 271 166 305 0 16 -311 17 -6395 17 l-6395 0 0
            -1346z"
          />
        </g>
      </svg>
      <HeaderStandard :projectFormOpen="projectFormOpen" />
      <Flowchart />
      <FlowchartMobile />
      <!-- page-section : starts -->
      <Services />
      <!-- page-section : ends -->

      <div class="promo-section intermediate-section action-text parallax" @mouseenter.once="counterMouseOver()">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <article class="promo-article col-md-12 text-center">
                <h1 id="number-mobile">
                  <span class="color">{{ linesOfCode.toLocaleString() }}</span>
                </h1>
                <count-to
                  id="number-desktop"
                  ref="codecounter"
                  class="color counter"
                  :startVal="startVal"
                  :endVal="linesOfCode"
                  :autoplay="false"
                  :duration="3000"
                />
                <h2><span class="white">{{ promo.promoText }}</span></h2>
                <div class="welcome-button">
                  <a class="btn btn-odin btn-odin-color" href="#start-a-project" @click="openStartAProjectForm">{{ promo.buttonText }}</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <!-- inner-section:starts -->
      <!-- <section class="inner-section clients-wrap black-bg">
        <div class="container">
          <div class="row">
            <article class="col-md-12 text-center"> -->
      <!-- carousel:starts -->
      <!-- <div id="client-carousel" class="clients-carousel owl-carousel owl-nav-sticky-extra-wide owl-theme"> -->
      <!-- item:starts -->
      <!-- <div class="item client-carousel-item client-stage">
        <img data-no-retina alt="Let's Travel" title="Let's Travel" src="/images/Client-logo-lets-travel.png">
      </div> -->
      <!-- item:ends -->

      <!-- item:starts -->
      <!-- <div class="item client-carousel-item client-stage">
        <img data-no-retina alt="Travel Dream" title="Travel Dream" src="/images/Client-Logo-Travel-Dream.png">
      </div> -->
      <!-- item:ends -->

      <!-- item:starts -->
      <!-- <div class="item client-carousel-item client-stage">
        <img data-no-retina alt="Inspiring Vacations" title="Inspiring Vacations" src="/images/Client-Logo-Inspiring-Vacations.png">
      </div> -->
      <!-- item:ends -->
      <!-- </div> -->
      <!-- carousel:ends -->
      <!-- </article>
          </div>
        </div>
      </section> -->
      <!-- inner-section:ends -->

      <!-- page-section : starts -->
      <section id="caseStudies" class="page portfolio page-section remove-pad-bottom white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section promo-text">
          <div class="container">
            <div class="row">
              <article class="col-md-12 col-lg-8 col-lg-offset-2 text-center animated" data-fx="fadeInUp">
                <h3 class="dark">
                  <span>{{ caseStudies.title }}</span>
                </h3>
                <div class="liner color-bg" />
              </article>
            </div>
          </div>
        </section>
        <!-- inner-section:ends -->

        <!-- inner-section:starts -->
        <section class="inner-section">
          <!-- Container element for a single portfolio item. Do not remove! -->
          <div id="item_container" class="clearfix" />
        </section>
        <!-- inner-section:ends -->
        <ProjectWithSlider :projectDetails="projectDetails" />
        <!-- inner-section : starts -->
        <section class="inner-section add-top-quarter">
          <!-- Filter -->
          <div id="filter" class="clearfix">
            <div id="filter_wrapper">
              <!-- <ul id="portfolioFilter">
                <li class="filter" data-filter="all">
                  All
                </li>
                <li class="filter" data-filter="category1">
                  Let's Travel
                </li>
                <li class="filter" data-filter="category2">
                  Travel Dream
                </li>
              </ul> -->
            </div>
          </div>
          <!-- End: Filter -->

          <section id="portfolio-wrap">
            <!-- Thumbnails -->
            <div id="portfolio_thumbs">
              <ul id="grid" class="sortablePortfolio clearfix">
                <!-- 1st thumb -->
                <li class="folio-thumb mix category1">
                  <a href="#portfolio_item" class="more_info" @click="updateProjectDetails('letsTravel')">
                    <!-- Thumbnail -->
                    <img data-no-retina alt="odin" title="odin" src="/images/Case-studies-Lets-Travel.png" @click="updateProjectDetails('letsTravel')">
                    <!-- Info -->
                    <div class="item_info">
                      <div class="valign" @click="updateProjectDetails('letsTravel')">
                        <h3><span @click="updateProjectDetails('letsTravel')">Let's Travel</span></h3>
                        <p><span @click="updateProjectDetails('letsTravel')">Let's Travel</span></p>
                      </div>
                    </div>
                  </a>
                </li>

                <!-- 2nd thumb -->
                <li class="folio-thumb mix category2">
                  <a href="#portfolio_item" class="more_info" @click="updateProjectDetails('travelDream')">
                    <!-- Thumbnail -->
                    <img data-no-retina alt="odin" title="odin" src="/images/Case-Studies-Travel-Dream.png" @click="updateProjectDetails('travelDream')">
                    <!-- Info -->
                    <div class="item_info">
                      <div class="valign">
                        <h3><span @click="updateProjectDetails('travelDream')">Travel Dream</span></h3>
                        <p><span @click="updateProjectDetails('travelDream')">Traveldream</span></p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <!-- End: Thumbnails -->
          </section>
        <!-- End: Portfolio Wrap -->
        </section>
        <!-- inner-section : ends-->
      </section>
      <!-- page-section : ends -->

      <!-- page-section : starts -->
      <section id="testimonials" class="page testimonials page-section remove-pad-bottom white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section promo-text silver-bg row">
          <div class="container">
            <div class="row">
              <article class="col-md-12 col-lg-8 col-lg-offset-2 text-center animated" data-fx="fadeInUp">
                <h3 class="dark">
                  <span>{{ testimonials.title }}</span>
                </h3>
              </article>
            </div>
          </div>
        </section>
        <!-- inner-section:ends -->

        <!-- inner-section : starts -->
        <section class="inner-section text-center silver-bg row">
          <!-- <div id="testimonial-carousel" class="testimonial-carousel owl-carousel"> -->
          <div class="container">
            <div class="testimonial-wrapper">
              <div v-for="(testimonial, index) in testimonials.testimonials" :key="index" class="item stats-carousel-item testimonial-wrap testimonial-wrap-right">
                <h3 class="main-caps">
                  {{ testimonial.title }}
                </h3>
                <h6 class="dark">
                  {{ testimonial.testimonial }}
                </h6>
                <p><span class="testimonial-name">{{ testimonial.name }}</span><br><span><i>{{ testimonial.jobtitle }}<br>{{ testimonial.company }}</i></span></p>
              </div>
            </div>
          </div>
          <!-- carousel:ends -->
        </section>
        <!-- inner-section : ends -->
      </section>
      <!-- page-section : ends -->

      <!-- page-section : starts -->
      <section id="team-container" class="page team page-section remove-pad-bottom white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section promo-text">
          <div class="container">
            <div class="row">
              <article class="col-md-12 col-lg-8 col-lg-offset-2 text-center animated" data-fx="fadeInDown">
                <h3 class="dark">
                  <span>{{ team.title }}</span>
                </h3>
                <div class="liner color-bg" />
                <!-- <p class="grey">
                  Cavaon is a ditial business and platform solution company from Sydney.
                </p> -->
              </article>
            </div>
          </div>
        </section>
        <!-- inner-section:ends -->

        <!-- inner-section:starts -->
        <section id="team" class="inner-section team-wrap">
          <div class="container">
            <div class="row">
              <!-- item:starts -->
              <article v-for="(member, index) in team.team" :key="index" class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img
                    :id="member.firstname"
                    data-no-retina
                    :alt="member.firstname + ' ' + member.lastname"
                    :title="member.firstname + ' ' + member.lastname"
                    class="img-responsive"
                    :src="member.img1"
                    @mouseover="teamMouseOver(member.firstname, member.img2)"
                    @mouseleave="teamMouseOver(member.firstname, member.img1)"
                  >
                  <h3 class="dark team-desktop">
                    {{ member.firstname }}<br>{{ member.lastname }}
                  </h3>
                  <h3 class="team-mobile">
                    {{ member.firstname }} {{ member.lastname }}
                  </h3>
                  <h6>
                    <span>{{ member.title }}</span>
                  </h6>
                </div>
              </article>
            </div>
          </div>
        </section>
        <!-- inner-section:ends -->
      </section>
      <!-- page-section : ends -->

      <!-- page-section : starts -->
      <section id="about" class="contact page intermediate-section full-height parallax about-us-desktop">
        <div class="overlay">
          <div class="container valign">
            <div class="row">
              <article class="col-md-12 col-lg-8 col-lg-offset-2 main-caps text-center">
                <h3 class="white">
                  <span>{{ about.title }}</span>
                </h3>
                <div class="liner color-bg" />
                <p class="white">
                  {{ about.desktopSection1 }}
                </p>
                <p class="white">
                  {{ about.desktopSection2 }}
                </p>
                <p class="white">
                  {{ about.desktopSection3 }}
                </p>
                <p class="white">
                  {{ about.desktopSection4 }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section id="about" class="contact page intermediate-section parallax about-us-mobile">
        <div class="overlay">
          <div class="container valign">
            <div class="row">
              <article class="col-md-12 text-center">
                <h3 class="white">
                  <span>{{ about.title }}</span>
                </h3>
                <div class="liner color-bg" />
                <p class="white">
                  {{ about.mobileSection1 }}
                </p>
                <p class="white vision">
                  {{ about.mobileSection2 }}
                </p>
                <p class="white mission">
                  {{ about.mobileSection3 }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section id="contactForm" class="contact-form black-bg page page-section">
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
                  action="/success"
                  method="POST"
                  netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact">
                  <p class="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field"></label>
                  </p>
                  <article>
                    <label class="hidden" for="name">Name</label>
                    <input id="name" type="text" :placeholder="contact.namePlaceholder" name="name" size="100">
                  </article>
                  <article>
                    <label class="hidden" for="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      :placeholder="contact.emailPlaceholder"
                      name="email"
                      size="30"
                      required
                    >
                  </article>
                  <article>
                    <label for="msg" class="hidden">Message</label>
                    <textarea id="msg" :placeholder="contact.messagePlaceholder" name="message" cols="40" rows="3" />
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
      <StartAProjectForm v-if="projectFormOpen === true" />
      <Footer />
    </section>
    <!-- Master Wrap : ends -->
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import banner from '../static/content/banner.json'
import contact from '../static/content/contact.json'
import caseStudies from '../static/content/casestudies.json'
import about from '../static/content/about.json'
import team from '../static/content/team.json'
import testimonials from '../static//content/testimonials.json'
import services from '../static/content/services.json'
import projects from '../static/content/projects.json'
import promo from '../static/content/promo.json'
import messages from '../static/content/messages.json'
import EventBus from '../event-bus.js'
import HeaderMobile from './HeaderMobile'
import HeaderTop from './HeaderTop'
import HeaderStandard from './HeaderStandard'
import Flowchart from './Flowchart'
import FlowchartMobile from './FlowchartMobile'
import Services from './Services'
import ProjectWithSlider from './ProjectWithSlider'
// import MobileServices from './MobileServices'
import StartAProjectForm from './StartAProjectForm'
import Footer from './Footer'

export default {
  components: {
    HeaderMobile,
    HeaderTop,
    HeaderStandard,
    Flowchart,
    FlowchartMobile,
    Services,
    ProjectWithSlider,
    // MobileServices,
    countTo,
    StartAProjectForm,
    Footer
  },
  props: {
    showInstallMessage: Boolean
  },
  data() {
    return {
      caseStudies: caseStudies,
      projectDetails: caseStudies.caseStudies[0],
      contact: contact,
      about: about,
      team: team,
      testimonials: testimonials,
      services: services,
      projects: projects,
      messages: messages,
      promo: promo,
      banner: banner,
      linesOfCode: 12538,
      windowWidth: 0,
      isMobile: false,
      startVal: 3564,
      projectFormOpen: false
    }
  },
  created() {
    // if (process.client) {
    //   // eslint-disable-next-line
    //   const backstretchScript = document.createElement('script')
    //   let banners = ''
    //   for (let i = 0; i < this.banner.banners.length; i++) {
    //     if (i < this.banner.banners.length - 1) {
    //       banners += '"' + this.banner.banners[i].image + '",'
    //     } else {
    //       banners += '"' + this.banner.banners[i].image + '"'
    //     }
    //   }
    //   backstretchScript.innerHTML = '$.backstretch([' + banners + '], {duration: 3000, fade: 750})'
    //   // eslint-disable-next-line
    //   document.body.appendChild(backstretchScript)
    //   // eslint-disable-next-line
    //   this.windowWidth = window.innerWidth || document.documentElement.clientWidth
    //   if (this.windowWidth < 576) { this.isMobile = true }
    // }
    EventBus.$on('closeStartAProjectForm', (formOpen) => {
      this.closeStartAProjectForm()
    })
    const date = new Date()
    const randomnumber = this.convertToMinutes(date)
    this.linesOfCode = Number(randomnumber - 25868512)
  },
  methods: {
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
    openStartAProjectForm: function () {
      this.projectFormOpen = true
    },
    closeStartAProjectForm: function () {
      this.projectFormOpen = false
    }
  }
}
</script>

<style>
  #about p {
    line-height: 1.5rem;
    padding-top: 10px;
  }
  .contact {
    position: relative;
  }
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
  #testimonials .inner-section {
    width: 100%;
    margin-left: 0;
  }
  .testimonial-wrapper {
    display: flex;
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
  }
  .featuress-expansion .container {
    padding-top: 50px;
  }
  svg {
    margin-top: -3px;
    width: 100%;
  }
  #intro {
    background-color: #582C87;
  }
  .text-rotator {
    position: absolute;
  }
</style>
