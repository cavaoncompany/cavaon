<template>
  <div>
    <HeaderMobile />
    <div id="iosMessage" />
    <!-- Master Wrap : starts -->
    <section id="mastwrap">
      <section id="intro" class="intro">
        <HeaderTop />
        <!-- <div class="valignBanner"> -->
        <div class="container hero-container" @mouseover="changeUrl('')">
          <div class="hero-caps text-rotator">
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
            <div class="welcome-button">
              <a class="btn btn-odin btn-odin-color" href="/start-a-project">{{ banner.buttonText }}</a>
            </div>
          </div>
        </div>
        <!-- </div> -->
        <!-- valignBanner:ends -->
        <a class="scroll" href="#services" aria-label="Scroll to Projects">
          <div class="mouse-icon white hidden-xs" style="opacity: 1;">
            <div class="wheel" />
          </div>
        </a>
      </section>
      <HeaderStandard />
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
                  <a class="btn btn-odin btn-odin-color" href="/start-a-project">{{ promo.buttonText }}</a>
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

          <section id="portfolio-wrap" @mouseover="changeUrl('case-studies')">
            <!-- Thumbnails -->
            <div id="portfolio_thumbs">
              <ul id="grid" class="sortablePortfolio clearfix">
                <!-- 1st thumb -->
                <li class="folio-thumb mix category1">
                  <a href="projects/project-slider" class="more_info" @click="updateProjectDetails('letsTravel')">
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
                  <a href="projects/project-slider" class="more_info" @click="updateProjectDetails('travelDream')">
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
        <section class="inner-section text-center silver-bg row" @mouseover="changeUrl('testimonials')">
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
      <section id="team-container" class="page team page-section remove-pad-bottom white-bg" @mouseover="changeUrl('team')">
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
              <article v-for="(member, index) in team.team" :key="index" class="col-sm-6 col-md-3 text-left">
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
      <About />
      <Contact />
      <Footer />
    </section>
    <!-- Master Wrap : ends -->
  </div>
</template>

<script>
import countTo from 'vue-count-to'
import { mapState } from 'vuex'
import banner from '../static/content/banner.json'
import caseStudies from '../static/content/casestudies.json'
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
import About from './About'
import Contact from './Contact'
import Flowchart from './Flowchart'
import FlowchartMobile from './FlowchartMobile'
import Services from './Services'
import ProjectWithSlider from './ProjectWithSlider'
import Footer from './Footer'

export default {
  components: {
    HeaderMobile,
    HeaderTop,
    HeaderStandard,
    About,
    Contact,
    Flowchart,
    FlowchartMobile,
    Services,
    ProjectWithSlider,
    countTo,
    Footer
  },
  props: {
    showInstallMessage: Boolean
  },
  data() {
    return {
      caseStudies: caseStudies,
      projectDetails: caseStudies.caseStudies[0],
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
      projectFormOpen: false,
      firstname: '',
      lastname: '',
      email: '',
      message: ''
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
    EventBus.$on('closeStartAProjectForm', (formOpen) => {
      this.closeStartAProjectForm()
    })
    const date = new Date()
    const randomnumber = this.convertToMinutes(date)
    this.linesOfCode = Number(randomnumber - 25868512)
  },
  async mounted() {
    await this.$recaptcha.init()
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
    changeUrl: function (link) {
      history.pushState({}, null, '/' + link)
    },
    teamMouseOver: function (name, image) {
      document.getElementById(name).src = image
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
  .text-rotator {
    position: absolute;
  }
  .hero-container {
    position: relative;
  }
</style>
