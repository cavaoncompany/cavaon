<template>
    <section id="caseStudies" class="page portfolio page-section remove-pad-bottom white-bg">
        <!-- inner-section:starts -->
        <section class="inner-section promo-text">
          <div class="container">
            <div class="row">
              <article class="col-md-12 col-lg-8 col-md-offset-2 text-center animated" data-fx="fadeInUp">
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
        <ProjectWithSlider :project-details="projectDetails" />
        <!-- inner-section : starts -->
        <section class="inner-section add-top-quarter">
          <!-- Filter -->
          <div id="filter" class="clearfix">
            <div id="filter_wrapper" />
          </div>
          <!-- End: Filter -->

          <section id="portfolio-wrap">
            <!-- Thumbnails -->
            <div id="portfolio_thumbs">
              <ul id="grid" class="sortablePortfolio clearfix">
                <!-- 1st thumb -->
                <li class="folio-thumb mix category1">
                  <a href="projects/project-slider" class="more_info" @click="updateProjectDetails('letsTravel')">
                    <!-- Thumbnail -->
                    <img data-no-retina alt="Let's-Travel" title="Let's Travel" src="/images/Case-studies-Lets-Travel.png" @click="updateProjectDetails('letsTravel')">
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
                    <img data-no-retina alt="Travel-Dream" title="Travel Dream" src="/images/Case-Studies-Travel-Dream.png" @click="updateProjectDetails('travelDream')">
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
</template>
