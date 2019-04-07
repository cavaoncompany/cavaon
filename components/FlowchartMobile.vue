<template>
  <section id="flowchart-mobile">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 flowchart-left-mobile">
          <article class="title">
            <h2>{{ flowchart.title }}</h2>
          </article>
          <!-- <img :src="flowchart.leftImage" alt="timeline"> -->
        </div>
        <div class="col-12 col-lg-8">
          <div class="row flowchart-items-mobile">
            <div v-for="(item, index) in flowchart.steps" :key="index" class="row">
              <div class="col-12 col-sm-6">
                <h3>{{ item.id }}</h3>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="col-12 col-sm-6">
                <img :src="item.image" :alt="item.title">
              </div>
              <div v-if="item.id < flowchart.steps.length" class="timeline-mobile col-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import flowchart from '../static/content/flowchart.json'

export default {
  data() {
    return {
      flowchart: flowchart
    }
  }
}
</script>

<style>
  #flowchart-mobile {
    margin-top: 40px;
    margin-bottom: 100px;
  }
  #flowchart-mobile article {
    border-left: 1px solid #FFC716;
    margin-top: -45px;
    padding-top: 60px;
    padding-left: 15px;
    margin-bottom: 25px;
  }
  #flowchart-mobile article h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 0;
  }
  #flowchart-mobile .flowchart-left-mobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #flowchart-mobile .flowchart-left-mobile img {
    width: 60%;
    margin-bottom: 20px;
  }
  .flowchart-items-mobile img {
    width: 100%;
    height: auto;
  }
  .flowchart-items-mobile h3 {
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
  }
  .flowchart-items-mobile .timeline-mobile {
    border-left: 1px solid #FFC716;
    height: 100px;
    margin-left: 25px;
    margin-top: 5px;
    margin-bottom: -38px;
  }
  .flowchart-items-mobile .row {
    margin-left: 0;
    margin-right: 0;
  }
</style>
