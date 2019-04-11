<template>
  <div class="col-md-6">
    <article class="article-card card">
      <img :src="thumbnail" :alt="title">
      <div class="card-body">
        <div class="date">{{ blogDate }}</div>
        <div class="card-spacer"/>
        <!-- <h5 class="card-title">
          <span
            v-if="lang"
            class="hidden bg-grey-light rounded p-1 mr-2 text-sm"
            :title="language"
          >
            {{ langClean }}
          </span>
          <span v-if="!url">{{ title }}</span>
          <nuxt-link
            v-else
            :to="url"
            class="no-underline disable-underline transition:color"
          >
            {{ title }}
          </nuxt-link>
        </h5> -->
        <p class="card-title">
          {{ description }}
        </p>
        <p class="tags">
          <span v-for="(tag, i) in tags" :key="i">
            {{ tag }}
          </span>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: () => ''
    },
    title: {
      type: String,
      required: true,
      default: () => ''
    },
    subtitle: {
      type: String,
      required: true,
      default: () => ''
    },
    description: {
      type: String,
      required: true,
      default: () => ''
    },
    tags: {
      type: Array,
      required: true,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: () => ''
    },
    thumbnail: {
      type: String,
      required: true,
      default: () => ''
    },
    extract: {
      type: String,
      required: false,
      default: () => ''
    },
    lang: { // TODO: https://github.com/nuxt-community/nuxt-i18n
      type: String,
      required: true,
      default: () => 'EN'
    }
  },
  data() {
    return {
      blogDate: Date
    }
  },
  created() {
    const date = new Date(this.date)
    const options = { year: 'numeric', month: 'short', day: 'numeric'}
    this.blogDate = date.toLocaleDateString('en-AU', options).toUpperCase()
  },
  computed: {
    language() {
      return (this.lang + '').toLowerCase() === 'en' && 'English'
    },
    langClean() {
      return (this.language + '').slice(0, 2).toUpperCase()
    }
  }
}
</script>

<style>
.article-card {
  margin-bottom: 40px;
  color: #494949;
}
.card-spacer {
  background-color: #FFC716;
  width: 40px;
  height: 4px;
  margin-top: 13px;
  margin-bottom: 25px;
}
.card-title {
  font-size: 18px;
}
</style>
