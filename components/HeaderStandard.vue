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
              <a id="flowchart-linker" @click="toggleDropdown('services')">Services <i class="fa fa-chevron-down"></i></a>
              <div class="dropdown-menu services-dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/">Digital Marketing</a>
                <a class="dropdown-item" href="/">Branding Design</a>
                <a class="dropdown-item" href="/">E-commerce Platform</a>
              </div>
            </li>
            <li>
              <a id="solutions-linker" @click="toggleDropdown('solutions')">Solutions <i class="fa fa-chevron-down"></i></a>
              <div class="dropdown-menu solutions-dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/">IT Support and Development</a>
                <a class="dropdown-item" href="/">Business Productivity</a>
                <a class="dropdown-item" href="/">Graphic & Web Design</a>
              </div>
            </li>
            <li><a id="caseStudies-linker" href="/">Case Studies</a></li>
            <li><a id="blog-linker" href="/blog">Blog</a></li>
            <li><a id="contact-linker" href="/">Contact</a></li>
            <li><button class="btn btn-light contact-btn">GET IN TOUCH</button></li>
          </ul>
        </article>
      </div>
    </div>
  </header>
  <!-- masthead-section:ends -->
</template>

<script>
export default {
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
</style>
