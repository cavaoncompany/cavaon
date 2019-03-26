<template>
  <section id="mobile-projects">
    <div v-for="(project, index) in projects.projects" :key="index" class="item item-mobile-projects">
      <a class="venobox" data-gall="thumb-gallery" :href="project.image">
        <img data-no-retina :alt="project.title" title="project.title" class="img-responsive" :src="project.image">
      </a>
    </div>
  </section>
</template>

<script>
import projects from '../static/content/projects.json'

export default {
  data() {
    return {
      projects: projects
    }
  }
}
</script>

<style>
  #mobile-projects {
      flex-wrap: wrap;
  }
  .item-mobile-projects {
      width: 50%;
  }
</style>
