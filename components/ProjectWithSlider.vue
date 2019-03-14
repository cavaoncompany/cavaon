<template>
  <div>
    <!-- page-section : starts -->
    <div id="portfolio_item" class="add-top-half">
      <section class="folio-head silver-bg">
        <div class=" folio-align">
          <div class="container">
            <div class="row">
              <article class="col-md-8 col-md-offset-2 text-center">
                <div class="project-page-caps remove-pad-top remove-pad-bottom  add-top-quarter text-center">
                  <h2 class="dark">
                    Project with Slider
                  </h2>
                  <h3 class="dark">
                    <span>web / brand</span>
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
                <li><img src="http://placehold.it/1500x1050"></li>
                <li><img src="http://placehold.it/1500x1050"></li>
                <li><img src="http://placehold.it/1500x1050"></li>
              </ul>
            </div>
          </article>
        </div>

        <section id="about" class="page about remove-pad-top remove-pad-bottom white-bg">
          <div class="container pad-top-half pad-bottom-half">
            <div class="item about-carousel-item">
              <div class="row">
                <article class="col-md-8 col-md-offset-2 main-caps text-center">
                  <h3 class="grey">
                    project highlight text goes here like this
                  </h3>
                  <div class="liner color-bg" />
                  <h6 class="dark">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at malesuada mauris. Curabitur ut nisi efficitur, eleifend quam eu, fermentum turpis. Praesent volutpat cursus ornare. Aliquam luctus nisl quis sapien tristique, scelerisque consequat magna condimentum. Nunc nec dui quis est sollicitudin ornare. Mauris justo libero, dapibus vitae massa quis, posuere euismod quam. Donec sed orci augue. Morbi cursus risus sed sollicitudin varius. Duis eu volutpat.
                  </h6>
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
            <a id="prev" href="projects/project-vimeo.html">&lt;</a>
            <a id="close" href="#">x</a>
            <a id="next" href="projects/project-youtube.html">&gt;</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectDetails: Object
  }
}
</script>
