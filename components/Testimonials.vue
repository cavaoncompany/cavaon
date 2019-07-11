<template>
  <section id="testimonials" class="page testimonials page-section remove-pad-bottom white-bg">
    <!-- inner-section:starts -->
    <section class="inner-section promo-text row">
      <div class="container">
        <div class="row">
          <article class="col-md-12 col-lg-8 col-md-offset-2 text-center animated" data-fx="fadeInUp">
            <h3 class="dark">
              <span>{{ testimonials.title }}</span>
            </h3>
            <img :src="testimonials.stars" alt="five star rating">
          </article>
        </div>
      </div>
    </section>
    <!-- inner-section:ends -->

    <!-- inner-section : starts -->
    <section class="inner-section text-center row">
      <!-- <div id="testimonial-carousel" class="testimonial-carousel owl-carousel"> -->
      <div class="container">
        <div class="testimonial-wrapper row">
          <div
            v-for="(testimonial, index) in testimonials.testimonials"
            :key="index"
            itemprop="review"
            itemscope
            itemtype="http://schema.org/Review"
            class="col-md-4"
          >
          <div class="speech">
              <h5 itemprop="description" class="main-caps">
              {{ testimonial.title }}
            </h5>
            <div class="liner color-bg" />
            <p itemprop="reviewRating" class="dark">
              {{ testimonial.testimonial }}
            </p>
            <div class="triangle" />
          </div>
            <div class="speaker">
              <img :src="testimonial.avatar" :alt="testimonial.name">
              <p>
                <span itemprop="author" class="testimonial-name">{{ testimonial.name }}</span>
                <br>
                <span><i>{{ testimonial.jobtitle }}<br>{{ testimonial.company }}</i></span>
              </p>
            </div>
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

<style>
#testimonials {
  background-color: #fff;
  margin-bottom: 40px;
}
#testimonials h3 {
  font-size: 24px;
}
#testimonials h5 {
  font-size: 14px;
  font-weight: 500;
}
#testimonials .speech {
  box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
  height: 80%;
  padding: 15px;
  text-align: left;
  position: relative;
}
#testimonials .speech p {
  font-size: 13px;
  margin-top: 10px;
}
#testimonials .speech .liner {
  width: 39px;
}
#testimonials .speaker {
  display: flex;
  margin-top: 10px;
}
#testimonials .speaker p {
  font-size: 13px;
  text-align: left;
  margin-top: 5px;
  margin-bottom: auto;
}
#testimonials .speaker img {
  height: 50px;
  margin-top: auto;
  margin-bottom: auto;
}
#testimonials .speech .triangle {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid #fff;
  margin: 0 auto;
  position: absolute;
  bottom: -10px;
}
</style>
