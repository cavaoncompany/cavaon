<template>
    <div class="promo-section intermediate-section action-text parallax" @mouseenter.once="counterMouseOver()">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <article class="promo-article col-md-12 text-center">
                <h1 id="number-mobile">
                  <span class="color">{{ linesOfCode.toLocaleString() }}</span>
                </h1>
                <count-to
                  id="number-desktop"
                  ref="codecounter"
                  class="color counter"
                  :start-val="startVal"
                  :end-val="linesOfCode"
                  :autoplay="false"
                  :duration="3000"
                />
                <h2><span class="white">{{ promo.promoText }}</span></h2>
                <div class="welcome-button">
                  <a class="btn btn-odin btn-odin-color" href="/start-a-project">{{ promo.buttonText }}</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import countTo from 'vue-count-to'
export default {
    components: {
        countTo,
    }
}
</script>

