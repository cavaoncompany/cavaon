<template>
  <!-- masthead-section (this nav bar is initially hidden but will be visible only on inner pages) : starts -->
  <header id="standard-header" class="standard-header">
    <div class="header-container">
      <div class="row">
        <article class="col-md-2 text-left">
          <a itemscope itemtype="https://schema.org/Organization" href="/">
            <img itemprop="logo" alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="/images/Logo-colour.png">
          </a>
        </article>
        <article class="col-md-10 text-right">
          <ul class="standard-nav standard-nav-dark-text visible-lg visible-md">
            <li><a id="about-linker" href="/">About</a></li>
            <li>
              <a id="flowchart-linker" @click="toggleDropdown('services')">Services <i class="fa fa-chevron-down" /></a>
              <div class="standard-services-dropdown-menu hidden" aria-labelledby="standardServicesNavbarDropdown">
                <div class="triangle-container">
                  <div class="triangle-up" />
                </div>
                <a class="services-dropdown-item" href="/">Digital Marketing</a>
                <a class="services-dropdown-item" href="/">Branding Design</a>
                <a class="services-dropdown-item" href="/">E-commerce Platform</a>
              </div>
            </li>
            <li>
              <a id="solutions-linker" @click="toggleDropdown('solutions')">Solutions <i class="fa fa-chevron-down" /></a>
              <div class="standard-solutions-dropdown-menu hidden" aria-labelledby="standardSolutionsNavbarDropdown">
                <div class="triangle-container">
                  <div class="triangle-up" />
                </div>
                <a class="solutions-dropdown-item" href="/">IT Support and Development</a>
                <a class="solutionsdropdown-item" href="/">Business Productivity</a>
                <a class="solutionsdropdown-item" href="/">Graphic & Web Design</a>
              </div>
            </li>
            <li><a id="caseStudies-linker" href="/case-studies">Case Studies</a></li>
            <li><a id="blog-linker" href="/blog">Blog</a></li>
            <li><a id="contact-linker" href="/contact-us">Contact</a></li>
            <li>
              <button class="btn btn-light contact-btn">
                GET IN TOUCH
              </button>
            </li>
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
    toggleDropdown: function (menu) {
      const services = document.getElementsByClassName('standard-services-dropdown-menu')[0]
      const solutions = document.getElementsByClassName('standard-solutions-dropdown-menu')[0]
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
#standard-header .header-container {
  width: 100%;
  padding: 0 40px;
}
.contact-btn {
  border-radius: 50px;
  background-color: #582C87;
  color: #fff;
  font-weight: 500;
  width: 150px;
  border: none;
}
.contact-btn:hover {
  background-color: #ffc716;
  color: #582C87;
}
.fa {
  font-size: 8px;
  vertical-align: top;
  padding-top: 4px;
}
.standard-services-dropdown-menu, .standard-solutions-dropdown-menu {
  position: absolute;
  top: 70px;
  background:#fff;
  border-radius: 8px;
  padding: 15px;
  text-align: left;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 4px rgba(0,0,0,.25);
}
.standard-services-dropdown-menu a, .standard-solutions-dropdown-menu a {
  color: #494949;
  line-height: 2rem;
}
.standard-services-dropdown-menu a:hover, .standard-solutions-dropdown-menu a:hover {
  color: #ffc716;
}
.triangle-up {
  width: 100px;
  height: 100px;
  overflow: hidden;
  box-shadow: 0 16px 10px -17px rgba(0, 0, 0, 0.25);
}
.triangle-container {
  height: 50px;
  width: 50px;
  position: absolute;
  top: -10px;
  left: 0px;
  z-index: -1;
}
.triangle-up:after, .triangle-up::after {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  background: #fff;
  transform: rotate(45deg); /* Prefixes... */
  top: 10px;
  left: 15px;
  box-shadow: 4px 3px 15px 0px rgba(0,0,0,.25);
  }
</style>
