<template>
  <div class="container">
    <!-- page-section : starts -->
    <div id="portfolio_item" class="add-top-half">
      <section class="folio-head silver-bg">
        <div class=" folio-align">
          <div class="container">
            <div class="row">
              <article class="col-md-12 col-lg-8 col-lg-offset-2 text-center">
                <div class="project-page-caps remove-pad-top remove-pad-bottom  add-top-quarter text-center">
                  <h2 class="dark">
                    {{ projectDetails.projectTitle }}
                  </h2>
                  <h3 class="dark">
                    <span>{{ projectDetails.typeOfProject }}</span>
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <!-- container : starts -->
      <div id="item_content" class="container">
        <div class="row add-top-half add-bottom-quarter">
          <article class="col-md-12 text-center clearfix">
            <!-- Slider -->
            <div id="item_slider" class="top-frame">
              <ul class="slides">
                <li><img :src="projectDetails.projectImage"></li>
              </ul>
            </div>
          </article>
        </div>

        <section id="about-portfolio-item" class="page about remove-pad-top remove-pad-bottom white-bg">
          <div class="container pad-top-half pad-bottom-half">
            <div class="item about-carousel-item">
              <div class="row">
                <article class="col-md-12 col-lg-8 col-lg-offset-2 main-caps text-center">
                  <h3 class="dark">
                    <span>Company Background</span>
                  </h3>
                  <p class="dark">
                    {{ projectDetails.intro }}
                  </p>
                  <img :src="projectDetails.topImage" :alt="projectDetails.projectTitle">
                  <img :src="projectDetails.logo" :alt="projectDetails.projectTitle">
                  <h3 class="dark">
                    <span>Challenges of your company</span>
                  </h3>
                  <p class="dark">
                    {{ projectDetails.challenge }}
                  </p>
                  <img :src="projectDetails.centreImage" :alt="projectDetails.projectTitle">
                  <h3 class="dark">
                    <span>How the system we built for you resolved your problems</span>
                  </h3>
                  <p class="dark">
                    {{ projectDetails.result1 }}
                  </p>
                  <p class="dark">
                    {{ projectDetails.result2 }}
                  </p>
                  <img :src="projectDetails.font" :alt="projectDetails.projectTitle">
                  <p class="dark">
                    {{ projectDetails.info1 }}
                  </p>
                  <p class="dark">
                    {{ projectDetails.info2 }}
                  </p>
                  <img :src="projectDetails.screenshot1" :alt="projectDetails.projectTitle">
                  <img v-if="projectDetails.screenshot2 !== ''" :src="projectDetails.screenshot2" :alt="projectDetails.projectTitle">
                </article>
              </div>
            </div>
          <!-- item:ends -->
          </div>
        </section>
      </div>
      <div class="row">
        <article class="col-md-12 text-center">
          <!-- Control buttons -->
          <div id="control_buttons" class="clearfix">
            <!-- <a id="prev" href="projects/project-vimeo.html">&lt;</a> -->
            <a id="close" href="#">x</a>
            <!-- <a id="next" href="projects/project-youtube.html">&gt;</a> -->
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectDetails: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
  #about-portfolio-item img {
    max-width: 100%;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  #about-portfolio-item p {
    padding-top: 15px;
    padding-bottom: 15px;
    line-height: 1.5rem;
  }
</style>
