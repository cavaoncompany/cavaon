<template>
  <!-- masthead-section (this nav bar is visible only on home page) : starts -->
  <header id="intro-header" class="intro-header visible-lg visible-md scroll">
    <div class="header-container">
      <div class="row">
        <article class="col-md-2 text-left">
          <a itemscope itemtype="https://schema.org/Organization" href="#intro-header">
            <img
              data-no-retina
              alt="Cavaon Logo"
              title="Cavaon Logo"
              class="main-logo img-responsive scroll"
              src="/images/Logo-colour.png"
              itemprop="logo"
            >
          </a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav standard-nav-white-text visible-md visible-lg">
            <li><a href="#about" aria-label="Go to About">About</a></li>
            <li aria-haspopup="true" aria-expanded="false">
              <a href="#" id="topServicesNavbarDropdown" aria-label="Go to Services" @click="toggleDropdown('services')">Services <i class="fa fa-chevron-down"></i></a>
              <div class="services-dropdown-menu hidden" aria-labelledby="topServicesNavbarDropdown">
                <div class="triangle-container">
                  <div class="triangle-up" />
                </div>
                <a class="services-dropdown-item" href="/">Digital Marketing</a>
                <a class="services-dropdown-item" href="/">Branding Design</a>
                <a class="services-dropdown-item" href="/">E-commerce Platform</a>
              </div>
            </li >
            <li aria-haspopup="true" aria-expanded="false">
              <a href="#" id="topSolutionsNavbarDropdown" aria-label="Go to Solutions" @click="toggleDropdown('solutions')">Solutions <i class="fa fa-chevron-down"></i></a>
              <div class="solutions-dropdown-menu hidden" aria-labelledby="topSolutionsNavbarDropdown">
                <div class="triangle-container">
                  <div class="triangle-up" />
                </div>
                <a class="solutions-dropdown-item" href="/">IT Support and Development</a>
                <a class="solutions-dropdown-item" href="/">Business Productivity</a>
                <a class="solutions-dropdown-item" href="/">Graphic & Web Design</a>
              </div>
            </li>
            <li><a href="#caseStudies" aria-label="Go to Case Studies">Case Studies</a></li>
            <li><a href="/blog" aria-label="Go to blog" @click.prevent="goToPage('/blog')">Blog</a></li>
            <li><a href="#contact" aria-label="Go to Contact Form">Contact</a></li>
            <li><button class="btn btn-light top-contact-btn">GET IN TOUCH</button></li>
          </ul>
        </article>
      </div>
    </div>
  </header>
  <!-- masthead-section:ends -->
</template>

<script>

export default {
  methods: {
    goToPage: function (page) {
      this.$router.push({ name: 'blog' })
    },
    toggleDropdown: function (menu) {
      const services = document.getElementsByClassName('services-dropdown-menu')[0]
      const solutions = document.getElementsByClassName('solutions-dropdown-menu')[0]
      if (process.client) {
        if (menu === 'services') {
          if (services.classList.contains('hidden')) {
            if (!solutions.classList.contains('hidden')) {
              solutions.classList.add('hidden')
            }
            services.classList.remove('hidden')
          } else {
            services.classList.add('hidden')
          }
        } else if (menu === 'solutions') {
          if (solutions.classList.contains('hidden')) {
            if (!services.classList.contains('hidden')) {
              services.classList.add('hidden')
            }
            solutions.classList.remove('hidden')
          } else {
            solutions.classList.add('hidden')
          }
        }
      }
    }
  }
}
</script>

<style>
#intro-header .header-container {
  width: 100%;
  padding: 0 40px;
}
.top-contact-btn {
  border-radius: 50px;
  background-color: #fff;
  color: #582C87;
  font-weight: 500;
  width: 150px;
  border: none;
}
.top-contact-btn:hover {
  background-color: #ffc716;
}
.fa {
  font-size: 8px;
  vertical-align: top;
  padding-top: 4px;
}
.services-dropdown-menu, .solutions-dropdown-menu {
  position: absolute;
  top: 60px;
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
}
.services-dropdown-menu a, .solutions-dropdown-menu a {
  color: #494949;
  line-height: 2rem;
}
.services-dropdown-menu a:hover, .solutions-dropdown-menu a:hover {
  color: #ffc716;
}
.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #fff;
}
.triangle-container {
  height: 50px;
  width: 50px;
  position: absolute;
  top: -10px;
  left: 0px;
  z-index: -1;
}
</style>
