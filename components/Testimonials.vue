<template>
  <section id="testimonials" class="page testimonials page-section remove-pad-bottom white-bg">
  <!-- inner-section:starts -->
    <section class="inner-section promo-text silver-bg row">
      <div class="container">
        <div class="row">
          <article class="col-md-12 col-lg-8 col-md-offset-2 text-center animated" data-fx="fadeInUp">
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
          <div
            v-for="(testimonial, index) in testimonials.testimonials"
            :key="index"
            itemprop="review"
            itemscope
            itemtype="http://schema.org/Review"
            class="item stats-carousel-item testimonial-wrap testimonial-wrap-right"
          >
            <h3 itemprop="description" class="main-caps">
              {{ testimonial.title }}
            </h3>
            <h6 itemprop="reviewRating" class="dark">
              {{ testimonial.testimonial }}
            </h6>
        <p><span itemprop="author" class="testimonial-name">{{ testimonial.name }}</span><br><span><i>{{ testimonial.jobtitle }}<br>{{ testimonial.company }}</i></span></p>
        </div>
    </div>
    </div>
    <!-- carousel:ends -->
</section>
<!-- inner-section : ends -->
</section>
</template>

<script>
import testimonials from '../static//content/testimonials.json'

export default {
    data() {
        return {
            testimonials: testimonials
        }
    }
}
</script>
