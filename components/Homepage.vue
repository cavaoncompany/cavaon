<template>
  <div>
    <!-- Preloader
  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
    <!-- <div id="preloader">
      <div id="status" />
    </div> -->

    <!-- mobile only navigation : starts -->
    <nav class="mobile-nav hidden-lg">
      <ul class="slimmenu">
        <li>
          <a class="scroll" href="#projects">projects</a>
        </li>
        <li>
          <a class="scroll" href="#services">services</a>
        </li>
        <li>
          <a class="scroll" href="#caseStudies">case studies</a>
        </li>
        <li>
          <a class="scroll" href="#team">team</a>
        </li>
        <li>
          <a class="scroll" href="#about">about</a>
        </li>
        <li>
          <a class="scroll" href="#contact-form">contact</a>
        </li>
        <li>
          <a class="scroll" href="#quote">Get a Quote</a>
        </li>
      </ul>
    </nav>
    <!-- mobile only navigation : ends -->

    <!-- Master Wrap : starts -->
    <section id="mastwrap">
      <section id="intro" class="intro trans-dark">
        <!-- masthead-section (this nav bar is visible only on home page) : starts -->
        <header id="intro-header" class="intro-header visible-lg scroll">
          <div class="container">
            <div class="row">
              <article class="col-md-2 text-left">
                <a href="#intro-header"><img data-no-retina alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive scroll" src="~/assets/images/Logo-white.png"></a>
              </article>
              <article class="col-md-10 text-right">
                <ul class="standard-nav  standard-nav-white-text visible-lg">
                  <li><a href="#projects" class="scroll">Projects</a></li>
                  <li><a href="#services" class="scroll">Services</a></li>
                  <li><a href="#caseStudies" class="scroll">Case Studies</a></li>
                  <li><a href="#team" class="scroll">Team</a></li>
                  <li><a href="#about" class="scroll">About</a></li>
                  <li><a href="#contact-form" class="scroll">Contact</a></li>
                  <li><a href="#quote" class="scroll">Get a Quote</a></li>
                </ul>
              </article>
            </div>
          </div>
        </header>
        <!-- masthead-section:ends -->

        <div class="valign">
          <div class="hero-caps  text-center">
            <h6 class="text-rotator minimal white">
              We create, we create, we provide, we create, we create, we provide
            </h6>
            <h1 class="text-rotator white">
              <span>branding, logos, marketing, platforms, web design, consultation</span>
            </h1>
          </div>
        </div>
        <!-- valign:ends -->

        <a class="scroll" href="#projects">
          <div class="mouse-icon white hidden-xs" style="opacity: 1;">
            <div class="wheel" />
          </div>
        </a>
      </section>
      <!-- masthead-section (this nav bar is initially hidden but will be visible only on inner pages) : starts -->
      <header id="standard-header" class="standard-header">
        <div class="container">
          <div class="row">
            <article class="col-md-2 text-left">
              <a href="#intro-header"><img alt="Cavaon Logo" title="Cavaon Logo" class="main-logo img-responsive" src="~/assets/images/Logo-colour.png"></a>
            </article>
            <article class="col-md-10 text-right">
              <ul class="standard-nav standard-nav-dark-text visible-lg">
                <li><a id="projects-linker" href="#projects" class="scroll">Projects</a></li>
                <li><a id="services-linker" href="#services" class="scroll">Services</a></li>
                <li><a id="case-studies-linker" href="#caseStudies" class="scroll">Case Studies</a></li>
                <li><a id="team-linker" href="#team">Team</a></li>
                <li><a id="about-linker" href="#about" class="scroll">About</a></li>
                <li><a id="contact-linker" href="#contact-form" class="scroll">Contact</a></li>
                <li><a id="quote-linker" href="#quote" class="scroll">Get a Quote</a></li>
              </ul>
            </article>
          </div>
        </div>
      </header>
      <!-- masthead-section:ends -->
      <section id="projects" class="page about white-bg">
        <div class="container">
          <div class="item about-carousel-item">
            <div class="row">
              <article class="col-md-8 col-md-offset-2 main-caps text-center">
                <img alt="Cavaon Logo" title="Cavaon Logo" src="~/assets/images/Avatar.png">
                <h3>
                  A Whole New Way To<br>Run Your Business
                </h3>
                <!-- <div class="liner color-bg" /> -->
                <h6 class="dark">
                  Digital Business & Platform Solutions
                </h6>
                <div class="welcome-button">
                  <a class="btn btn-odin btn-odin-color" href="#">Start a project</a>
                </div>
              </article>
            </div>
          </div>
          <!-- item:ends -->
        </div>
      </section>

      <!-- inner-section : starts -->
      <section id="thumb-carousel-wrap" class="inner-section thumb-carousel-wrap">
        <!-- thumb-carousel : starts -->
        <div id="thumb-carousel" class="owl-carousel">
          <div class="item">
            <a class="venobox" data-gall="thumb-gallery" href="http://placehold.it/700x700">
              <img data-no-retina alt="Ecommerce" title="Ecommerce" class="img-responsive" src="~/assets/images/Project-Ecommerce.jpg">
              <div class="thumb-title"><h5><span>Ecommerce</span></h5></div>
            </a>
          </div>
          <div class="item">
            <a class="venobox" data-gall="thumb-gallery" href="http://placehold.it/700x700">
              <img data-no-retina alt="Logo" title="Logo" class="img-responsive" src="~/assets/images/Project-Logo.jpg">
              <div class="thumb-title"><h5><span>Logo</span></h5></div>
            </a>
          </div>
          <div class="item">
            <a class="venobox" data-gall="thumb-gallery" href="http://placehold.it/700x700">
              <img data-no-retina alt="Responsive" title="Responsive" class="img-responsive" src="~/assets/images/Project-Responsive.jpg">
              <div class="thumb-title"><h5><span>Responsive</span></h5></div>
            </a>
          </div>
          <div class="item">
            <a class="venobox" data-gall="thumb-gallery" href="http://placehold.it/700x700">
              <img data-no-retina alt="Branding" title="Branding" class="img-responsive" src="~/assets/images/Project-Branding.jpg">
              <div class="thumb-title"><h5><span>Branding</span></h5></div>
            </a>
          </div>
          <div class="item">
            <a class="venobox" data-gall="thumb-gallery" href="http://placehold.it/700x700">
              <img data-no-retina alt="Management" title="Management" class="img-responsive" src="~/assets/images/Project-Management.jpg">
              <div class="thumb-title"><h5><span>Management</span></h5></div>
            </a>
          </div>
          <div class="item">
            <a class="venobox" data-gall="thumb-gallery" href="http://placehold.it/700x700">
              <img data-no-retina alt="Brochure" title="Brochure" class="img-responsive" src="~/assets/images/Project-Brochure.jpg">
              <div class="thumb-title"><h5><span>Brochure</span></h5></div>
            </a>
          </div>
          <div class="item">
            <a class="venobox" data-gall="thumb-gallery" href="~/assets/images/Project-Wireframe.jpg">
              <img data-no-retina alt="Wireframe" title="Wireframe" class="img-responsive" src="~/assets/images/Project-Wireframe.jpg">
              <div class="thumb-title"><h5><span>Wireframe</span></h5></div>
            </a>
          </div>
          <div class="item">
            <a class="venobox" data-gall="thumb-gallery" href="http://placehold.it/700x700">
              <img data-no-retina alt="Business Card" title="Business Card" class="img-responsive" src="~/assets/images/Project-BusinessCard.jpg">
              <div class="thumb-title"><h5><span>Business Card</span></h5></div>
            </a>
          </div>
        </div>
        <!-- thumb-carousel : ends -->
      </section>
      <!-- inner-section : ends -->

      <!-- page-section : starts -->
      <section id="services" class="page page-section services white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section promo-text">
          <div class="container">
            <div class="row">
              <article class="col-md-8 col-md-offset-2 text-center animated" data-fx="fadeInUp">
                <h3 class="dark">
                  <span>Our Services</span>
                </h3>
                <div class="liner color-bg" />
                <p>
                  Cavaon is a ditial business and platform solutions company from Sydney.
                </p>
              </article>
            </div>
          </div>
        </section>
        <!-- inner-section:ends -->

        <!-- inner-section : starts -->
        <section class="inner-section add-top-half pad-top-half pad-bottom-half silver-bg ">
          <!-- container : starts -->
          <section class="container">
            <div class="row featuress-icon-wrap  featuress-icon-wrap-green">
              <article class="col-md-12">
                <div class="row">
                  <article id="features-01" class="features-icon current col-md-2 text-center animated" data-fx="fadeInDown">
                    <a class="customLink" data-target="1"><img data-no-retina alt="Logo" title="Logo" src="~/assets/images/icons/Services-Logo.png"></a>
                    <h5 class="dark">
                      Logo
                    </h5>
                  </article>
                  <article id="features-02" class="features-icon col-md-2 text-center animated" data-fx="fadeInUp">
                    <a class="customLink" data-target="2"><img data-no-retina alt="Web Design" title="Web Design" src="~/assets/images/icons/Services-WebDesign.png"></a>
                    <h5 class="dark">
                      Web Design
                    </h5>
                  </article>
                  <article id="features-03" class="features-icon col-md-2 text-center animated" data-fx="fadeInDown">
                    <a class="customLink" data-target="3"><img data-no-retina alt="Development" title="Development" src="~/assets/images/icons/Services-Development.png"></a>
                    <h5 class="dark">
                      Development
                    </h5>
                  </article>
                  <article id="features-04" class="features-icon col-md-2 text-center animated" data-fx="fadeInDown">
                    <a class="customLink" data-target="4"><img alt="Consultation" title="Consultation" src="~/assets/images/icons/Services-Consultation.png"></a>
                    <h5 class="dark">
                      Consultation
                    </h5>
                  </article>
                  <article id="features-05" class="features-icon col-md-2 text-center animated" data-fx="fadeInUp">
                    <a class="customLink" data-target="5"><img alt="Ongoing Support" title="Ongoing Support" src="~/assets/images/icons/Services-OngoingSupport.png"></a>
                    <h5 class="dark">
                      Ongoing Support
                    </h5>
                  </article>
                  <article id="features-06" class="features-icon col-md-2 text-center animated" data-fx="fadeInDown">
                    <a class="customLink" data-target="6"><img alt="Marketing" title="Marketing" src="~/assets/images/icons/Services-Marketing.png"></a>
                    <h5 class="dark">
                      Marketing
                    </h5>
                  </article>
                </div>
              </article>
            </div>
          </section>
        <!-- container : ends -->
        </section>
        <!-- inner-section : ends -->

        <!-- inner-section : starts -->
        <section class="inner-section featuress-expansion">
          <!-- container : starts -->
          <section class="container">
            <ul id="features-slider">
              <li class="features-details default" data-features-active-hover="features-01">
                <article class="text-center">
                  <h3>Logo & Branding</h3>
                  <p class="dark">
                    Make a great impression on your customers with a good logo and branding
                  </p>
                </article>
              </li>

              <li class="features-details default" data-features-active-hover="features-02">
                <article class="text-center">
                  <h3>Amazing Web Design</h3>
                  <p class="dark">
                    Build a successful website beginning with good web design - From layout to customer experience.
                  </p>
                </article>
              </li>

              <li class="features-details default" data-features-active-hover="features-03">
                <article class="text-center">
                  <h3>Development</h3>
                  <p class="dark">
                    Build your travel platform with the ability to connect your customers via mobile or desktop.
                  </p>
                </article>
              </li>

              <li class="features-details default" data-features-active-hover="features-04">
                <article class="text-center">
                  <h3>Consultation</h3>
                  <p class="dark">
                    We give you a hand brainstorming for ideas and overcoming business challenges. Transform them into a digital business any way you want.
                  </p>
                </article>
              </li>

              <li class="features-details default" data-features-active-hover="features-05">
                <article class="text-center">
                  <h3>Ongoing Support</h3>
                  <p class="dark">
                    You are not alone. We are here to coniously support all our clients for growth and the future of their business.
                  </p>
                </article>
              </li>

              <li class="features-details default" data-features-active-hover="features-06">
                <article class="text-center">
                  <h3>Marketing</h3>
                  <p class="dark">
                    Tell the world you are here to provide them with products and services. Digital marketing is essential to get traffic to your website.
                  </p>
                </article>
              </li>
            </ul>
          </section>
        <!-- container : ends -->
        </section>
        <!-- inner-section : ends -->
      </section>
      <!-- page-section : ends -->

      <div class="promo-section intermediate-section action-text parallax">
        <div class="container">
          <div class="row">
            <article class="col-md-12 text-center">
              <h1><span class="color">12,538</span></h1>
              <h2><span>Code that we've written so far</span></h2>
              <div class="welcome-button">
                <a class="btn btn-odin btn-odin-color" href="#">Get a Quote</a>
              </div>
            </article>
          </div>
        </div>
      </div>

      <!-- inner-section:starts -->
      <section class="inner-section clients-wrap black-bg">
        <div class="container">
          <div class="row">
            <article class="col-md-12 text-center">
              <!-- carousel:starts -->
              <div id="client-carousel" class="clients-carousel owl-carousel owl-nav-sticky-extra-wide owl-theme">
                <!-- item:starts -->
                <div class="item client-carousel-item client-stage">
                  <img data-no-retina alt="Let's Travel" title="Let's Travel" src="~/assets/images/Client-Logo-Lets-Travel.png">
                </div>
                <!-- item:ends -->

                <!-- item:starts -->
                <div class="item client-carousel-item client-stage">
                  <img data-no-retina alt="Travel Dream" title="Travel Dream" src="~/assets/images/Client-Logo-Travel-Dream.png">
                </div>
                <!-- item:ends -->

                <!-- item:starts -->
                <!-- <div class="item client-carousel-item client-stage">
                  <img data-no-retina alt="Inspiring Vacations" title="Inspiring Vacations" src="~/assets/images/Client-Logo-Inspiring-Vacations.png">
                </div> -->
                <!-- item:ends -->
              </div>
              <!-- carousel:ends -->
            </article>
          </div>
        </div>
      </section>
      <!-- inner-section:ends -->

      <!-- page-section : starts -->
      <section id="caseStudies" class="page portfolio page-section remove-pad-bottom white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section promo-text">
          <div class="container">
            <div class="row">
              <article class="col-md-8 col-md-offset-2 text-center animated" data-fx="fadeInUp">
                <h3 class="dark">
                  <span>Case Studies</span>
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
              <ul id="portfolioFilter">
                <li class="filter" data-filter="all">
                  All
                </li>
                <li class="filter" data-filter="category1">
                  Let's Travel
                </li>
                <li class="filter" data-filter="category2">
                  Travel Dream
                </li>
                <!--<li class="filter" data-filter="category3">Ajax Vimeo</li>
                                  <li class="filter" data-filter="category4">Lightbox Photos</li>
                                  <li class="filter" data-filter="category5">Lightbox Video</li>-->
              </ul>
            </div>
          </div>
          <!-- End: Filter -->

          <section id="portfolio-wrap">
            <!-- Thumbnails -->
            <div id="portfolio_thumbs">
              <ul id="grid" class="sortablePortfolio clearfix">
                <!-- 1st thumb -->
                <li class="folio-thumb mix category1">
                  <a href="projects/project-slider.html" class="more_info" @click="updateProjectDetails('letsTravel')">
                    <!-- Thumbnail -->
                    <img data-no-retina alt="odin" title="odin" src="~/assets/images/Case-studies-Lets-Travel.png" @click="updateProjectDetails('letsTravel')">
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
                  <a href="projects/project-slider.html" class="more_info" @click="updateProjectDetails('travelDream')">
                    <!-- Thumbnail -->
                    <img data-no-retina alt="odin" title="odin" src="~/assets/images/Case-studies-Travel-Dream.png" @click="updateProjectDetails('travelDream')">
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
      <section id="team" class="page testimonials page-section remove-pad-bottom white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section promo-text silver-bg row">
          <div class="container">
            <div class="row">
              <article class="col-md-8 col-md-offset-2 text-center animated" data-fx="fadeInUp">
                <h3 class="dark">
                  <span>Testimonials</span>
                </h3>
              </article>
            </div>
          </div>
        </section>
        <!-- inner-section:ends -->

        <!-- inner-section : starts -->
        <section class="inner-section text-center silver-bg pad-bottom row">
          <!-- <div id="testimonial-carousel" class="testimonial-carousel owl-carousel"> -->
          <div class="col-md-8 col-md-offset-2">
            <div class="item stats-carousel-item testimonial-wrap testimonial-wrap-left col-md-6">
              <h6 class="dark">
                Working with Cavaon and the team has enabled us to get to market much quicker than other providers. Their deep travel experience is obvious in the functionalities of their work.
              </h6>
              <p><span>Paul Mercuri / <i>Founder and Managing Director of Travel Dream</i></span></p>
            </div>
            <div class="item stats-carousel-item testimonial-wrap testimonial-wrap-right col-md-6">
              <h6 class="dark">
                With Cavaon years of experience in building platform for travel industry, every time we requested for adding new functions or upgrading the system, they could understand the requirements quickly and the outcomes are always satisfied.
              </h6>
              <p><span>Suey / <i>Founder and Managing Director of Let's Travel</i></span></p>
            </div>
          </div>
          <!-- carousel:ends -->
        </section>
        <!-- inner-section : ends -->
      </section>
      <!-- page-section : ends -->

      <!-- page-section : starts -->
      <section id="team" class="page team page-section remove-pad-bottom white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section promo-text">
          <div class="container">
            <div class="row">
              <article class="col-md-8 col-md-offset-2 text-center animated" data-fx="fadeInDown">
                <h3 class="dark">
                  <span>The Team</span>
                </h3>
                <div class="liner color-bg" />
                <p class="grey">
                  Cavaon is a ditial business and platform solution company from Sydney.
                </p>
              </article>
            </div>
          </div>
        </section>
        <!-- inner-section:ends -->

        <!-- inner-section:starts -->
        <section class="inner-section team-wrap add-top-half pad-bottom">
          <div class="container">
            <div class="row">
              <!-- item:starts -->
              <article class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img data-no-retina alt="Team" title="Team" class="img-responsive" src="~/assets/images/Team.png">
                  <h3 class="dark">
                    Luis Heinz
                  </h3>
                  <h6>
                    <span>Founder / Director</span>
                  </h6>
                </div>
              </article>
              <!-- item:ends -->
              <!-- item:starts -->
              <article class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img data-no-retina alt="Team" title="Team" class="img-responsive" src="~/assets/images/Team.png">
                  <h3 class="dark">
                    Luis Heinz
                  </h3>
                  <h6>
                    <span>Web Architect</span>
                  </h6>
                </div>
              </article>
              <!-- item:ends -->
              <!-- item:starts -->
              <article class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img data-no-retina alt="Team" title="Team" class="img-responsive" src="~/assets/images/Team.png">
                  <h3 class="dark">
                    Luis Heinz
                  </h3>
                  <h6>
                    <span>Marketing Guy</span>
                  </h6>
                </div>
              </article>
              <!-- item:ends -->
              <!-- item:starts -->
              <article class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img data-no-retina alt="Team" title="Team" class="img-responsive" src="~/assets/images/Team.png">
                  <h3 class="dark">
                    Luis Heinz
                  </h3>
                  <h6>
                    <span>Founder / Director</span>
                  </h6>
                </div>
              </article>
              <!-- item:ends -->
              <!-- item:starts -->
              <article class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img data-no-retina alt="Team" title="Team" class="img-responsive" src="~/assets/images/Team.png">
                  <h3 class="dark">
                    Amy Lee
                  </h3>
                  <h6>
                    <span>Founder / Director</span>
                  </h6>
                </div>
              </article>
              <!-- item:ends -->
              <!-- item:starts -->
              <article class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img data-no-retina alt="Team" title="Team" class="img-responsive" src="~/assets/images/Team.png">
                  <h3 class="dark">
                    Luis Heinz
                  </h3>
                  <h6>
                    <span>Founder / Director</span>
                  </h6>
                </div>
              </article>
              <!-- item:ends -->
              <!-- item:starts -->
              <article class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img data-no-retina alt="Team" title="Team" class="img-responsive" src="~/assets/images/Team.png">
                  <h3 class="dark">
                    Luis Heinz
                  </h3>
                  <h6>
                    <span>Founder / Director</span>
                  </h6>
                </div>
              </article>
              <!-- item:ends -->
              <!-- item:starts -->
              <article class="col-md-3 text-left">
                <div class="item team-carousel-item team-stage">
                  <img data-no-retina alt="Team" title="Team" class="img-responsive" src="~/assets/images/Team.png">
                  <h3 class="dark">
                    Luis Heinz
                  </h3>
                  <h6>
                    <span>Founder / Director</span>
                  </h6>
                </div>
                <!-- item:ends -->
              </article>
            </div>
          </div>
        </section>
        <!-- inner-section:ends -->
      </section>
      <!-- page-section : ends -->

      <!-- page-section : starts -->
      <section id="about" class="contact page intermediate-section full-height parallax">
        <div class="overlay">
          <div class="container valign">
            <div class="row">
              <article class="col-md-8 col-md-offset-2 main-caps text-center">
                <h3 class="white">
                  <span>A little more about us</span>
                </h3>
                <div class="liner color-bg" />
                <p class="white">
                  We are a digital business & platform solutions company, based in Sydney. Vision Every business can change life of turning into a digital. Mission Helping businesses to find the perfect and most successful digital solution.
                </p>
                <p class="white">
                  We’ve been very successful in building online booking systems, tour management systems and ecommerce travel platform for travel companies.
                </p>
                <p class="white">
                  Passionate, Professional, Innovative and Opportunities are Cavaon team core values. We are young, full of energy, motivated and likes challenges. We care about our customers and focus on increase business values.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" class="contact-form black-bg page-section">
        <div class="container">
          <div class="row">
            <article class="col-md-8 col-md-offset-2 main-caps text-center">
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
                <form id="contactForm" name="myform" action="sendcontact.php" enctype="multipart/form-data" method="post">
                  <article>
                    <input id="name" type="text" placeholder="Your Name" name="name" size="100">
                  </article>
                  <article>
                    <input id="email" type="text" placeholder="Your Email" name="email" size="30">
                  </article>
                  <article>
                    <textarea id="msg" placeholder="Your Message" name="message" cols="40" rows="3" />
                    <div class="btn-wrap  text-center">
                      <button id="submit" class="btn btn-odin btn-odin-color" name="submit" type="submit">
                        Send Message
                      </button>
                    </div>
                  </article>
                </form>
                <h4 class="white">
                  info@cavaon.com.au
                </h4>
                <p class="white">
                  L1, 403 Elizabeth St.<br>Surry Hills NSW 2010
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <!-- page-section : starts -->
      <footer id="mastfoot" class="mastfoot white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section foot-top">
          <div class="container">
            <div class="row">
              <article class="col-md-12 text-center">
                <ul class="foot-social">
                  <li><a href="#"><img data-no-retina alt="Twitter" title="Twitter" src="~/assets/images/social/01.png"></a></li>
                  <li><a href="#"><img data-no-retina alt="social" title="social" src="~/assets/images/social/02.png"></a></li>
                  <li><a href="#"><img data-no-retina alt="Facebook" title="Facebook" src="~/assets/images/social/03.png"></a></li>
                  <li><a href="#"><img data-no-retina alt="social" title="social" src="~/assets/images/social/04.png"></a></li>
                </ul>
              </article>
            </div>
            <div class="row">
              <article class="col-md-12 text-center foot-logos">
                <p class="credits">
                  &copy; 2019 Cavaon. All rights reserved
                </p>
              </article>
            </div>
          </div>
        </section>
      <!-- inner-section:ends -->
      </footer>
    </section>
    <!-- Master Wrap : ends -->
  </div>
</template>

<script>
import ProjectWithSlider from './ProjectWithSlider'

export default {
  components: {
    ProjectWithSlider
  },
  data() {
    return {
      caseStudies: [
        {
          projectTitle: 'Travel Dream',
          typeOfProject: 'Web / Brand',
          projectImage: 'images/Case-Studies-Travel-Dream.png',
          topImage: 'images/Case-Studies-Travel-Dream1.png',
          logo: 'images/Case-Studies-Travel-Dream2.png',
          intro: 'Traveldream is a new online Travel agent launched in Aug 2018 with a focus on domestic deals, international tours and cruise. They offer amazing world-wide holiday deals including airfares, accommodation and premium experiences at prices that will break the internet, not the budget.',
          challenge: 'To develop a website quickly and on budget with increasing functional complexity',
          centreImage: 'images/Case-Studies-Travel-Dream3.png',
          result1: 'It has enabled us to quickly add new products, transact and manage large volumes of orders. It has also been able to scale with the team and continuing demands of the business',
          result2: 'Working with Cavaon and the team has enabled us to get to market much quicker than other providers. Their deep travel experience is obvious in the functionalities of their work.',
          font: 'images/Case-Studies-Travel-Dream4.png',
          info1: '',
          info2: '',
          screenshot1: 'images/Case-Studies-Travel-Dream5.png',
          screenshot2: ''
        },
        {
          projectTitle: "Let's Travel",
          typeOfProject: 'Web / Brand',
          projectImage: 'images/Case-studies-Lets-Travel.png',
          topImage: 'images/Case-Studies-Lets-Travel1.png',
          logo: 'images/Case-Studies-Lets-Travel2.png',
          intro: "Let's Travel Pty Ltd was founded in Sydney in 2015, focusing on operating small group day tours, charter tours and providing transfer services in Sydney and Melbourne.",
          challenge: 'As a tour operator, they need to process bookings from travel agents (data entry), assign coaches and tour guides everyday. As business growth, one of the biggest challenges they faced was increasing workload on data entry, issuing invoices and tour vouchers. Also, accuracy was getting harder to maintain.',
          centreImage: 'images/Case-Studies-Lets-Travel3.png',
          result1: 'The B2B online booking system Cavaon tailor-made has dramatically improved efficiency, accuracy and helped in increase sales. Now, travel agents make bookings directly via the system, which has streamlined they manual data entry and reduced errors. Invoices and tour vouchers are all automatically generated in just one click. The fresh and user-friendly customer-facing website clearly presents all products and detailed information, which without a doubt drives up sales.',
          result2: '',
          font: 'images/Case-Studies-Lets-Travel4.png',
          info1: 'Cavaon provides us peace of mind daily IT support, maintenance and consulting. With several years of experience in Australia travel industry, every time we requested for adding new functions or upgrading the system, they could understand the requirements quickly and the outcomes were always satisfied.',
          info2: 'We have been using the booking system for more than one year. Compared with before, sales has increased by 62.7%.',
          screenshot1: 'images/Case-Studies-Lets-Travel5.png',
          screenshot2: 'images/Case-Studies-Lets-Travel6.png'
        }
      ],
      projectDetails: Object
    }
  },
  created() {
    if (process.client) {
      const backstretchScript = document.createElement('script')
      backstretchScript.innerHTML = '$.backstretch(["/images/Banner-Branding.png", "/images/Banner-Logo.png", "/images/Banner-Marketing.png", "/images/Banner-Platform.png", "/images/Banner-WebDesign.png", "/images/Banner-Consultation.png"], {duration: 3000, fade: 750})'
      document.body.appendChild(backstretchScript)
    }
  },
  methods: {
    updateProjectDetails: function (project) {
      if (project === 'travelDream') {
        this.projectDetails = this.caseStudies[0]
      } else if (project === 'letsTravel') {
        this.projectDetails = this.caseStudies[1]
      }
    }
  }
}
</script>

<style>
  .testimonial-wrap-left {
    padding-right: 40px;
  }
  .testimonial-wrap-right {
    padding-left: 40px;
  }
  #about p {
    line-height: 1.5rem;
    padding-top: 10px;
  }
  .contact {
    position: relative;
  }
  .overlay {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(1,1,1,0.8);
  }
  .contact-form h4 {
    margin-top: 80px;
  }
</style>
