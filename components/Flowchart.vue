<template>
  <section id="flowchart" class="page page-section" @mouseover="changeUrl('services')">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4 flowchart-left">
          <article class="title">
            <h2>{{ flowchart.title }}</h2>
          </article>
          <img :src="flowchart.leftImage" alt="timeline">
        </div>
        <div class="col-12 col-lg-8">
          <div class="row flowchart-items">
            <div v-for="(item, index) in flowchart.steps" :key="index">
              <div v-if="item.id % 2 === 0" class="col-12 col-sm-6">
                <img :src="item.image" :alt="item.title">
              </div>
              <div class="col-12 col-sm-6">
                <h3>{{ item.id }}</h3>
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
                <div v-if="index < (flowchart.steps.length - 1)" class="timeline" />
              </div>
              <div v-if="item.id % 2 !== 0" class="col-12 col-sm-6">
                <img :src="item.image" :alt="item.title">
              </div>
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
  name: 'Flowchart',
  data() {
    return {
      flowchart: flowchart
    }
  },
  methods: {
    changeUrl: function (link) {
      history.pushState({}, null, '/' + link)
    }
  }
}
</script>

<style>
  #flowchart {
    margin-top: 40px;
  }
  #flowchart article {
    border-left: 1px solid #FFC716;
    margin-top: -120px;
    padding-top: 140px;
    padding-left: 15px;
  }
  #flowchart article h2 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 0;
  }
  #flowchart .flowchart-left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #flowchart .flowchart-left img {
    width: 60%;
  }
  .flowchart-items img {
    width: 100%;
    height: auto;
  }
  .flowchart-items h3 {
      font-size: 16px;
      font-weight: 500;
  }
  .flowchart-items .timeline {
    border-left: 1px solid #FFC716;
    height: 100px;
    margin-left: 25px;
  }
</style>
