<template>
  <section id="team-container" class="page team page-section remove-pad-bottom white-bg">
    <!-- inner-section:starts -->
    <section class="inner-section promo-text">
      <div class="container">
        <div class="row">
          <article class="col-md-12 col-lg-8 col-md-offset-2 text-center animated" data-fx="fadeInDown">
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
            <div itemscope itemtype="https://schema.org/Person" class="item team-carousel-item team-stage">
              <img
                :id="member.firstname"
                data-no-retina
                :alt="member.firstname + ' ' + member.lastname"
                :title="member.firstname + ' ' + member.lastname"
                class="img-responsive"
                :src="member.img1"
                itemprop="image"
                @mouseover="teamMouseOver(member.firstname, member.img2)"
                @mouseleave="teamMouseOver(member.firstname, member.img1)"
              >
              <h3 itemprop="name" class="dark team-desktop">
                {{ member.firstname }}<br>{{ member.lastname }}
              </h3>
              <h3 itemprop="name" class="team-mobile">
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
</template>

<script>
import team from '../static/content/team.json'

export default {
  data() {
    return {
      team: team
    }
  },
  methods: {
    teamMouseOver: function (name, image) {
      document.getElementById(name).src = image
    }
  }
}
</script>
