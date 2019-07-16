<template>
  <section id="flowchart" class="page page-section">
    <div class="container">
      <h2>{{ flowchart.title }}</h2>
      <div class="liner color-bg" />
      <div class="row flowchart-content">
        <div v-for="(item, i) in flowchart.steps" :key="i" class="card-container col-md-6 col-lg-3">
          <div class="card">
            <img class="card-img-top" :src="item.image" :alt="item.title">
            <div class="card-body">
              <h5 class="card-title">
                {{ item.title }}
              </h5>
              <div class="liner color-bg" />
              <p class="card-text">
                {{ item.description }}
              </p>
            </div>
          </div>
          <div v-if="i < flowchart.steps.length - 1" class="next-item">
            <i class="fa fa-chevron-right" />
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
      flowchart: flowchart,
      lastcard: false
    }
  }
}
</script>

<style>
  #flowchart {
    margin-top: 40px;
    font-size: 14px;
    color: #222222;
    text-align: center;
  }
  #flowchart h2 {
    font-size: 24px;
  }
  #flowchart .flowchart-content .liner {
    width: 39px;
  }
  #flowchart h5 {
    height: 1rem;
    font-size: 16px;
  }
  #flowchart .card {
    box-shadow: 2px 2px 10px rgba(228, 214, 233, 0.8);
    border: none;
    padding: 10px;
    height: 100%;
  }
  #flowchart .card-body {
    color: #494949;
  }
  #flowchart .card-container {
    position: relative;
  }
  #flowchart .card-text {
    padding-top: 10px;
  }
  #flowchart .fa {
    color: #FFC716;
    font-size: 20px;
    font-weight: 300;
  }
  #flowchart .next-item {
    height: 50px;
    border-radius: 50%;
    width: 50px;
    box-shadow: 7px 2px 7px 0px rgba(228, 214, 233, 0.8);
    position: absolute;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 130px;
    right: -5px;
    background-color: #fff;
    padding-left: 10px
  }
</style>
