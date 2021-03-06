<template>
  <div>
    <a @click="openBlog()">
      <article class="article-card card">
        <div class="card-image" :style="`background-image:url(` + thumbnail + `)`" />
        <!-- <img :src="thumbnail" :alt="title"> -->
        <div class="card-body">
          <div class="blog-card-top-line">
            <div class="date">
              {{ blogDate }}
            </div>
            <div class="grey-spacer" />
            <div class="read-time">{{ readTime }} min read</div>
          </div>
          <div class="card-spacer" />
          <p class="card-title">
            {{ title }}
          </p>
          <p class="tags">
            <span v-for="(tag, i) in tags" :key="i">{{ tag }} </span>
          </p>
        </div>
      </article>
    </a>
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
    body: {
      type: String,
      required: true,
      default: () => ''
    },
    filename: {
      type: String,
      required: false,
      default: () => ''
    },
    extract: {
      type: String,
      required: false,
      default: () => ''
    },
    page: {
      type: String,
      required: true,
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
      blogDate: Date,
      readTime: 0
    }
  },
  computed: {
    language() {
      return (this.lang + '').toLowerCase() === 'en' && 'English'
    },
    langClean() {
      return (this.language + '').slice(0, 2).toUpperCase()
    }
  },
  created() {
    const date = new Date(this.date)
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    this.blogDate = date.toLocaleDateString('en-AU', options).toUpperCase()
    this.thumbnail = this.thumbnail.replace('/static/', '/')
    this.readTime = this.calculateReadTime(this.body)
  },
  methods: {
    calculateReadTime: function (article) {
      const words = article.split(' ').length
      const readTime = Math.round(words / 200)
      return readTime
    },
    openBlog: function () {
      this.$router.push({ name: 'blog-url', params: { filename: this.filename, url: this.url } })
    }
  }
}
</script>

<style>
.article-card {
  margin-bottom: 40px;
  color: #494949;
  text-align: left;
}
.article-card img {
  height: 171px;
  width: 100%;
}
.card-spacer {
  background-color: #FFC716;
  width: 40px;
  height: 4px;
  margin-top: 13px;
  margin-bottom: 25px;
}
.card-image {
  overflow: hidden;
  height: 0;
  padding-top: 56.25%;
  background-size: cover;
}
.card-title {
  font-size: 18px;
  line-height: 1.3rem;
  height: 2.6rem;
  overflow: hidden;
  font-weight: 700;
  color: #494949;
}
.blog-card-top-line {
  display: flex;
  color: #494949;
  font-weight: 500;
}
.blog-card-top-line .grey-spacer {
  background-color: #494949;
  width: 4px;
  height: 4px;
  border-radius: 50px;
  margin: 7px;
}
</style>
